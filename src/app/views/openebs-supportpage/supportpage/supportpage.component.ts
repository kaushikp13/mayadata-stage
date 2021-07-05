import { Component, Input, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieTransferState } from 'ngx-lottie';

@Component({
  selector: 'app-supportpage',
  templateUrl: './supportpage.component.html',
  styleUrls: ['./supportpage.component.scss']
})
export class SupportpageComponent implements OnInit {
  @Input() displayBlock: boolean = false;
  optionsTriangle!: AnimationOptions;
  private animationItem: AnimationItem | null = null;

  constructor(
    private ngZone: NgZone,
    private lottieTransferState: LottieTransferState,) {
    this.createOptions();
  }

  ngOnInit() {
  }

  animationCreated(animationItem: AnimationItem): void {
    NgZone.assertInAngularZone();
    this.animationItem = animationItem;
  }

  private createOptions(): void {


    const tranferredTriangleAnimationData = this.lottieTransferState.get('triangle.json');

    if (tranferredTriangleAnimationData) {
      this.optionsTriangle = {
        animationData: tranferredTriangleAnimationData,
      };
    } else {
      this.optionsTriangle = {
        path: '/assets/animations/openEBS-support/triangle.json',
      };
    }


  }

}
