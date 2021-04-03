import { AppComponent } from "../../models/AppComponent";

export interface IAppComponentCatalogService {
    getAppComponentCatalogs(): Promise<AppComponent[]>;
    saveAppComponent(component: AppComponent): Promise<AppComponent>;
    publishAppComponent(component: AppComponent): Promise<AppComponent>;
    deleteAppComponent(component: AppComponent): Promise<boolean>;
}