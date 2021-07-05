import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AgileService } from '../../services/agile/agile.service';
import { GTM } from "../../constants/constants"
declare var $: any;
@Component({
  selector: 'app-footer-old',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponentOLD implements OnInit {

  copyright_text = `Copyright &copy; ${new Date().getFullYear()} MayaData Inc.`;

  emailRegularExpression = "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
  constructor(private router: Router, private agileService: AgileService) { }

  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  companyname: FormControl;
  mdTag = 'MayaData Newsletter';
  isFormEmpty = false;
  social_icons = [
    {
      src: 'assets/images/footer/fb.svg',
      alt: 'facebook',
      url: 'https://www.facebook.com/MayaDataOfficial/'
    },
    {
      src: 'assets/images/footer/tw.svg',
      alt: 'twitter',
      url: 'https://twitter.com/mayadata'
    },
    {
      src: 'assets/images/footer/ln.svg',
      alt: 'linkedin',
      url: 'https://www.linkedin.com/company/mayadata/'
    },
    {
      src: 'assets/images/footer/gh.svg',
      alt: 'github',
      url: 'https://github.com/openebs'
    },
    {
      src: 'assets/images/footer/yt.svg',
      alt: 'youtube',
      url: 'https://www.youtube.com/channel/UCm2gbdJagH7pMrlCHR8FxvA'
    }
  ];

  // GTM Triggers Object
  GTM: any;

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // ASSIGN VALUE TO GTM TRIGGERS OBJECT
    this.GTM = GTM
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
