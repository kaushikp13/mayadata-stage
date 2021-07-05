import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-workload-hero',
  templateUrl: './workload-hero.component.html',
  styleUrls: ['./workload-hero.component.scss']
})
export class WorkloadHeroComponent implements OnInit {

  @Input("intro") intro;

  modalRef: BsModalRef;
  config = {
    animated: false,
    class: 'workload-marketing-video'
  };
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  scroll() {
    const scrollToElement = document.getElementById("deploy");
    const HEADER_OFFSET = 100;
    const elementPosition = scrollToElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - HEADER_OFFSET;
    window.scrollBy({ behavior: "smooth", top: offsetPosition });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
