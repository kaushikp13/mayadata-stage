import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workload-users',
  templateUrl: './workload-users.component.html',
  styleUrls: ['./workload-users.component.scss']
})
export class WorkloadUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // TODO: sample content, to be removed later when actual content will be added
  users = {
    title: `Cassandra is used in production on OpenEBS by 100s of companies including`,
    list: [
      {
        img: {
          imgSrc: `assets/images/workloads/cassandra/companies/optoro.svg`,
          imgAlt: `Optoro`,
        },
        title: `Optoro`,
        descriptions: [
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`,
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`
        ],
        userQuote: {
          description: `Fugiat occaecat voluptate in aliquip irure eu Lorem Lorem et ut. Nulla eu adipisicing in aliquip deserunt consectetur dolore fugiat. Culpa irure reprehenderit labore in qui sint dolor excepteur enim. Incididunt aliquip sint cillum occaecat voluptate veniam laboris. Ipsum aliquip ad aute ut veniam nulla irure aliqua eu amet. Sunt velit commodo elit amet deserunt. Lorem minim fugiat eu id et commodo incididunt aliquip eu dolore ea enim.`,
          user: {
            imgSrc: `assets/asdasd`,
            imgAlt: `John Doe`,
            name: `Angel Armstrong`,
            designation: `Founder & CEO`,
            company: `Google`
          }
        }
      },
      {
        img: {
          imgSrc: `assets/images/workloads/cassandra/companies/orange.svg`,
          imgAlt: `Optoro`,
        },
        title: `Optoro`,
        descriptions: [
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`,
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`
        ],
        userQuote: {
          description: `Fugiat occaecat voluptate in aliquip irure eu Lorem Lorem et ut. Nulla eu adipisicing in aliquip deserunt consectetur dolore fugiat. Culpa irure reprehenderit labore in qui sint dolor excepteur enim. Incididunt aliquip sint cillum occaecat voluptate veniam laboris. Ipsum aliquip ad aute ut veniam nulla irure aliqua eu amet. Sunt velit commodo elit amet deserunt. Lorem minim fugiat eu id et commodo incididunt aliquip eu dolore ea enim.`,
          user: {
            imgSrc: `assets/asdasd`,
            imgAlt: `John Doe`,
            name: `Angel Armstrong`,
            designation: `Founder & CEO`,
            company: `Google`
          }
        }
      },
      {
        img: {
          imgSrc: `assets/images/workloads/cassandra/companies/cncf.svg`,
          imgAlt: `Optoro`,
        },
        title: `Optoro`,
        descriptions: [
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`,
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`
        ],
        userQuote: {
          description: `Fugiat occaecat voluptate in aliquip irure eu Lorem Lorem et ut. Nulla eu adipisicing in aliquip deserunt consectetur dolore fugiat. Culpa irure reprehenderit labore in qui sint dolor excepteur enim. Incididunt aliquip sint cillum occaecat voluptate veniam laboris. Ipsum aliquip ad aute ut veniam nulla irure aliqua eu amet. Sunt velit commodo elit amet deserunt. Lorem minim fugiat eu id et commodo incididunt aliquip eu dolore ea enim.`,
          user: {
            imgSrc: `assets/asdasd`,
            imgAlt: `John Doe`,
            name: `Angel Armstrong`,
            designation: `Founder & CEO`,
            company: `Google`
          }
        }
      },
      {
        img: {
          imgSrc: `assets/images/workloads/cassandra/companies/comcast.svg`,
          imgAlt: `Optoro`,
        },
        title: `Optoro`,
        descriptions: [
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`,
          `Labore sint sunt dolor cupidatat aute consequat. Quis veniam esse sunt sunt quis quis ipsum in officia. Pariatur id et do reprehenderit fugiat. Eiusmod consectetur pariatur sint culpa.`
        ],
        userQuote: {
          description: `Fugiat occaecat voluptate in aliquip irure eu Lorem Lorem et ut. Nulla eu adipisicing in aliquip deserunt consectetur dolore fugiat. Culpa irure reprehenderit labore in qui sint dolor excepteur enim. Incididunt aliquip sint cillum occaecat voluptate veniam laboris. Ipsum aliquip ad aute ut veniam nulla irure aliqua eu amet. Sunt velit commodo elit amet deserunt. Lorem minim fugiat eu id et commodo incididunt aliquip eu dolore ea enim.`,
          user: {
            imgSrc: `assets/asdasd`,
            imgAlt: `John Doe`,
            name: `Angel Armstrong`,
            designation: `Founder & CEO`,
            company: `Google`
          }
        }
      }
    ]
  }

}
