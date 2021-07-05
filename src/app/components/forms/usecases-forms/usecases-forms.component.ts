import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { getDetailsUsecasesAll } from "../../../../assets/js/formsubmit";
import { Subscription } from 'rxjs';
import { Routes, RouterModule, Router } from '@angular/router';

import { contactDetails } from '../agile.model';
import { AgileService } from '../agile.service';

declare var extObj: any;

@Component({
  selector: 'usecases-forms',
  templateUrl: './usecases-forms.component.html',
  styleUrls: ['./usecases-forms.component.scss']
})
export class UsecasesFormsComponent implements OnInit {

  @Input() getTag: any;
  @Input() usecase: any;
  @ViewChild('error', { static: false }) error: ElementRef;
  @Output() isFormChange = new EventEmitter<boolean>();


  setFormChange: boolean = false;
  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  company: FormControl;
  isFormEmpty: boolean = false;
  posts: contactDetails[] = [];
  private postsSub: Subscription;

  constructor(private agileServices: AgileService, private router: Router) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }


  toggleview() {
    this.isFormChange.emit(this.setFormChange);
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
    this.company = new FormControl('');
  }

  createForm() {
    this.leadForm = new FormGroup({
      name: this.name,
      email: this.email,
      company: this.company,
    });
  }

  SendDetails() {
    let tag = this.getTag;
    if (this.name.errors == null && this.email.errors == null) {
      getDetailsUsecasesAll(tag, this.leadForm.value.name, this.leadForm.value.email, this.leadForm.value.company);
      this.agileServices.addPost(this.leadForm.value.name, this.leadForm.value.email, this.leadForm.value.companyname, tag);
      this.toggleview();
    }
    if (this.name.errors || this.email.errors) {
      this.isFormEmpty = true;
    }
  }



}
