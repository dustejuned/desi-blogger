import {ActionType} from '../action-types';

export const SaveCustomComponent = (id: string, content: string) => {
    return {
        type: ActionType.SAVE_APP,
        payload: {
            id,
            content
        }
    };
};


export const PublishCustomComponent = (id: string, content: string) => {
    return {
        type: ActionType.PUBLISH_APP,
        payload: {
            id,
            content
        }
    };
};

export const DeleteCustomComponent = (id: string) => {
    return {
        type: ActionType.DELETE_APP,
        payload: {
            id
        }
    };
};

export const CreateNewCustomComponent = () => {
    return {
        type: ActionType.CREATE_NEW_APP
    };
};

export const GetCustomComponents = () => {
    return {
        type: ActionType.GET_APPS
    };
};

export const GetCurrentCustomComponent = (id: string) => {
    return {
        type: ActionType.GET_CURRENT_APP,
        payload: {
          id  
        }
    };
};

export const CloseCurrentCustomComponent = (id: string) => {
    return {
        type: ActionType.CLOSE_CURRENT_APP,
        payload: {
          id  
        }
    };
};

