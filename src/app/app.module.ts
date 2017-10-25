import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { EntitlementService } from './services/entitlement.service';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EntitlementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
