import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { contactDetails } from '../../components/forms/agile.model';
import { AgileService } from '../../components/forms/agile.service';

declare var extObj: any;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  setFormChange_leads = true;
  @Input() mdTag: any;
  @Output() isFormChange = new EventEmitter<boolean>();
  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  contact_number: FormControl;
  company: FormControl;
  isFormEmpty = false;
  posts: contactDetails[] = [];

  constructor(private agileServices: AgileService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.company = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.contact_number = new FormControl('');
  }

  createForm() {
    this.leadForm = new FormGroup({
      name: this.name,
      email: this.email,
      contact_number: this.contact_number,
      company: this.company,
    });
  }

  formSubmit() {
    if ((this.name.errors == null) && (this.email.errors == null) &&
      (this.contact_number.errors == null) && (this.company.errors == null)) {
      this.agileServices.formDetailsToMayaDataBackend(this.leadForm.value.name,
        this.leadForm.value.email, this.leadForm.value.contact_number, this.leadForm.value.company, this.mdTag);
      this.router.navigateByUrl('/thankyou');
    }
    if (this.name.errors || this.email.errors || this.contact_number.errors || this.company.errors) {
      this.isFormEmpty = true;
    }
  }

}
