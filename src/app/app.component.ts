import { Component, OnInit } from '@angular/core';
import { ResourceActivityDaily } from './model/resourceactvitydaily';
import { EntitlementService } from './services/entitlement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  entitledData:ResourceActivityDaily[];
  daysVal:string[]=[];
  newDaysArray:Object[]=[];
  public constructor(private entitlementservice:EntitlementService){

  }

  ngOnInit() {
     let entitledreceiveddata:ResourceActivityDaily[]= this.entitlementservice.getEntitlementsData();
     this.entitledData=entitledreceiveddata;
     console.log('entitled data',this.entitledData);
     entitledreceiveddata.map(p=>{
      console.log(p.resourcesid);
      console.log(p.fullname);
      //console.log(p.activityMap);
      console.log("===============================================");
      p.activityMap.map(q=>{
        console.log("========= Activity Info ===========");
        for(var qprops in q){
          console.log("==== week starts ======");
          console.log(q[qprops]);
          q[qprops].map(r=>{
            console.log("==== Individual week starts ======");
            //let maps = r;
            //console.log(maps.get("10/24/2017"));
            //this.daysVal.push(r);
            for(var propt in r){
              console.log("==== Individual day starts ======");
              //console.log('prp vals');
              console.log('new type',typeof(propt));
              this.daysVal.push(propt);
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
  }

  evaluateDaysValForHeaders() {
    var newarray=[]
    var size = 5;
    for (var i=0; i<this.daysVal.length; i+=size) {
        var smallarray = this.daysVal.slice(i,i+size);
        //console.log(smallarray);
        this.newDaysArray.push({startDate:smallarray[0],endDate:smallarray[smallarray.length-1]});
    }
    //console.clear();
    //this.newDaysArray.map(q=> console.log(q));
  }

  evaluateIndividualUserHourRows() {
    
  }
}
