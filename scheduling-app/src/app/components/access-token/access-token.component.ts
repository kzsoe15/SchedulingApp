import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-access-token',
  templateUrl: './access-token.component.html',
  styleUrls: ['./access-token.component.css']
})
export class AccessTokenComponent implements OnInit {
  accessToken!:string;
  constructor(private httpCli:HttpClient, private request: RequestService) { }

  ngOnInit(): void {
    this.request.requestToken().subscribe(
      (data: any) => {
        console.log(JSON.stringify(JSON.stringify(data)));
        this.accessToken = data.access_token;
        // this.getLocations()
      }
    )
  }

  //testing getLocations
  // getLocations() {
  //   console.log(this.accessToken);
  //   this.request.requestAvailableLocations(this.accessToken).subscribe(
  //     (locationData: any) => {
  //       console.log("location data: " + JSON.stringify(locationData));
  //     }
  //   )
  // }

}
