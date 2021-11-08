import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radius',
  templateUrl: './radius.component.html',
  styleUrls: ['./radius.component.css']
})
export class RadiusComponent implements OnInit {

  contactForm!: FormGroup;

  radii = [
    { id: 1, name: "10 Miles" },
    { id: 2, name: "20 Miles" },
    { id: 3, name: "30 Miles" },
    { id: 4, name: "40 Miles" },
    { id: 5, name: "50 Miles" },
    { id: 6, name: "60 Miles" }
  ];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      radius: [null]
    });
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
  }
}
