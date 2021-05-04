import * as esbuild from 'esbuild-wasm';
import { useRef } from 'react';
import {fetchPkgPlugin} from './plugins/fetch-pkg-plugin';
import {unpkgPathPlugin} from './plugins/unpkg-path-plugin';

let isServiceIntialized = false;
export const bundle = async (inputCode: string) => {
  
    if(!isServiceIntialized){
        await esbuild.initialize({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.10.2/esbuild.wasm',
        });

        isServiceIntialized = true;
    }

    try{

        const result = await esbuild.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin(), fetchPkgPlugin(inputCode)],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window'
            },
            jsxFactory: '_React.createElement',
            jsxFragment: '_React.Fragment',
        });

        return {
            code: result.outputFiles[0].text,
            err: ''
        }

    }catch(err){
        return {
            code: '',
            err: err
        }
    }       
};