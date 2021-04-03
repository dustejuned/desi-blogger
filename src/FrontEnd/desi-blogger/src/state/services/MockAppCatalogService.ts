import { AppComponent } from '../../models/AppComponent';
import {IAppComponentCatalogService} from './IAppComponentCatalogService';
export class MockAppCatalogService implements IAppComponentCatalogService {
    
    public getAppComponentCatalogs = (): Promise<AppComponent[]> => {
        return new Promise<AppComponent[]>((resolve, reject) => {
            resolve([{id: '', code: '', status: 'DRAFT', name: '', version: '1.0.0.0', compliedCode: '' }]);
        });
    }

    public saveAppComponent = (component: AppComponent): Promise<AppComponent> => {
        return new Promise<AppComponent>((resolve, reject) => {
            resolve(component);
        });
    };

    public publishAppComponent = (component: AppComponent): Promise<AppComponent> => {
        return new Promise<AppComponent>((resolve, reject) => {
            resolve(component);
        });
    };

    public deleteAppComponent = (component: AppComponent): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    };

}