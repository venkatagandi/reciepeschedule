import { Activity } from "./activity";

export interface ResourceIndividualActivityMapping {
    activityid:number,
    activityname:string,
    resourcesid:string,
    IndividualHours:individualActivityDayHours
}

export interface individualActivityDayHours {
    date:string,
    totalhours:number
}