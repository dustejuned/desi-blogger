import { type } from 'node:os';
import { AppComponent } from '../../models/AppComponent';
import {ActionType} from '../action-types';

export interface SaveAppAction{
    type: ActionType.SAVE_APP,
    payload: AppComponent
};

export interface PublishAppAction{
    type: ActionType.PUBLISH_APP,
    payload: AppComponent
};

export interface DeleteAppAction{
    type: ActionType.DELETE_APP,
    payload: AppComponent
};

export interface CreateNewAppAction{
    type: ActionType.CREATE_NEW_APP
}

export interface GetAppsAction{
    type: ActionType.GET_APPS   
};

export interface GetCurrentAppAction{
    type: ActionType.GET_CURRENT_APP,
    payload: string
};

export interface CloseCurrentAppAction{
    type: ActionType.CLOSE_CURRENT_APP,
    payload: string
}

export type Action = SaveAppAction | PublishAppAction | DeleteAppAction | GetAppsAction | CreateNewAppAction | GetCurrentAppAction | CloseCurrentAppAction;

