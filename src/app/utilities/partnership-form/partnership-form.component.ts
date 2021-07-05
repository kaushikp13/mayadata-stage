import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AgileService } from '../../services/agile/agile.service';
import { HubspotService } from "../../services/hubspot/hubspot.service";
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-partnership-form',
  templateUrl: './partnership-form.component.html',
  styleUrls: ['./partnership-form.component.scss']
})
export class PartnershipFormComponent implements OnInit {

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.Canada, CountryISO.India];

  partnersForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  company: FormControl;
  jobtitle: FormControl;
  contact_number: FormControl;
  comments: FormControl;
  technologypartner: FormControl;
  platformpartner: FormControl;
  workloadpartner: FormControl;
  consultingpartner: FormControl;
  reseller: FormControl;
  serviceprovider: FormControl;
  isFormEmpty = false;

  // This property is of Hubspot form - mayadata partnership form's partnership types
  hsPartnershipTypes = {
    technologypartner: "Technology Partner",
    platformpartner: 'Platform Partner',
    workloadpartner: 'Workload Partner',
    consultingpartner: 'Consulting Partner'
  }
  constructor(private agileService: AgileService, private hubspotService: HubspotService, private cookieService: CookieService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
    this.company = new FormControl('', Validators.required);
    this.jobtitle = new FormControl('');
    this.contact_number = new FormControl(null);
    this.comments = new FormControl('');
    this.technologypartner = new FormControl(false);
    this.platformpartner = new FormControl(false);
    this.workloadpartner = new FormControl(false);
    this.consultingpartner = new FormControl(false);
  }

  createForm() {
    this.partnersForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      company: this.company,
      jobtitle: this.jobtitle,
      contact_number: this.contact_number,
      comments: this.comments,
      partnerGroup: new FormGroup({
        technologypartner: this.technologypartner,
        platformpartner: this.platformpartner,
        workloadpartner: this.workloadpartner,
        consultingpartner: this.consultingpartner
      })
    });
  }

  applyForPartnership() {
    if (this.partnersForm.valid) {
      if (
        (this.partnersForm.value.partnerGroup.platformpartner === false) &&
        (this.partnersForm.value.partnerGroup.workloadpartner === false) &&
        (this.partnersForm.value.partnerGroup.technologypartner === false) &&
        (this.partnersForm.value.partnerGroup.consultingpartner === false)
      ) {
        alert('Please select at least one partners program');
      } else {
        const data = {
          fields: [
            {
              name: "firstname",
              value: this.partnersForm.value.firstname
            },
            {
              name: "lastname",
              value: this.partnersForm.value.lastname,
            },
            {
              name: "email",
              value: this.partnersForm.value.email,
            },
            {
              name: "mobilephone",
              value: this.partnersForm.value.contact_number.internationalNumber
            },
            {
              name: "company",
              value: this.partnersForm.value.company
            },
            {
              name: "jobtitle",
              value: this.partnersForm.value.jobtitle
            },
            {
              name: `comments`,
              value: this.partnersForm.value.comments || ""
            },
            {
              name: 'partnership_types',
              value: `${this.partnersForm.value.partnerGroup.technologypartner ? this.hsPartnershipTypes.technologypartner : ''};${this.partnersForm.value.partnerGroup.platformpartner ? this.hsPartnershipTypes.platformpartner : ''};${this.partnersForm.value.partnerGroup.workloadpartner ? this.hsPartnershipTypes.workloadpartner : ''};${this.partnersForm.value.partnerGroup.consultingpartner ? this.hsPartnershipTypes.consultingpartner : ''}`
            }
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

        const dataPartnership = this.hubspotService.mayadataHubspotAPI(data, 'json', 'mayadata-partnership');
        dataPartnership.subscribe(res => {
          $('#partnerModal').modal('show');
          this.partnersForm.reset();
        }, err => {
          console.log(err);
          $('#partnerModalFailure').modal('show');
        })
      }
    }
    if (this.firstname.errors || this.lastname.errors || this.email.errors || this.company.errors) {
      this.isFormEmpty = true;
    }
    if (this.partnersForm.invalid) {
    }
  }

  close() {
    document.location.reload();
  }



}
