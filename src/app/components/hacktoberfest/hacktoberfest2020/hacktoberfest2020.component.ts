import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service"

@Component({
  selector: 'app-hacktoberfest2020',
  templateUrl: './hacktoberfest2020.component.html',
  styleUrls: ['./hacktoberfest2020.component.scss']
})
export class Hacktoberfest2020Component implements OnInit {

  signUpUrl: string;
  constructor(private utils: UtilsService, private renderer: Renderer2) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.disableEventOnHTMLElement(this.filterOutUnDecidedEvents(this.hacktoberfest.workshops.events));
  }

  hacktoberfest = {
    getStarted: {
      title: `Get started on your hacktoberfest journey`,
      subtitle: `Pick issues from the following repos`,
      issuesToSolve: [
        {
          title: `Contribute to OpenEBS`,
          description: `OpenEBS is the most popular Open Source Container Attached Storage project.`,
          cta: {
            ctaText: `OpenEBS`,
            ctaLink: `https://github.com/openebs/openebs/labels/Hacktoberfest`
          },
          blog: {
            blogText: `Checkout OpenEBS blog to know more!`,
            blogLink: `https://openebs.io/blog/hacktoberfest-2020-contribute-to-openebs/`
          }
        },
        {
          title: `Contribute to LitmusChaos`,
          description: `LitmusChaos is the only open chaos engineering project for Kubernetes.`,
          cta: {
            ctaText: `LitmusChaos`,
            ctaLink: `https://github.com/litmuschaos/litmus/labels/Hacktoberfest`
          },
          blog: {
            blogText: `Checkout LitmusChaos blog to know more!`,
            blogLink: `https://dev.to/prithvi1307/celebrate-hacktoberfest-2020-with-litmuschaos-1d9m`
          }
        }
      ]
    },
    hacktoberfestIntroInfo: [
      {
        title: `Read the contributing guidelines`,
        cta: [
          {
            ctaText: `OpenEBS`,
            ctaLink: `https://github.com/openebs/openebs/blob/master/CONTRIBUTING.md`
          },
          {
            ctaText: `LitmusChaos`,
            ctaLink: `https://github.com/litmuschaos/litmus/blob/master/CONTRIBUTING.md`
          },
        ],
        icon: `mi-book`
      },
      {
        title: `Read our welcome blog`,
        cta: {
          ctaText: `Welcome blog`,
          ctaLink: `https://blog.mayadata.io/celebrate-hacktoberfest-2020-open-source-with-mayadata`
        },
        icon: `mi-edit`
      },
      {
        title: `Join #openebs-dev & #litmus-dev channels on Kubernetes workspace if you need any help`,
        cta: [
          {
            ctaText: `OpenEBS`,
            ctaLink: `https://app.slack.com/client/T09NY5SBT/C015124PVTL`
          },
          {
            ctaText: `LitmusChaos`,
            ctaLink: `https://app.slack.com/client/T09NY5SBT/C018C31N2G0`
          }
        ],
        icon: `mi-slack`
      }
    ],
    prizes: {
      title: `Contribute to get swags & a chance to win the grand prize from MayaData`,
      subtitle: `We are giving away special edition T-shirts and stickers to all our hacktoberfest contributors`,
      laptop: {
        title: `The best PR submission will win a brand new laptop!`,
        imgSrc: `assets/images/hacktoberfest2019/laptop.png`,
        imgAlt: `Win a Laptop`
      },
      otherPrizes: {
        title: `Other Prizes Up For Grabs`,
        prizes: [
          {
            imgSrc: `assets/images/hacktoberfest2020/mechanical-board.png`,
            imgAlt: `Mechanical Keyboard`,
            title: `Mechanical Keyboard`
          },
          {
            imgSrc: `assets/images/hacktoberfest2020/nvme-drive.png`,
            imgAlt: `NVMe Drive`,
            title: `NVMe Drive`
          },
          {
            imgSrc: `assets/images/hacktoberfest2020/ear_buds.png`,
            imgAlt: `EarBuds`,
            title: `EarBuds`
          }
        ]
      },
      tshirt: {
        title: `Every contributor will get a special edition Hacktoberfest t-shirt`,
        imgSrc: `assets/images/hacktoberfest2020/t-shirt.jpg`,
        imgAlt: `T Shirt`
      }
    },
    workshops: {
      title: `Worldwide Hacktoberfest Virtual Workshops`,
      description: `Hacktoberfest is celebrated all around the world and you can participate from anywhere`,
      subtitle: `Details of the virtual events`,
      events: [
        {
          cta: {
            ctaLink: `https://organize.mlh.io/participants/events/5042-hacktoberfest-2020-kickoff-by-mayadata`,
            ctaText: `Meet Up`
          },
          img: {
            imgSrc: `assets/images/hacktoberfest2020/oct3.png`,
            imgAlt: `Date`
          },
          timing: `11AM-12:30PM IST`,
          descriptions: [
            `Hacktoberfest 2020 Kickoff`,
            `by MayaData`
          ]
        },
        {
          cta: {
            ctaLink: `https://www.meetup.com/OpenSource-Cafe/events/273759892/`,
            ctaText: `Meet Up`
          },
          img: {
            imgSrc: `assets/images/hacktoberfest2020/oct10.png`,
            imgAlt: `Date`
          },
          timing: `11AM-12:30PM IST`,
          descriptions: [
            `Hacktoberfest Celebration`,
            `Hack with OpenEBS`
          ],
          styles: {
            cursor: "disabled"
          }
        },
        {
          cta: {
            ctaLink: `https://www.meetup.com/OpenSource-Cafe/events/273804469/`,
            ctaText: `Meet Up`
          },
          img: {
            imgSrc: `assets/images/hacktoberfest2020/oct17.png`,
            imgAlt: `Date`
          },
          timing: `10:30AM-12PM IST`,
          descriptions: [
            `Celebrate Hacktoberfest with`,
            `LitmusChaos & Okteto Cloud`
          ]
        },
        {
          cta: {
            ctaLink: `https://www.meetup.com/OpenSource-Cafe/events/274109255/`,
            ctaText: `Meet Up`
          },
          img: {
            imgSrc: `assets/images/hacktoberfest2020/oct24.png`,
            imgAlt: `Date`
          },
          timing: `11:00AM-12:30PM IST`,
          descriptions: [
            `Hacktoberfest 2020 with`,
            `OpenEBS & Litmus (Intermediate & Advanced contributors)`
          ]
        },
        {
          cta: {
            ctaLink: 'https://www.meetup.com/OpenSource-Cafe/events/274276050/',
            ctaText: `Meet Up`
          },
          img: {
            imgSrc: `assets/images/hacktoberfest2020/oct31.png`,
            imgAlt: `Date`
          },
          timing: '11:00AM-12:00PM IST`',
          descriptions: [
            `The journey of Hacktoberfest`,
            `2020`
          ]
        }
      ]
    },
    kubera: {
      title: `Interested in trying out MayaData's product Kubera?`,
      cta: {
        ctaLink: `https://account.mayadata.io/signup`,
        ctaText: `Try it for free`
      }
    }
  }

  setEventId(id) {
    return `event-${id}`;
  }

  disableEventOnHTMLElement(eventIds) {
    for (let event of eventIds) {
      let eventSelector = document.getElementById(this.setEventId(event));
      eventSelector.style.pointerEvents = 'none';
      eventSelector.style.cursor = 'none';
      if (eventSelector) {
        eventSelector.addEventListener('click', function (e) {
          e.preventDefault();
        })
      }
    }
  }

  filterOutUnDecidedEvents(events) {
    return events.map(res => {
      if (res.cta.ctaLink === null && res.timing === null) {
        return String(events.indexOf(res));
      }
    }).filter(res => res !== undefined);
  }



}
