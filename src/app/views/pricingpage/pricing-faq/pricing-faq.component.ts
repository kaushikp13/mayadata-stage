import { Component, OnInit, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import { GTM } from "../../../constants/constants"

export enum Tags {
  All,
  Billing,
  OpenSource,
  UsageAndSupport
}

@Component({
  selector: 'app-pricing-faq',
  templateUrl: './pricing-faq.component.html',
  styleUrls: ['./pricing-faq.component.scss']
})
export class PricingFaqComponent implements OnInit, AfterViewInit {

  GTM: any;
  @ViewChild("faqOptions", { static: true }) faqOptions;
  workloadFaqs: any;

  TAGS = {
    all: 'all',
    billing: 'billing',
    opensource: 'opensource',
    usageandsupport: 'usageandsupport'
  };

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.GTM = GTM;
    this.workloadFaqs = this.allFAQs.faqs;
  }



  allFAQs = {
    title: `FAQ`,
    faqs: [
      {
        head: `What is MayaData's commitment to Open Source?`,
        body: [`MayaData is one of the top contributors to CNCF projects overall and this reflects a recognition that Open Source has changed the world and delivers real benefits that older proprietary models do not. Many projects started by MayaData are open source and are now or soon will be parts of Open Source foundations, such as OpenEBS and LitmusChaos.`],
        tag: this.TAGS.opensource
      },
      {
        head: `Who actually owns and controls OpenEBS upstream?`,
        body: [`OpenEBS is a CNCF project. While MayaData is a primary contributor to OpenEBS, engineers and others that seek to contribute to OpenEBS do not have to be MayaData contributors.  DevStats from the CNCF - which lists contributions to CNCF projects and itself is a user of OpenEBS - lists over twenty organizations other than MayaData that have contributed more than just a few times to OpenEBS other than MayaData as of June 2020.`],
        tag: this.TAGS.opensource
      },
      {
        head: `Why should I pay for Kubera?`,
        body: [`Many tiers of Kubera are offered. If you are an individual user just trying out Kubernetes as your data layer you may not find the need to get access to the other features such as additional logging, advanced access controls and role based access controls and so on.  As you succeed in your use of Kubernetes as your data layer, we hope you will find these additional tiers to be useful.`],
        tag: this.TAGS.billing
      },
      {
        head: `How should I choose between Free, Teams, and Business?`,
        body: [`The free plan is free forever and may be enough for home use and for simple proof of concept testing. The free plan includes in-Kubera chat and access to the Knowledge Base however support is best efforts only. As the Standard plan is only $49 per user per month, many users start with the Standard plan.`],
        tag: this.TAGS.billing
      },
      {
        head: `Can I continue to use my commercial license after it has expired?`,
        body: [
          `OpenEBS itself will never turn off access to your data.  The very notion of having a time or license based controls on your data is abhorrent in our opinion.  While this has been a common practice amongst lock-in based business models from the cloud and legacy storage vendors, this is not our approach.`,
          `The management capabilities of Kubera will not be accessible after your license expires.  `
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `Is support included with the subscription?`,
        body: [
          `Yes, the fundamental reason Kubera is used is to simplify the operations of Kubernetes as your data layer, by improving the deployment and operations of OpenEBS and other important components. Kubera includes a direct chat connection to our team of engineers, 24/7, 365.`
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `How does billing work?`,
        body: [
          `The free plan is free forever. Once you move to production, based on your requirements and support needs, you can upgrade to Standard plan and start testing Kubera Standard functionality immediately without providing a credit card. After your trial ends you will be required to provide payment information starting at $49/month/user to continue your use of Kubera Standard plan.`
        ],
        tag: this.TAGS.billing
      },
      {
        head: `What happens if I change my plan from annual to monthly? And vice versa?`,
        body: [
          `Plan changes will be applied to your billing plan after the next billing cycle.`
        ],
        tag: this.TAGS.billing
      },
      {
        head: `What forms of payment do you accept?`,
        body: [
          `Users can pay using Visa, Mastercard, American Express, Discover, JCB, Diners Club, China UnionPay credit and debit cards.`,
          `The stripe service is used to accept payments. Stripe supports a range of additional payment methods, depending on the country of your Stripe account.`,
          `Stripe services are used for payment to ensure that no sensitive card data passes through or stored on our servers so we can operate in a <a class="faq-body-link" href="https://stripe.com/docs/security#pci-dss-guidelines" target="_blank" rel="noopener noreferrer">PCI compliant way</a>.`
        ],
        tag: this.TAGS.billing
      },
      {
        head: `How do I cancel services? And what happens after I cancel my services?`,
        body: [
          `You can cancel your services at any time. If you are a part of a plan, once you cancel your Kubera subscription recurring payments will stop and services will be downgraded to Kubera Basic.`
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `What happens when I hit my usage limits?`,
        body: [
          `That’s a great sign your environment is growing healthy and successfully. To be clear, the OpenEBS Enterprise Edition can always be scaled massively by Kubernetes in an automated way. Your users will never face impact due to your Kubera license hitting a subscription limit.  Rather when you hit a limit on a particular plan you’ll be alerted within the product and some of the management features may not be fully functional.  If you are concerned that you may reach a new billing tier and you want to make sure that Kubera remains fully functional, please contact us via the in application chat or via <a class="faq-body-link" href="mailto:sales@mayadata.io">sales@mayadata.io</a> and we will work with you to make sure that Kubera license limits do not impact your operations.`
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `What other limits do I need to be aware of?`,
        body: [
          `The Standard plan is optimized for small teams and has cluster and team size limitations. The Enterprise plan includes unlimited use of all current and future functionality on our roadmap.`
        ],
        tag: this.TAGS.billing
      },
      {
        head: `What if I want to select the Enterprise plan?`,
        body: [
          `The Enterprise plan comes with many additional benefits and also may be tailored to your specific infrastructure and platform needs. You can contact us through in-product chat or via <a class="faq-body-link" href="mailto:sales@mayadata.io">sales@mayadata.io</a> to select the Enterprise tier at any time. We will be happy to help you. `
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `Is every feature automatically included in the enterprise plan?`,
        body: [
          `Yes.`
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `Does this work for big teams?`,
        body: [
          `Kubera is designed to help you start at any size and help you grow. Standard plan supports up to 15 users and the Enterprise plan supports unlimited users with enterprise authentication options and onprem deployment options as well.`
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `What if we don’t use Slack?`,
        body: [
          `Kubera does not require Slack for customer support. This is an optional component. You can use in-product chat, emails, GitHub issues and other methods accepted by your organization policies to communicate with us.`
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `How is the payment being processed?`,
        body: [
          `Kubera subscription starts at $49/user/month. You will see the amount on your Credit Card statement as MayaData.`
        ],
        tag: this.TAGS.usageandsupport
      },
      {
        head: `Does Kubera provides site license?`,
        body: [
          `Yes, site license is available for $105K / month which includes unlimited usage and all Enterprise features.`
        ],
        tag: this.TAGS.usageandsupport
      }
    ]
  };

  ngAfterViewInit() {

    // const faqOptionsContainer = document.getElementById('faqOptions');
    // const faqOptionsList = faqOptionsContainer.getElementsByClassName("faq-option");
    // console.log(faqOptionsList)
    // this.renderer.addClass(document.getElementById('faqOptions'), "active");
    // this.workloadFaqs.push(...this.allFAQs.faqs);
    // const childItems = this.faqOptions.nativeElement.children;
    // Array.from(faqOptionsList).forEach((item: HTMLElement) => {
    //   item.addEventListener("click", (e: any) => {
    //     console.log("Clcikedd");
    //     Array.from(faqOptionsList).map((res: HTMLElement) => {
    //       console.log(res, e, " e - e - e");
    //       if (res.classList.contains("active")) {
    //         res.classList.remove("active");
    //       }
    //       if (e.target === res) {
    //         res.classList.add("active");
    //         this.workloadFaqs = this.selectFAQs(this.allFAQs.faqs, e.target.dataset.tag);
    //       }
    //     });
    //   });
    // });

    // for (let i = 0; i < faqOptionsList.length; i++) {
    //   faqOptionsList[i].addEventListener('click', function () {

    //   })
    // }


    const listAccordionContainer = document.getElementById("listOfAccordion");
    const lists = listAccordionContainer.getElementsByClassName("accordion-item");
    const listsOfHeads = listAccordionContainer.getElementsByClassName("accordion-item-head");
    const listsOfIcons = listAccordionContainer.getElementsByClassName("mi");
    const listOfBody = listAccordionContainer.getElementsByClassName("accordion-item-body");

    for (let i = 0; i < lists.length; i++) {
      let isShowing = false;
      listsOfHeads[i].addEventListener("click", function () {
        isShowing = !isShowing;
        listOfBody[i].classList.toggle("show", isShowing);
        listsOfIcons[i].classList.toggle("rotate-icon", isShowing);
        lists[i].classList.toggle("accordion-item-body-active", isShowing);
      });
    }


  }


  modifyTitle(title) {
    return title.split(" ").join("_");
  }

  selectFAQs(allFAQs, tag) {
    if (tag === this.TAGS.all) {
      return allFAQs;
    } else if (tag === this.TAGS.billing) {
      return allFAQs.filter(res => res.tag === this.TAGS.billing);
    } else if (tag === this.TAGS.opensource) {
      return allFAQs.filter(res => res.tag === this.TAGS.opensource);
    } else if (tag === this.TAGS.usageandsupport) {
      return allFAQs.filter(res => res.tag === this.TAGS.usageandsupport);
    }
  }
}

