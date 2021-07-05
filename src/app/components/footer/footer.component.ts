import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AgileService } from '../../services/agile/agile.service';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailRegularExpression = "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  companyname: FormControl;
  mdTag = 'MayaData Newsletter';
  isFormEmpty = false;

  constructor(private router: Router, private agileService: AgileService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }

  socialIcons = [
    {
      src: 'assets/images/footer/slack.svg',
      alt: 'Slack',
      url: 'https://openebs.io/community'
    },
    {
      src: 'assets/images/footer/github.svg',
      alt: 'GitHub',
      url: 'https://github.com/mayadata-io'
    },
    {
      src: 'assets/images/footer/twitter.svg',
      alt: 'Twitter',
      url: 'https://twitter.com/mayadata'
    },
    {
      src: 'assets/images/footer/youtube.svg',
      alt: 'YouTube',
      url: 'https://www.youtube.com/channel/UCm2gbdJagH7pMrlCHR8FxvA'
    },
    {
      src: 'assets/images/footer/linkedin.svg',
      alt: 'LinkedIn',
      url: 'https://www.linkedin.com/company/mayadata/'
    },
    {
      src: 'assets/images/footer/facebook.svg',
      alt: 'Facebook',
      url: 'https://www.facebook.com/MayaDataOfficial/'
    },
  ];

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
      this.agileService.subscribeNewsletter(
        this.leadForm.value.email,
        this.mdTag
      );
      this.notifySlack();
      this.leadForm.reset();
    }
    if (this.email.errors) {
      this.isFormEmpty = true;
    }
  }


}
