import { Activity } from "./activity";

export interface UserIndividualDayActivityAggregate {
    userFullName:string,
    resourcesid:string,
    IndividualHours:individualDayHours[], //keys of strings will be dates,
    activitymap:any

}

export interface individualDayHours {
    date:string,
    totalhours:number
}

