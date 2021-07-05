import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HubspotService } from '../../services/hubspot/hubspot.service';
declare var $: any;


@Component({
  selector: 'app-pricing-form',
  templateUrl: './pricing-form.component.html',
  styleUrls: ['./pricing-form.component.scss']
})
export class PricingFormComponent implements OnInit {

  setFormChange_leads = true;
  @Output() isFormChange = new EventEmitter<boolean>();
  pricingForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  help: FormControl;
  isFormEmpty = false;

  constructor(private hubspotService: HubspotService, private cookieService: CookieService) { }


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.help = new FormControl('');
  }

  createForm() {
    this.pricingForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      help: this.help,
    });
  }

  formSubmit() {
    if ((this.firstname.errors == null) && (this.lastname.errors == null) &&
      (this.email.errors == null)) {
      const data = {
        fields: [
          {
            name: "firstname",
            value: this.pricingForm.value.firstname
          },
          {
            name: "lastname",
            value: this.pricingForm.value.lastname
          },
          {
            name: "email",
            value: this.pricingForm.value.email,
          },
          {
            name: `comments`,
            value: this.pricingForm.value.help || ""
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


      const dataPricing = this.hubspotService.mayadataHubspotAPI(data, 'json', 'mayadata-pricing');
      dataPricing.subscribe(res => {
        $('#pricingModal').modal('show');
      }, err => {
        console.log(err);
        $('#pricingModalFailure').modal('show');
      })
      this.pricingForm.reset();
    }
    if (this.firstname.errors || this.lastname.errors || this.email.errors) {
      this.isFormEmpty = true;
    }
  }

  close() {
    document.location.reload();
  }


}
