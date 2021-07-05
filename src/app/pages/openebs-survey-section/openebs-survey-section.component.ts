import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HubspotService } from '../../services/hubspot/hubspot.service';
declare var $: any;


@Component({
  selector: 'app-openebs-survey-section',
  templateUrl: './openebs-survey-section.component.html',
  styleUrls: ['./openebs-survey-section.component.scss']
})
export class OpenebsSurveySectionComponent implements OnInit {

  setFormChange_leads = true;
  @Output() isFormChange = new EventEmitter<boolean>();
  openEBSsupportForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  help: FormControl;
  isFormEmpty = false;
  @Input() title = "OpenEBS Support";

  constructor(private hubspotService: HubspotService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.help = new FormControl('', Validators.required);
  }

  createForm() {
    this.openEBSsupportForm = new FormGroup({
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
            value: this.openEBSsupportForm.value.firstname
          },
          {
            name: "lastname",
            value: this.openEBSsupportForm.value.lastname
          },
          {
            name: "email",
            value: this.openEBSsupportForm.value.email,
          },
          {
            name: `message`,
            value: this.openEBSsupportForm.value.help || ""
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


      const dataPricing = this.hubspotService.mayadataHubspotAPI(data, 'json', 'mayadata-openebsupport');
      dataPricing.subscribe(res => {
        $('#openEBS-supportModal').modal('show');
      }, err => {
        console.log(err);
        $('#openEBS-supportModalFailure').modal('show');
      })
      this.openEBSsupportForm.reset();
    }
    if (this.firstname.errors || this.lastname.errors || this.email.errors) {
      this.isFormEmpty = true;
    }
  }

  close() {
    document.location.reload();
  }

}
