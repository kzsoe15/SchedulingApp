import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpCli: HttpClient) { }

  requestToken() {
    const body = new HttpParams()
      .set('client_id', '3qoVGlIFkA7jCz8RHKbb3mbzpbi73xzI')
      .set('client_secret', 'vzYDqL7yVwh2M2ui')
      .set('grant_type', 'client_credentials')
      .set('scope', 'https://api.equifax.com/business/eev/partner-scheduling');

    return this.httpCli.post('https://api.sandbox.equifax.com/v1/oauth/token', body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  requestAvailableLocations(accessToken: string) {
    return this.httpCli.get('https://api.sandbox.equifax.com/business/eev/partner-scheduling/partner/v1/locations?base-address=stl&radius-in-miles=50&start-date=2021-10-30&end-date=2021-11-30', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }
}
