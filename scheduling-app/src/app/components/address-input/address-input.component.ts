/// <reference types="@types/googlemaps" />
import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})

export class AddressInputComponent implements OnInit, AfterViewInit {

  @ViewChild('addressInput') 
  addressInput: any;

  autocompleteInput!: string;

  address: string | undefined;
  latitude: number | undefined;
  longitude: number | undefined;

  constructor(public zone: NgZone) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addressInput.nativeElement,
    {
        componentRestrictions: { country: 'US' },
        types: ['geocode']
    });
    
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.setLocation(place);
    });
  }

  setLocation(place: any){
    this.zone.run(() => {
      this.address = place.formatted_address;

      if(place.geometry){
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
      }
    });
  }
}
