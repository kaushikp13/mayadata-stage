import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-workloads-faqs',
  templateUrl: './workloads-faqs.component.html',
  styleUrls: ['./workloads-faqs.component.scss']
})
export class WorkloadsFaqsComponent implements OnInit, AfterViewInit {

  @Input('workloadFaqs') workloadFaqs: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const listAccordionContainer = document.getElementById("listOfAccordion");

    const lists = listAccordionContainer.getElementsByClassName("accordion-item");

    const listsOfIcons = listAccordionContainer.getElementsByClassName("mi");

    const listOfBody = listAccordionContainer.getElementsByClassName("accordion-item-body");

    for (let i = 0; i < lists.length; i++) {
      let isShowing = false;
      lists[i].addEventListener("click", function () {
        isShowing = !isShowing;
        listOfBody[i].classList.toggle("show", isShowing);
        listsOfIcons[i].classList.toggle("rotate-icon", isShowing);
        lists[i].classList.toggle("accordion-item-body-active", isShowing);
      });
    }
  }

}
