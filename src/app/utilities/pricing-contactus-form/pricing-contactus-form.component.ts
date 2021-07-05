import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CountryISO, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { HubspotService } from '../../services/hubspot/hubspot.service';

@Component({
  selector: 'app-pricing-contactus-form',
  templateUrl: './pricing-contactus-form.component.html',
  styleUrls: ['./pricing-contactus-form.component.scss']
})
export class PricingContactusFormComponent implements OnInit {
  @Output() successResponse = new EventEmitter();

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.Canada, CountryISO.India];

  pricingContactForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  company: FormControl;
  company_email: FormControl;
  contact_number: FormControl;
  comments: FormControl;
  isFormEmpty: boolean = false;

  constructor(private hubspotService: HubspotService, private cookieService: CookieService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.company = new FormControl('', Validators.required);
    this.company_email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
    this.contact_number = new FormControl(null);
    this.comments = new FormControl('');
  }

  createForm() {
    this.pricingContactForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      company: this.company,
      company_email: this.company_email,
      contact_number: this.contact_number,
      comments: this.comments,
    });
  }

  applyForPriceInquiry() {
    if (this.pricingContactForm.valid) {
      console.log(this.pricingContactForm.value);
      const data = {
        fields: [
          {
            name: "firstname",
            value: this.pricingContactForm.value.firstname
          },
          {
            name: "lastname",
            value: this.pricingContactForm.value.lastname,
          },
          {
            name: "email",
            value: this.pricingContactForm.value.company_email,
          },
          {
            name: "company",
            value: this.pricingContactForm.value.company
          },
          {
            name: "mobilephone",
            value: this.pricingContactForm.value.contact_number.internationalNumber
          },
          {
            name: `comments`,
            value: this.pricingContactForm.value.comments || ""
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

      const dataPartnership = this.hubspotService.mayadataHubspotAPI(data, 'json', 'mayadata-pricing/business');
      dataPartnership.subscribe(res => {
        this.successResponse.emit("show");
        this.pricingContactForm.reset();
      }, err => {
        console.log(err);
        this.successResponse.emit("error");
        this.pricingContactForm.reset();
      })
    }

    if (this.firstname.errors || this.lastname.errors || this.company_email.errors || this.company.errors) {
      this.isFormEmpty = true;
    }
    if (this.pricingContactForm.invalid) {
    }
  }
}
