import { Component, OnInit } from '@angular/core';
import { ResourceActivityDaily } from './model/resourceactvitydaily';
import { EntitlementService } from './services/entitlement.service';
import { UserIndividualDayActivityAggregate } from './model/userIndividualDayActivityAggregate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  entitledData:ResourceActivityDaily[];
  daysVal:string[]=[];
  newDaysArray:any[]=[];
  userIndividual:UserIndividualDayActivityAggregate[]= [];

  public constructor(private entitlementservice:EntitlementService){

  }

  ngOnInit() {
     let entitledreceiveddata:ResourceActivityDaily[]= this.entitlementservice.getEntitlementsData();
     this.entitledData=entitledreceiveddata;
     //console.log('entitled data',this.entitledData);
     entitledreceiveddata.map(p=>{
      //console.log(p.resourcesid);
      //console.log(p.fullname);
      ////console.log(p.activityMap);
      //console.log("===============================================");
      p.activityMap.map(q=>{
        //console.log("========= Activity Info ===========");
        for(var qprops in q){
          //console.log("==== week starts ======");
          //console.log(q[qprops]);
          q[qprops].map(r=>{
            console.log("==== Individual week starts ======");
            //let maps = r;
            //console.log(maps.get("10/24/2017"));
            //this.daysVal.push(r);
            for(var propt in r){
              console.log("==== Individual day starts ======");
              //console.log('prp vals');
              console.log('new type',typeof(propt));
              //check if value exists already
              console.log("=============If value exists already Starts=============");
              console.log(this.daysVal);
              console.log("=============If value exists already Ends=============");
              if (this.daysVal.filter(item=> item == propt).length == 0){
                this.daysVal.push(propt);
              }
              console.log(propt + ': ' + r[propt]);
              r[propt].map(n=>{
                console.log('======= Individual day values =======');
                console.log(n);
              })
            }
            //console.log(r);
          })

        }
      });
      //console.clear();
      //console.log('your day vals is:',this.daysVal);
     });
     this.evaluateDaysValForHeaders();
     this.evaluateIndividualUserHourRows();
  }

  evaluateDaysValForHeaders() {
    var size = 5;
    console.log('days value is',this.daysVal);


    for (var i=0; i<this.daysVal.length; i+=size) {
        var smallarray = this.daysVal.slice(i,i+size);
        //console.log(smallarray);
        //var id = this.newDaysArray.length + 1;
        if (this.newDaysArray.filter(item=> item.startDate == smallarray[0]).length == 0){
          this.newDaysArray.push({startDate:smallarray[0],endDate:smallarray[smallarray.length-1]});
        }

    }

    console.log('days array is:',this.newDaysArray);
    //console.clear();
    //this.newDaysArray.map(q=> console.log(q));
  }

  evaluateIndividualUserHourRows() {
   this.entitledData.map(p=>{
    let individualuser:UserIndividualDayActivityAggregate={
      userFullName:'',
     IndividualHours:[],
     resourcesid:''
     };
    individualuser.resourcesid = p.resourcesid;
    individualuser.userFullName = p.fullname;

    p.activityMap.map(q=>{
      for(var qprops in q){
        q[qprops].map(r=>{

          for(var propt in r){
            var result = r[propt].reduce(function(accumulator, currentValue) {
              return accumulator + currentValue.individualresourcehoursforadate;
            },0);

            individualuser.IndividualHours.push({date:propt,totalhours:result})
          }
        })

      }
    });
    this.userIndividual.push(individualuser);
    ////console.clear();
    //console.log(this.userIndividual)
   });

  }
}
