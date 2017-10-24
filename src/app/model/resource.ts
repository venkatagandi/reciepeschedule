export interface ResourceInfo {
    resourcesid: string;
    fullname: string;
    reportees:ResourceInfo[]
}