//import { ResourceInfo } from "./resource";
import { Activity } from "./activity";

export interface ResourceActivityDaily {
    //resourceinfo:ResourceInfo;
    resourcesid: string;
    fullname: string;
    reportees:ResourceActivityDaily[];
    //activity:Activity[];
    //totalResourcehoursforadate:number;
    //activitydate:string;
    activityMap :  [{[key:string]:[{[key:string]:Activity[]}]}] //keys of strings will be dates
    //activity array for each date will be the return type.
}