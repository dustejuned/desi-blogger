import { useRef } from 'react';
import Editor, { OnChange } from '@monaco-editor/react';

interface CodeEditorProps {
    onChange: (newValue: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = (props) => {

    const onEditorValueChange = (value: string | undefined, ev: any) => {
        if (props) {
            props.onChange(value || "");
        }
    };

    return (
        <div>
            <Editor
                theme="vs-dark"
                height="75vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                onChange={onEditorValueChange}
            />
        </div>
    );
};