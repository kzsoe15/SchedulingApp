import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private postHttpCli: HttpClient) { }
}
