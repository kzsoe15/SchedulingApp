import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AccessTokenComponent } from './components/access-token/access-token.component';
import { RadiusComponent } from './components/radius/radius.component';
import { AddressInputComponent } from './components/address-input/address-input.component';
import { AvailableTimeslotsComponent } from './components/available-timeslots/available-timeslots.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    AccessTokenComponent,
    RadiusComponent,
    AddressInputComponent,
    AvailableTimeslotsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
