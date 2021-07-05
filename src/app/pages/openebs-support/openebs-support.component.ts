import { Component, HostListener, NgZone, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { silderContent } from '../../../app/contents/pages/openEBS-support';
import { GTM } from '../../../app/constants/constants';
import { openEBS_Companies, openEBS_Features } from '../../../app/contents/pages/openEBS-support';
import { AnimationOptions, LottieTransferState } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-openebs-support',
  templateUrl: './openebs-support.component.html',
  styleUrls: ['./openebs-support.component.scss']
})
export class OpenebsSupportComponent implements OnInit {
  windowSize: any;
  tab1: boolean = true;
  tab2: boolean = false;
  tab3: boolean = false;


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowSize = event.target.innerWidth;
  }

  modalRef: BsModalRef;
  config = {
    animated: false,
    class: 'workload-marketing-video'
  };
  companies = openEBS_Companies;
  features = openEBS_Features;
  silderContent = silderContent;
  GTM: any;
  storages: any = [
    {
      imageUrl: `assets/images/openebs-support/leader.png`,
      alt: `Open Source Leader`,
      title: `Open Source Leader`,
      videoURL: "/assets/animations/openEBS-support/Leader/leader.mp4",
      description: `OpenEBS is the most popular open-source CNCF storage project. It is the defacto standard way to run many stateful workloads. MayaData partners with select open source projects to deliver the best integrated solutions for your developers and SREs.`
    },
    {
      imageUrl: `assets/images/openebs-support/speed.png`,
      alt: `Built for Speed`,
      title: `Built for Speed`,
      videoURL: "/assets/animations/openEBS-support/Speed/speed.mp4",
      description: `OpenEBS includes localPV and NVMe Options, ensuring you get all the performance you pay for in the cloud and on-premise. Your developers and SREs will spend their time developing not tuning.`
    },
    {
      imageUrl: ``,
      alt: ``,
      title: ``,
      videoURL: "",
      description: ``
    },
    {
      imageUrl: `assets/images/openebs-support/kubernetes.png`,
      alt: `Built on Kubernetes`,
      title: `Built on Kubernetes`,
      videoURL: "/assets/animations/openEBS-support/Kubernetes/kubernetes.mp4",
      description: `OpenEBS is not dependent on Linux kernel modifications or proprietary storage appliances. OpenEBS runs in userspace and on Kubernetes, making deployment and operations simple.`
    }
  ]

  options!: AnimationOptions;
  optionsGraph!: AnimationOptions;
  optionsBottom!: AnimationOptions;
  optionsRightWindow!: AnimationOptions;
  optionsLeftWindow!: AnimationOptions;
  optionsPoly!: AnimationOptions;
  optionsTriangle!: AnimationOptions;
  optionsBottomMobile!: AnimationOptions;

  styles: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

  stylesGraph: Partial<CSSStyleDeclaration> = {
    margin: '200px auto',
  };

  stylesBottom: Partial<CSSStyleDeclaration> = {
    margin: '200px auto',
  };

  stylesLeftWindow: Partial<CSSStyleDeclaration> = {
    // margin: '0 auto',
    // resize: 'horizontal',
    // overflow: 'visible',
    // width: '1000px',
    // height: 'auto',
  };

  stylesRightWindow: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

  stylesPoly: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

  stylesTriangle: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

  private animationItem: AnimationItem | null = null;
  videoTagLeader: any;
  videoTagSpeed: any;
  videoTagKubernetes: any;

  constructor(private modalService: BsModalService,
    private ngZone: NgZone,
    // @Inject(PLATFORM_ID) private platformId: string,
    private lottieTransferState: LottieTransferState,
    private sanitizer: DomSanitizer) {
    this.GTM = GTM;
    this.createOptions();
    this.videoTagLeader = this.getvideoTagLeader();
    this.videoTagSpeed = this.getvideoTagSpeed();
    this.videoTagKubernetes = this.getvideoTagKubernetes();

  }

  ngOnInit() {
  }

  private getvideoTagLeader() {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<video class="landing-page-video noselect" muted loop autoplay playsinline disableRemotePlayback>
            <source src="/assets/animations/openEBS-support/Leader/leader.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>`
    );
  }

  private getvideoTagSpeed() {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<video class="landing-page-video noselect" muted loop autoplay playsinline disableRemotePlayback>
            <source src="/assets/animations/openEBS-support/Speed/speed.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>`
    );
  }

  private getvideoTagKubernetes() {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<video class="landing-page-video noselect" muted loop autoplay playsinline disableRemotePlayback>
            <source src="/assets/animations/openEBS-support/Kubernetes/kubernetes.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>`
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  animationCreated(animationItem: AnimationItem): void {
    NgZone.assertInAngularZone();
    console.log('animationCreated -> ', animationItem);
    this.animationItem = animationItem;
  }

  private createOptions(): void {
    const tranferredCubeAnimationData = this.lottieTransferState.get('Cube.json');

    if (tranferredCubeAnimationData) {
      this.options = {
        animationData: tranferredCubeAnimationData,
      };
    } else {
      this.options = {
        path: '/assets/animations/openEBS-support/Cube.json',
      };
    }


    const tranferredGraphAnimationData = this.lottieTransferState.get('Graph.json');

    if (tranferredGraphAnimationData) {
      this.optionsGraph = {
        animationData: tranferredGraphAnimationData,
      };
    } else {
      this.optionsGraph = {
        path: '/assets/animations/openEBS-support/Graph.json',
      };
    }

    const tranferredtitleBottomAnimationData = this.lottieTransferState.get('title-bottom.json');

    if (tranferredtitleBottomAnimationData) {
      this.optionsBottom = {
        animationData: tranferredtitleBottomAnimationData,
      };
    } else {
      this.optionsBottom = {
        path: '/assets/animations/openEBS-support/title-bottom.json',
      };
    }

    const tranferredtitleBottomMobileAnimationData = this.lottieTransferState.get('title-bottom-mobile.json');

    if (tranferredtitleBottomMobileAnimationData) {
      this.optionsBottomMobile = {
        animationData: tranferredtitleBottomMobileAnimationData,
      };
    } else {
      this.optionsBottomMobile = {
        path: '/assets/animations/openEBS-support/title-bottom-mobile.json',
      };
    }

    const tranferredLeftWindowAnimationData = this.lottieTransferState.get('Left-window.json');

    if (tranferredLeftWindowAnimationData) {
      this.optionsLeftWindow = {
        animationData: tranferredLeftWindowAnimationData,
      };
    } else {
      this.optionsLeftWindow = {
        path: '/assets/animations/openEBS-support/Left-window.json',
      };
    }

    const tranferredRightWindowAnimationData = this.lottieTransferState.get('Right-window.json');

    if (tranferredRightWindowAnimationData) {
      this.optionsRightWindow = {
        animationData: tranferredRightWindowAnimationData,
      };
    } else {
      this.optionsRightWindow = {
        path: '/assets/animations/openEBS-support/Right-window.json',
      };
    }

    const tranferredPolyAnimationData = this.lottieTransferState.get('Polyhedron.json');

    if (tranferredPolyAnimationData) {
      this.optionsPoly = {
        animationData: tranferredPolyAnimationData,
      };
    } else {
      this.optionsPoly = {
        path: '/assets/animations/openEBS-support/Polyhedron.json',
      };
    }

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

  addClass(index) {
    if (index == 0) {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;

    }
    else if (index == 1) {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
    }
    else {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
    }
  }


}
