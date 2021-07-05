import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent implements OnInit {
  @Input() silderContent: any;
  @Input() isSupport: any;
  isSupportValue: boolean = false;
  constructor() { }

  ngOnInit() {
    if (this.isSupport == 'true') {
      this.isSupportValue = true;
    }
  }

}
