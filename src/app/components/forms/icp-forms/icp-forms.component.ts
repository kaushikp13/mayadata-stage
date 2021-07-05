import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { getDetailsUsecasesAll } from "../../../../assets/js/formsubmit";
import { Subscription } from 'rxjs';

import { contactDetails } from '../agile.model';
import { AgileService } from '../agile.service';

declare var extObj: any;

@Component({
  selector: 'icp-forms',
  templateUrl: './icp-forms.component.html',
  styleUrls: ['./icp-forms.component.scss']
})
export class IcpFormsComponent implements OnInit {
  @Input() getTag: any;
  @ViewChild('error', { static: false }) error: ElementRef;
  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  isFormEmpty: boolean = false;
  posts: contactDetails[] = [];
  private postsSub: Subscription;

  constructor(private agileServices: AgileService) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
  }

  createForm() {
    this.leadForm = new FormGroup({
      name: this.name,
      email: this.email
    });
  }

  SendDetails() {
    let tag = this.getTag;
    if (this.name.errors == null && this.email.errors == null) {
      getDetailsUsecasesAll(tag, this.leadForm.value.name, this.leadForm.value.email, "Not Applicable");
      this.agileServices.addPost(this.leadForm.value.name, this.leadForm.value.email, "Not Applicable", tag);

    }
    if (this.name.errors || this.email.errors) {
      this.isFormEmpty = true;
    }
    this.leadForm.reset();
  }

}
