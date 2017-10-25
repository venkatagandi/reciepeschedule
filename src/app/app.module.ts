import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { EntitlementService } from './services/entitlement.service';
import { RowComponent } from './row/row.component';
import {SelectButtonModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectButtonModule
  ],
  providers: [EntitlementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
