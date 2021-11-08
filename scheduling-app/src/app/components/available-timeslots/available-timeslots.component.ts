import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailableTimeslotService } from 'src/app/services/available-timeslot/available-timeslot.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-available-timeslots',
  templateUrl: './available-timeslots.component.html',
  styleUrls: ['./available-timeslots.component.css']
})
export class AvailableTimeslotsComponent implements OnInit {
  //while get location is broken
  private partnerID = '35e3c7cf-6cd7-4903-bef5-02afe0921d37';
  private locationID = '35e3c7cf-6cd7-4903-bef5-02afe0921d37';
  
  private accessToken!: string;
  timeSlots!:Observable<string[]>
  constructor(private timeSlotServ: AvailableTimeslotService, private request: RequestService) { }

  ngOnInit(): void {
    this.request.requestToken().subscribe(
      (data: any) => {
        console.log(JSON.stringify(JSON.stringify(data)));
        this.accessToken = data.access_token;
        this.getTimeSlot();
      }
    )
  }

  getTimeSlot() {
    console.log(this.accessToken);
    this.timeSlotServ.requestAvailableLocations(this.partnerID, this.locationID, this.accessToken).subscribe(
      (data: any)=> {
        console.log(JSON.stringify(data[0].availableAppointmentTimes));
      }
    )
  }
}
