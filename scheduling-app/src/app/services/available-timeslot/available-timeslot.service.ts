import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableTimeslotService {

  constructor(private httpCli: HttpClient) { }

  requestAvailableLocations(partnerID: string, locationID: string, accessToken: string): Observable<string[]> {
    return this.httpCli.get<string[]>(`https://api.sandbox.equifax.com/business/eev/partner-scheduling/partner/v1/partners/${partnerID}/locations/${locationID}/time-slots?chosen-date=2020-01-28`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }
}
