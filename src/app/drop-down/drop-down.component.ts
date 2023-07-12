import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit{
  formDropDown : FormGroup | any ;

  constructor(){}
  ngOnInit(): void {
    this.formDropDown = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      contactMethod : new FormControl('',Validators.required),
      contactInfo : new FormControl('',Validators.required),
    })
  }
  onSubmit(){
    console.log(this.formDropDown)
    this.formDropDown.reset()
  }
}

