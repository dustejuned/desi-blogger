import { useEffect, useRef } from "react";
import './preview.css';


interface PreviewProps {
    code: string;
    err: string;
}

const html = `
<html>
    <head>
        <style>
            html {background-color: white}
        </style>
    </head>   
        <body>
            <div id="root"></div>
            <script>
                const handleError = (err) => {
                    console.log(err);
                    const root = document.getElementById('root');
                    console.log(root);
                    root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
                    console.log(root.innerHTML);
                };

                window.addEventListener('error', (event) => {                    
                    event.preventDefault();
                    handleError(event.error);
                });
                window.addEventListener('message', (event) => {
                    try{                            
                        eval(event.data);
                    } catch(err){                      
                        handleError(err);
                    }                    
                },false);
            </script>
        </body>    
</html>
`;

export const Preview: React.FC<PreviewProps> = ({ code, err }) => {
    const iref = useRef<any>();

    useEffect(() => {
        iref.current.contentWindow.postMessage(code, '*');        
    }, [code]);

    return (
        <div className="preview-wrapper">
            <iframe
                title="Preview"
                ref={iref}
                sandbox="allow-scripts"
                srcDoc={html}
            />
            {err && <div className="preview-error">{err}</div>}
        </div>

    );
}