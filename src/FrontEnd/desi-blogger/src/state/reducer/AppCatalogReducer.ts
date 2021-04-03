import { AppComponent } from "../../models/AppComponent";
import { Action } from "../actions";
import produce from 'immer';
import { ActionType } from "../action-types";
import { stat } from "node:fs";

interface AppCatalogState {
    loading: boolean;
    error: string;
    data: {
        [key: string]: AppComponent
    };
    currentAppComponent: AppComponent | null;

}

const initialState: AppCatalogState = {
    loading: false,
    error: '',
    data: {},
    currentAppComponent: null
};

const appCatalogsReducer = produce((state: AppCatalogState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.CREATE_NEW_APP:
            let component: AppComponent = {
                id: randomId(),
                code: '',
                compliedCode: '',
                status: 'DRAFT',
                name: '',
                version: '1.0.0.0'
            };
            state.data[component.id] = component;
            state.currentAppComponent = component;
            return state;
        case ActionType.SAVE_APP:            
            state.data[action.payload.id].code = action.payload.code;
            return state;
        case ActionType.PUBLISH_APP:
            state.data[action.payload.id].code = action.payload.code;
            state.data[action.payload.id].status = 'PUBLISHED';
            return state;
        case ActionType.DELETE_APP:
            delete state.data[action.payload.id];
            return state;
        case ActionType.GET_APPS:
            return state;
        default:
            return state;
    }
});

const randomId = () => {
    return Math.random().toString(36).substr(2, 10);
};


export default appCatalogsReducer;