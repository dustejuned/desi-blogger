import * as React from 'react';
import { CustomComponent } from "./custom-component";
import { useBoolean } from "@fluentui/react-hooks";
import { DefaultButton, Panel, PanelType } from '@fluentui/react';


export const CustomComponentList: React.FC = () => {
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    const [currentAppId, setCurrentAppId] = React.useState<string | null>(null);

    const CreateNewApp = React.useCallback(() => {
        setCurrentAppId(null);
        openPanel();
    }, []);

    return (
        <div style={{padding:10}}>
            <DefaultButton
                text={'Create new app'}
                iconProps={{ iconName: 'Add' }}
                onClick={CreateNewApp}
            />
            <Panel isOpen={isOpen} type={PanelType.extraLarge} closeButtonAriaLabel="Close" onDismiss={dismissPanel}>
                <CustomComponent id={currentAppId}></CustomComponent>
            </Panel>
        </div>
    );
}