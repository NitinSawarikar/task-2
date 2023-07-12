import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-form',
  templateUrl: './radio-form.component.html',
  styleUrls: ['./radio-form.component.css']
})
export class RadioFormComponent implements OnInit{
  formRadio : FormGroup | any;


  constructor(){ }
  ngOnInit(): void {
    this.formRadio = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      contactDetails : new FormControl('', Validators.required),
      contactInfo : new FormGroup('', Validators.required)
    })
  }
  onSubmit(){
    console.log(this.formRadio)
    this.formRadio.reset()
  }
}
