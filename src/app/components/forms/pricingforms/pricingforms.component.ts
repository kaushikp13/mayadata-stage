import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { getDetailsUsecasesAll, sentToSlackForPricing, sentToSlackForDemo } from "../../../../assets/js/formsubmit";
import { Subscription } from 'rxjs';
import { Routes, RouterModule, Router } from '@angular/router';

import { contactDetails } from '../agile.model';
import { AgileService } from '../agile.service';
@Component({
  selector: 'app-pricingforms',
  templateUrl: './pricingforms.component.html',
  styleUrls: ['./pricingforms.component.scss']
})
export class PricingformsComponent implements OnInit {


  @Input() getTag: any;
  @Input() usecase: any;
  @ViewChild('error', { static: false }) error: ElementRef;
  @Output() isFormChange = new EventEmitter<boolean>();


  setFormChange: boolean = false;
  leadForm: FormGroup;
  first_name: FormControl;
  last_name: FormControl;
  company: FormControl;
  job_title: FormControl;
  email: FormControl;
  contact_number: FormControl;
  message: FormControl;
  isFormEmpty: boolean = false;
  posts: contactDetails[] = [];
  private postsSub: Subscription;
  // mdTag: string = 'MDContactUs';
  constructor(private agileServices: AgileService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }



  toggleview() {
    this.isFormChange.emit(this.setFormChange);
  }

  createFormControls() {
    this.first_name = new FormControl('', Validators.required);
    this.last_name = new FormControl('', Validators.required);
    this.company = new FormControl('', Validators.required);
    this.job_title = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
    this.contact_number = new FormControl('', Validators.required);
    this.message = new FormControl('');
  }

  createForm() {
    this.leadForm = new FormGroup({
      first_name: this.first_name,
      last_name: this.last_name,
      company: this.company,
      job_title: this.job_title,
      email: this.email,
      contact_number: this.contact_number,
      message: this.message
    });
  }

  SendDetails() {
    let tag = this.getTag;
    if ((this.first_name.errors == null) && (this.last_name.errors == null) && (this.company.errors == null) && (this.job_title.errors == null) && (this.email.errors == null) && (this.contact_number.errors == null) && (this.message.errors == null)) {
      this.agileServices.sendToAgileForDemo(this.leadForm.value.first_name, this.leadForm.value.last_name, this.leadForm.value.company, this.leadForm.value.job_title, this.leadForm.value.email, this.leadForm.value.contact_number, this.leadForm.value.message, tag);
      // sentToSlackForDemo(this.leadForm.value.first_name, this.leadForm.value.last_name, this.leadForm.value.company, this.leadForm.value.job_title, this.leadForm.value.email, this.leadForm.value.contact_number, this.leadForm.value.message, tag);
      this.router.navigate(['/thankyou']);
    }
    if (this.first_name.errors || this.last_name.errors || this.company.errors || this.job_title.errors || this.email.errors || this.contact_number.errors || this.message.errors) {
      this.isFormEmpty = true;
    }
  }
}
