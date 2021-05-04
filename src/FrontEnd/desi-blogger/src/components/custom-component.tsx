import * as React from 'react';
import { useEffect, useState } from "react";
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { AppComponent } from "../models/AppComponent";
import { CodeEditor } from "./code-editor";
import { CommandBarButton, DefaultButton, IStackItemStyles, Label, Stack } from "@fluentui/react";
import { bundle } from '../bundler';
import { Preview } from './preview';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import './custom-component.css';

interface CurrentComponentProps {
    id: string | null;
}

export const CustomComponent: React.FC<CurrentComponentProps> = ({ id }) => {
    const { SaveCustomComponent, PublishCustomComponent } = useActions();
    const [currentApp, setCurrentApp] = useState<AppComponent>();
    const [err, setErr] = useState<string>('');
    const comp = useTypedSelector((state) => state.appCatalogs?.data[id || ""]);
    const stackTokens = { childrenGap: 10 };
    const stackItemStyles: IStackItemStyles = {
        root: {
            display: 'flex'
        },
    };

    const randomId = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    useEffect(() => {
        if (comp) {
            setCurrentApp(comp);
        }
        else {
            setCurrentApp({ id: randomId(), code: '', status: "DRAFT", version: "0.0.0.0", compliedCode: "", name: "" });
        }

    }, []);

    const onValueChanged = React.useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if (currentApp) {
            setCurrentApp({ ...currentApp, [event.currentTarget.name]: newValue });
        };
    },
        [currentApp]);

    const onCodeChanged = (newValue: string) => {
        if (currentApp) {
            setCurrentApp({ ...currentApp, ["code"]: newValue });
        }
    }

    const buildCode = async () => {
        if (currentApp && currentApp.code) {

            const compliedCode = await bundle(currentApp.code);
            if (compliedCode.err) {
                setErr(compliedCode.err);
            }
            else {
                setCurrentApp({ ...currentApp, ["compliedCode"]: compliedCode.code });
                setErr('');
            }
        }
    }



    return (
        <SplitterLayout primaryIndex={0}>

            <Stack tokens={stackTokens}>
                <TextField name="id" label="App Id" disabled value={currentApp?.id} />
                <TextField name="name" label="App Name" onChange={onValueChanged} value={currentApp?.name}></TextField>
                <CodeEditor onChange={onCodeChanged}></CodeEditor>
                <Stack horizontal tokens={stackTokens}>
                    <CommandBarButton
                        text={'Build and preview'}
                        iconProps={{ iconName: 'BoxPlaySolid' }}
                        onClick={() => { buildCode(); }}
                    />
                    <CommandBarButton
                        text={'Save as draft'}
                        iconProps={{ iconName: 'SaveAs' }}
                        onClick={() => { }}
                    />
                    <CommandBarButton
                        text={'Publish'}
                        iconProps={{ iconName: 'WebPublish' }}
                        onClick={() => { }}
                    />
                </Stack>
            </Stack>


            <Preview code={currentApp?.compliedCode || ''} err={err}></Preview>

        </SplitterLayout>

    );
}