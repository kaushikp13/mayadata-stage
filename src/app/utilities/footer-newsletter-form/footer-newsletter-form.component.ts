import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AgileService } from '../../services/agile/agile.service';
declare var $: any;
import { GTM } from "../../constants/constants"
import { HubspotService } from '../../services/hubspot/hubspot.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-footer-newsletter-form',
  templateUrl: './footer-newsletter-form.component.html',
  styleUrls: ['./footer-newsletter-form.component.scss']
})
export class FooterNewsletterFormComponent implements OnInit {

  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  companyname: FormControl;
  mdTag = 'MayaData Newsletter';
  emailRegularExpression = "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
  isFormEmpty = false;
  // hutk: string;
  // cookiePrompt = `In order to submit this form, you need to accept cookies. Please click "OK" to reload page, and then accept cookies when prompted.`

  // GTM Triggers Object
  GTM: any;
  constructor(private agileService: AgileService, private hubspotService: HubspotService, private cookieService: CookieService) {
    // ASSIGN VALUE TO GTM TRIGGERS OBJECT
    this.GTM = GTM
  }

  ngOnInit() {
    // this.hutk = this.cookieService.get('hubspotutk');
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(this.emailRegularExpression),
    ]));
  }

  createForm() {
    this.leadForm = new FormGroup({
      email: this.email
    });
  }

  notifySlack() {
    const fields = [
      {
        title: 'Email',
        value: $('#email').val(),
        short: false
      },
      {
        title: 'Tag',
        value: this.mdTag,
        short: false
      }
    ];
    const payload = {
      text: 'New Subscriber for MayaData Newsletter',
      attachments: [
        {
          text: '',
          fields: fields
        }
      ]
    };
    const payloadToSend = JSON.stringify(payload);
    const host = window.location.host;
    let webhookURL;
    if (host === 'mayadata.io' || host === 'www.mayadata.io') {
      webhookURL = 'https://hooks.slack.com/services/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'; // main
    } else if (host === 'staging.mayadata.io') {
      webhookURL = 'https://hooks.slack.com/services/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'; // staging
    } else {
      webhookURL = 'https://hooks.slack.com/services/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'; // testing
    }
    $.ajax({
      url: webhookURL,
      type: 'POST',
      processData: true,
      data: payloadToSend,
      dataType: 'JSON',
      success: function (data) { },
      error: function (data) { }
    });
  }

  formSubmit() {
    if (this.email.errors == null) {
      // this.agileService.subscribeNewsletter(
      //   this.leadForm.value.email,
      //   this.mdTag
      // );
      const data = {
        // submittedAt: new Date().getTime(),
        fields: [
          {
            name: "email",
            value: this.leadForm.value.email,
          },
        ],
        context: {
          pageUri: window.location.href,
          // hutk: this.hutk || this.cookieService.get('hubspotutk') || ''
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
      // if ((!this.cookieService.check('hubspotutk')) || (this.cookieService.check('__hs_opt_out') && (this.cookieService.get('__hs_opt_out') === 'yes'))) {
      //   alert(this.cookiePrompt);
      //   window["_hsq"].push(['revokeCookieConsent']);
      //   location.reload();
      // }

      const dataPricing = this.hubspotService.mayadataHubspotAPI(data, 'json', 'mayadata-newsletter');
      dataPricing.subscribe(res => {
        $('#openebsnewsletterthanks').modal('show');
        this.notifySlack();
        this.leadForm.reset();
      }, err => {
        console.log(err);
      })

    }
    if (this.email.errors) {
      this.isFormEmpty = true;
    }
  }

}
