import * as esbuild from 'esbuild-wasm';
import axios from 'axios';

export const fetchPkgPlugin = (inputCode: string) => {
    return {
        name: 'fetch-pkg-plugin',
        setup(build: esbuild.PluginBuild) {
            //handle root entry file
            build.onLoad({ filter: /(^index\.js$)/ }, () => {
                return { loader: 'jsx', contents: inputCode };
            });
            //handle cached case

            //handle css case
            build.onLoad({ filter: /.css$/ }, async (args: any) => {
                const { data, request } = await axios.get(args.path);
                const cleanedCode = data
                .replace(/\n/g, '')
                .replace(/"/g, '\\"')
                .replace(/'/g, "\\'");

                const contents = `
                    const style = document.createElement('style');
                    style.innerText = '${cleanedCode}';
                    document.head.appendChild(style);
                `;
                return { loader: 'jsx', contents: contents, resolveDir: new URL('./' + request.responseURL).pathname };
            });

            //handle other cases
            build.onLoad({ filter: /.*/ }, async (args: any) => {
                const { data, request } = await axios.get(args.path);

                return { loader: 'jsx', contents: data, resolveDir: new URL('./', request.responseURL).pathname };
            });
        }
    };
}