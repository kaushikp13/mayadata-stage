import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HubspotService } from '../../services/hubspot/hubspot.service';
import { AgileService } from '../../services/agile/agile.service';
declare var $: any;



declare var extObj: any;

@Component({
  selector: 'app-contactus-form',
  templateUrl: './contactus-form.component.html',
  styleUrls: ['./contactus-form.component.scss']
})
export class ContactusFormComponent implements OnInit {


  setFormChange_leads = true;
  @Output() isFormChange = new EventEmitter<boolean>();
  contactForm: FormGroup;
  firstname: FormControl;
  email: FormControl;
  lastname: FormControl;
  company: FormControl;
  message: FormControl;
  isFormEmpty = false;

  constructor(private agileService: AgileService, private router: Router, private hubspotService: HubspotService, private cookieService: CookieService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.company = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.message = new FormControl('');
  }

  createForm() {
    this.contactForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      company: this.company,
      message: this.message
    });
  }

  formSubmit() {
    if ((this.firstname.errors == null) && (this.email.errors == null) &&
      (this.lastname.errors == null) && (this.company.errors == null)) {
      const data = {
        fields: [
          {
            name: "firstname",
            value: this.contactForm.value.firstname
          },
          {
            name: "lastname",
            value: this.contactForm.value.lastname
          },
          {
            name: "email",
            value: this.contactForm.value.email,
          },
          {
            name: "company",
            value: this.contactForm.value.company
          },
          {
            name: `comments`,
            value: this.contactForm.value.message || ""
          },

        ],
        context: {
          pageUri: window.location.href,
        },
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text:
              "I agree to allow MayaData to store and process my personal data.",
            communications: [
              {
                value: true,
                subscriptionTypeId: 999,
                text:
                  "I agree to receive marketing communications from MayaData."
              }
            ]
          }
        }
      }

      const dataContactUs = this.hubspotService.mayadataHubspotAPI(data, 'json', 'mayadata-contactus');
      dataContactUs.subscribe(res => {
        $('#contactModal').modal('show');
      }, err => {
        console.log(err);
        $('#contactModalFailure').modal('show');
      })
      this.contactForm.reset();
    }
    if (this.firstname.errors || this.email.errors || this.lastname.errors || this.company.errors) {
      this.isFormEmpty = true;
    }
  }

  close() {
    document.location.reload();
  }

}
