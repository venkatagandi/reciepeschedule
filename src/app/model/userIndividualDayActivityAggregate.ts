export interface UserIndividualDayActivityAggregate {
    userFullName:string,
    resourcesid:string,
    IndividualHours:individualDayHours[]

}

export interface individualDayHours {
    date:string,
    totalhours:number
}