import {ActionType} from '../action-types';

export const SaveAppComponent = (id: string, content: string) => {
    return {
        type: ActionType.SAVE_APP,
        payload: {
            id,
            content
        }
    };
};


export const PublishAppComponent = (id: string, content: string) => {
    return {
        type: ActionType.PUBLISH_APP,
        payload: {
            id,
            content
        }
    };
};

export const DeleteAppComponent = (id: string) => {
    return {
        type: ActionType.DELETE_APP,
        payload: {
            id
        }
    };
};

export const CreateNewAppComponent = () => {
    return {
        type: ActionType.CREATE_NEW_APP
    };
};

export const GetAppComponents = () => {
    return {
        type: ActionType.GET_APPS
    };
};

export const OpenCurrentAppComponent = (id: string) => {
    return {
        type: ActionType.OPEN_CURRENT_APP,
        payload: {
          id  
        }
    };
};

export const CloseCurrentAppComponent = (id: string) => {
    return {
        type: ActionType.CLOSE_CURRENT_APP,
        payload: {
          id  
        }
    };
};

