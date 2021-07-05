import { Component, OnInit, Output, EventEmitter, NgModule, Pipe } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { createContact } from "../../../../assets/js/formsubmit";
import { Subscription } from 'rxjs';

import { contactDetails } from '../agile.model';
import { AgileService } from '../agile.service';

@Component({
  selector: 'agilecrm-input',
  templateUrl: './agilecrm-input.component.html',
  styleUrls: ['./agilecrm-input.component.scss']
})
export class AgilecrmInputComponent implements OnInit {

  @Output() isFormChange = new EventEmitter<boolean>();
  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  companyname: FormControl;
  isFormEmpty: boolean = false;
  setFormChange: boolean = false;
  posts: contactDetails[] = [];
  private postsSub: Subscription;
  mdTag:string = 'MDMainPage';
  
  
  constructor(private agileServices: AgileService ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
    this.companyname = new FormControl();
  }

  createForm() {
    this.leadForm = new FormGroup({
      name: this.name,
      email: this.email,
      companyname: this.companyname
    });
  }

  formSubmit() {

    if (this.name.errors == null && this.email.errors == null) {
      createContact(this.leadForm.value.name,this.leadForm.value.email,this.leadForm.value.companyname);
      this.agileServices.addPost(this.leadForm.value.name,this.leadForm.value.email, this.leadForm.value.companyname,this.mdTag);
      this.toggleview();

    }
    if (this.name.errors || this.email.errors) {
      this.isFormEmpty = true;
    }
  }

  toggleview() {
    this.isFormChange.emit(this.setFormChange);
  }
}
