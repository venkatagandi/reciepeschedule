import { Component, OnInit } from '@angular/core';
import { ResourceActivityDaily } from './model/resourceactvitydaily';
import { EntitlementService } from './services/entitlement.service';
import { UserIndividualDayActivityAggregate } from './model/userIndividualDayActivityAggregate';
import { ResourceIndividualActivityMapping } from './model/resourceindividualactivitymapping';
import * as _ from "lodash";
import { SelectItem } from 'primeng/primeng';

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
  useractivityIndividual:any[]=[];
  isActive:boolean=false;

  //for monthlyfilter
  newmonthVal:string[]=[];

  //for yearlyfilter
  newYearVal:string[]=[];

  /* button info for forecast mode - weekly,monthly,yearly*/
  forecastmodes: SelectItem[];
  selectForecastMode: string='Weekly';

  hoursModes: SelectItem[];
  selectHourMode:string='hashHours';

  mapModes: SelectItem[];
  selectMapMode:string='Grid';


  public constructor(private entitlementservice:EntitlementService){
    /* button info for forecast mode - weekly,monthly,yearly*/
    this.forecastmodes = [];
    this.forecastmodes.push({label:'Weekly', value:'Weekly'});
    this.forecastmodes.push({label:'Monthly', value:'Monthly'});
    this.forecastmodes.push({label:'Yearly', value:'Yearly'});

    this.hoursModes = [];
    this.hoursModes.push({label:'# Hours', value:'hashHours'});
    this.hoursModes.push({label:'% Hours', value:'percentHours'});

    this.mapModes = [];
    this.mapModes.push({label:'Grid', value:'Grid'});
    this.mapModes.push({label:'Heat/Cool', value:'HeatOrCool'});
  }

  onSelectForecastModeChange($event:any){
    console.log(this.selectForecastMode);
  }

  onSelectHourModeChange($event:any){
    console.log(this.selectHourMode);
  }

  onSelectMapModeChange($event:any){
    console.log(this.selectMapMode);
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
            //console.log("==== Individual week starts ======");
            //let maps = r;
            ////console.log(maps.get("10/24/2017"));
            //this.daysVal.push(r);
            console.clear();
            console.log("==============x starts===============");
            console.log(r);
            for(var propt in r){
              //console.log("==== Individual day starts ======");
              ////console.log('prp vals');
              //console.log('new type',typeof(propt));
              //check if value exists already
              //console.log("=============If value exists already Starts=============");
              //console.log(this.daysVal);
              //console.log("=============If value exists already Ends=============");
              if (this.daysVal.filter(item=> item == propt).length == 0){
                this.daysVal.push(propt);
              }
              //console.log(propt + ': ' + r[propt]);
              r[propt].map(n=>{
                //console.log('======= Individual day values =======');
                //console.log(n);
              })
            }
            ////console.log(r);
          })

        }
      });
      ////console.clear();
      ////console.log('your day vals is:',this.daysVal);
     });
     this.evaluateDaysValForHeaders();
     this.evaluateIndividualUserHourRows();
     this.evaluateMonthlyValuesForHeaders();
     this.evaluateYearlyValuesForHeaders();
  }

  evaluateDaysValForHeaders() {
    var size = 5;
    console.log('days value is',this.daysVal);


    for (var i=0; i<this.daysVal.length; i+=size) {
        var smallarray = this.daysVal.slice(i,i+size);
        ////console.log(smallarray);
        //var id = this.newDaysArray.length + 1;
        if (this.newDaysArray.filter(item=> item.startDate == smallarray[0]).length == 0){
          this.newDaysArray.push({startDate:smallarray[0],endDate:smallarray[smallarray.length-1]});
        }

    }

    console.log('days array is:',this.newDaysArray);
    //console.clear();
    //this.newDaysArray.map(q=> console.log(q));
  }

  evaluateMonthlyValuesForHeaders() {
    let days =  this.daysVal.map(x=>{
      let date = new Date(x);
      return `${date.getMonth()}-${date.getFullYear()}`;
    });
    days = _.uniq(days);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    days = days.map(p=>{
      var arr:any = p.split('-');
      console.log('myarr',arr[0]);
      let newIndex= arr[0];
      return `${months[newIndex]}-${p.split('-')[1]}`;
    });
    this.newmonthVal=days;

  }

  evaluateYearlyValuesForHeaders() {
    let days =  this.daysVal.map(x=>{
      let date = new Date(x);
      return `${date.getFullYear()}`;
    });
    days = _.uniq(days);
    this.newYearVal=days;

  }


  evaluateIndividualUserHourRows() {
   this.entitledData.map(p=>{
    let individualuser:UserIndividualDayActivityAggregate={
      userFullName:'',
     IndividualHours:[],
     resourcesid:'',
     activitymap:undefined
     };
    individualuser.resourcesid = p.resourcesid;
    individualuser.userFullName = p.fullname;

    p.activityMap.map(q=>{
      for(var qprops in q){
        console.log("====================MyQ==============");
        console.log(qprops);
        q[qprops].map(r=>{
          console.log("===========1===========");
          console.log(r);
          for(var propt in r){
            console.log("================2=========");
            console.log(r[propt]);
            var result = r[propt].reduce(function(accumulator, currentValue) {
              return accumulator + currentValue.individualresourcehoursforadate;
            },0);

            individualuser.IndividualHours.push({date:propt,totalhours:result})
          }
        })
      }
    });
    individualuser.activitymap=p.activityMap;
    this.userIndividual.push(individualuser);
    ////console.clear();
    //console.log(this.userIndividual)
   });

  }

  userActivityInfo(user:UserIndividualDayActivityAggregate) {
    this.isActive= true;
    let resourceindividualactivity:ResourceIndividualActivityMapping[]=[];

     console.log('clicked me');
     console.log(user);
     user.activitymap.map(q=>{
      for(var qprops in q){
        console.log("====================MyQ==============");
        console.log(qprops);
        q[qprops].map(r=>{
          console.log("===========1===========");
          console.log(r);
          for(var propt in r){
            console.log("================2=========");
            console.log(r[propt]);
            r[propt].map(t=> {
              resourceindividualactivity.push({
                activityid:<number>t.activityid,
                activityname:<string>t.activityname,
                resourcesid:user.resourcesid,
                IndividualHours:{date:propt,totalhours:t.individualresourcehoursforadate}
              });
            });
          }
        })
      }
    });
    let uniqueActivityVal = resourceindividualactivity.map(item => item.activityname).filter((value, index, self) => self.indexOf(value) === index);
    console.clear();
    console.log("==========unique activity details====================");
    console.log(uniqueActivityVal)
    console.log("================activity info details================");
    console.log(resourceindividualactivity);

    this.useractivityIndividual = _.chain(resourceindividualactivity)
    .groupBy('activityname')
    .map(function(val, key) {
        return {
          activityname: key,
            users: val
        };
    })
    .value();
    console.log('useractivityIndividual',this.useractivityIndividual);
  }

  ValChanged($event,activityInfo) {
    console.clear();
    console.log('iam clear');
    console.log($event);
    console.log('activity Info');
    console.log(activityInfo);
  }
}
