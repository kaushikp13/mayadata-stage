import { Component, OnInit, ViewEncapsulation, AfterViewInit, NgZone } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service"
import * as _ from "lodash";
import { mdHeroSection } from '../../../../app/contents/pages/home';
import { AnimationOptions, LottieTransferState } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
@Component({
  selector: 'app-homepage-hero',
  templateUrl: './homepage-hero.component.html',
  styleUrls: ['./homepage-hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageHeroComponent implements OnInit, AfterViewInit {
  optionsHomeLeftWindow!: AnimationOptions;
  optionsHomeRightWindow!: AnimationOptions;
  optionsHomePoly!: AnimationOptions;
  optionsHomeTriangles!: AnimationOptions;
  optionsHomeGraphs!: AnimationOptions;
  private animationItem: AnimationItem | null = null;


  // positioning text
  mdHeroSection = mdHeroSection;
  ctaUrl: string;
  constructor(private utils: UtilsService,
    private ngZone: NgZone,
    private lottieTransferState: LottieTransferState,) {
    this.createOptions()
    // this.ctaUrl = `https://go.mayadata.io/register-for-kubera-chaos-and-propel-technical-preview`;
    this.ctaUrl = `/openebs-support`;

    this.mdHeroSection = _.merge(this.mdHeroSection, {
      cta: {
        signUp: { link: this.ctaUrl }
      }
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  animationCreated(animationItem: AnimationItem): void {
    NgZone.assertInAngularZone();
    console.log('animationCreated -> ', animationItem);
    this.animationItem = animationItem;
  }

  private createOptions(): void {
    const tranferredLeftHomeAnimationData = this.lottieTransferState.get('Leftwindow.json');

    if (tranferredLeftHomeAnimationData) {
      this.optionsHomeLeftWindow = {
        animationData: tranferredLeftHomeAnimationData,
      };
    } else {
      this.optionsHomeLeftWindow = {
        path: '/assets/animations/home/Leftwindow.json',
      };
    }

    const tranferredRightHomeAnimationData = this.lottieTransferState.get('Rightwindow.json');

    if (tranferredRightHomeAnimationData) {
      this.optionsHomeRightWindow = {
        animationData: tranferredRightHomeAnimationData,
      };
    } else {
      this.optionsHomeRightWindow = {
        path: '/assets/animations/home/Rightwindow.json',
      };
    }

    const tranferredPolyAnimationData = this.lottieTransferState.get('polyhedron.json');

    if (tranferredPolyAnimationData) {
      this.optionsHomePoly = {
        animationData: tranferredPolyAnimationData,
      };
    } else {
      this.optionsHomePoly = {
        path: '/assets/animations/home/polyhedron.json',
      };
    }

    const tranferredTriangleAnimationData = this.lottieTransferState.get('triangle.json');

    if (tranferredTriangleAnimationData) {
      this.optionsHomeTriangles = {
        animationData: tranferredTriangleAnimationData,
      };
    } else {
      this.optionsHomeTriangles = {
        path: '/assets/animations/home/triangle.json',
      };
    }

    const tranferredGraphAnimationData = this.lottieTransferState.get('graphs.json');

    if (tranferredGraphAnimationData) {
      this.optionsHomeGraphs = {
        animationData: tranferredGraphAnimationData,
      };
    } else {
      this.optionsHomeGraphs = {
        path: '/assets/animations/home/graphs.json',
      };
    }

  }
}
