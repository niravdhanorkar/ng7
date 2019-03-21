import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageFrom: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { 
    this.messageFrom = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['',Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.messageFrom.invalid){
      return;
    }
    this.success = true;

  }
  ngOnInit() {
  }

}
