
export interface AppComponent{
    id: string;
    code: string;
    status: "DRAFT" | "PUBLISHED";
    name: string;
    version: string;
    compliedCode: string;
}