import { combineReducers } from 'redux';
import appCatalogsReducer from './AppCatalogReducer';

const reducer = combineReducers({
    appCatalogs: appCatalogsReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;