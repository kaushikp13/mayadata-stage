import { Component, OnInit, Renderer2, ElementRef, ViewChild, Inject, HostListener, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window/window.service';
import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { UtilsService } from '../../services/utils/utils.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GTM } from "../../constants/constants"

declare var $: any;

@Component({
  selector: 'app-header-old',
  templateUrl: './header.component.html',
  host: {
    '(document:click)': 'handleClick($event)'
  },
  styleUrls: ['./header.component.scss']
})
export class HeaderComponentOLD implements OnInit, AfterViewInit, AfterViewChecked {
  public elementRef;
  userData;
  userDetails;
  @ViewChild('headerVar', { static: false }) headerVar: ElementRef;
  @ViewChild('headerWrapper', { static: false }) headerWrapper: ElementRef;
  @ViewChild('authButton1', { static: false }) authButton1: ElementRef;
  @ViewChild('authButton2', { static: false }) authButton2: ElementRef;
  @ViewChild('first', { static: false }) first: ElementRef;
  @ViewChild('second', { static: false }) second: ElementRef;
  @ViewChild('fourth', { static: false }) fourth: ElementRef;
  @ViewChild('fifth', { static: false }) fifth: ElementRef;
  @ViewChild('navbarToggler', { static: true, read: ElementRef }) navbarToggler: ElementRef;
  @ViewChild('navbarTogglerCross', { static: true, read: ElementRef }) navbarTogglerCross: ElementRef;
  @ViewChild('navbarTogglerCross2', { static: true, read: ElementRef }) navbarTogglerCross2: ElementRef;
  @ViewChild('mobileNav', { static: false }) mobileNav: ElementRef;
  @ViewChild('dropmenu', { static: false }) dropmenu: ElementRef;
  @ViewChild('dropmenuMob', { static: false }) dropmenuMob: ElementRef;

  logOutUrl: any;
  userProfileUrl: string;
  loginUrl: string;
  signupUrl: string;
  myPortal: string;
  routerUrl: boolean;
  safeLogOutUrl: any;
  domain: string;
  toggle = false;
  isUserAvatarLoading = true;
  isLoggedInSuccessfully = false;
  public navIsFixed = false;
  public isScrolledTop = true;
  public isHidden = true;
  public isHidden2 = true;
  public isHidden3 = true;
  public isHidden4 = true;
  public isHidden5 = true;
  public isHeaderHidden = true;
  public isHeaderScrollHidden = true;
  public isScrolled = false;
  public isClicked = false;
  public isHiddenMob = true;
  headerHeight: number;

  GTM: any;
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window,
    private renderer: Renderer2, elm: ElementRef, public router: Router,
    private commonService: CommonService, private cookieService: CookieService,
    private authService: AuthService, private utils: UtilsService, private sanitizer: DomSanitizer) {
    this.elementRef = elm;
    this.domain = window.location.hostname.split('.')[0];
  }

  handleClick(event) {
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (inside) {
    } else {
      this.isHidden = true;
      this.isHidden2 = true;
      this.isHidden3 = true;
      this.isHidden4 = true;
      this.isHidden5 = true;
      this.document.body.style.overflow = 'visible';
      this.isHeaderHidden = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 1) {
      this.isScrolled = true;
      this.isScrolledTop = true;
      this.isHeaderScrollHidden = false;
      this.headerVar.nativeElement.style.boxShadow = '0 10px 20px 0 rgba(0,23,62,.05)';
    } else if (!this.isHeaderScrollHidden && number <= 1) {
      this.isHeaderScrollHidden = true;
      this.isScrolledTop = false;
      this.isScrolled = false;
      this.headerVar.nativeElement.style.boxShadow = 'none';
    }
    this.commonService.isHeaderHidden = !this.isHeaderScrollHidden;
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
    this.isHidden2 = true;
    this.isHidden3 = true;
    this.isHidden4 = true;
    this.isHidden5 = true;
  }
  toggleHidden2() {
    this.isHidden2 = !this.isHidden2;
    this.isHidden = true;
    this.isHidden3 = true;
    this.isHidden4 = true;
    this.isHidden5 = true;
  }
  toggleHidden3() {
    this.isHidden3 = !this.isHidden3;
    this.isHidden = true;
    this.isHidden2 = true;
    this.isHidden4 = true;
    this.isHidden5 = true;
  }
  toggleHidden4() {
    this.isHidden4 = !this.isHidden4;
    this.isHidden = true;
    this.isHidden2 = true;
    this.isHidden3 = true;
    this.isHidden5 = true;
  }
  toggleHidden5() {
    this.isHidden5 = !this.isHidden5;
    this.isHidden = true;
    this.isHidden2 = true;
    this.isHidden3 = true;
    this.isHidden4 = true;
  }

  rotateMe(isHidden: boolean) {
    if (!isHidden) {
      return {
        'transform': 'rotate(180deg)',
        'transition': 'all 0.15s ease-out 0s',
      };
    } else {
      return {
        'transform': 'rotate(0deg)',
        'transition': 'all 0.15s ease-out 0s'
      };
    }
  }

  toggleHeader(isTrue: boolean) {
    if (isTrue) {
      return {
        'position': 'fixed',
        'background-color': '#fefefe',
        'color': '#0A025D'
      };
    } else {
      return {
        'position': 'relative',
        'background-color': "#2c0735",
        'color': '#fefefe'
      };
    }
  }

  toggleHeaderNonLandingPage(isTrue: boolean) {
    if (isTrue) {
      return {
        'position': 'fixed',
        'background-color': '#fefefe',
        'color': '#0A025D'
      };
    } else {
      return {
        'position': 'relative',
        'background-color': '#2c0735',
        'color': '#0A025D'
      };
    }
  }

  toggleHeaderLogic() {
    if (this.isScrolled) {
      if (this.isClicked) {
        this.toggleHeader(true);
      } else {
        this.toggleHeader(false);
      }
    } else {
      if (this.isClicked) {
        this.toggleHeader(true);
      } else {
        this.toggleHeader(true);
      }
    }
  }


  onProductClick() {
    if (!this.isHidden === true) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }
    this.isClicked = !this.isClicked;
    if (this.isScrolled) {
      if (this.isHidden) {
        this.headerVar.nativeElement.style.boxShadow = 'none';
      } else {
        this.headerVar.nativeElement.style.boxShadow = '0 0 15px 1px #D0D3E2';
      }
    }

    if (this.isHidden) {
      this.document.body.style.overflow = 'visible';
    } else {
      this.document.body.style.overflow = 'visible';
    }
    this.toggleHidden();
    // this.changeButtonStyleOnLoad();
  }

  onOpenSourceClick() {
    if (!this.isHidden2 === true) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }
    this.isClicked = !this.isClicked;
    if (this.isScrolled) {
      if (this.isHidden2) {
        this.headerVar.nativeElement.style.boxShadow = 'none';
      } else {
        this.headerVar.nativeElement.style.boxShadow = '0 0 15px 1px #D0D3E2';
      }
    }
    if (this.isHidden2) {
      this.document.body.style.overflow = 'visible';
    } else {
      this.document.body.style.overflow = 'visible';
    }
    this.toggleHidden2();
  }

  onCompanyClick() {
    if (!this.isHidden5 === true) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }
    this.isClicked = !this.isClicked;
    if (this.isScrolled) {
      if (this.isHidden5) {
        this.headerVar.nativeElement.style.boxShadow = 'none';
      } else {
        this.headerVar.nativeElement.style.boxShadow = '0 0 15px 1px #D0D3E2';
      }
    }
    if (this.isHidden5) {
      this.document.body.style.overflow = 'visible';
    } else {
      this.document.body.style.overflow = 'visible';
    }
    this.toggleHidden5();
  }

  onWorkloadsClick() {
    if (!this.isHidden3 === true) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }
    this.isClicked = !this.isClicked;
    if (this.isScrolled) {
      if (this.isHidden3) {
        this.headerVar.nativeElement.style.boxShadow = 'none';
      } else {
        this.headerVar.nativeElement.style.boxShadow = '0 0 15px 1px #D0D3E2';
      }
    }
    if (this.isHidden3) {
      this.document.body.style.overflow = 'visible';
    } else {
      this.document.body.style.overflow = 'visible';
    }
    this.toggleHidden3();
  }

  goToMyPortal() {
    this.exitDropMenu();
    this.renderer.setStyle(this.mobileNav.nativeElement, 'display', 'none');
    this.renderer.removeClass(this.mobileNav.nativeElement, 'displayTemplate');
    window.open(
      this.utils.websites().portalUrl
    )
  }

  expandDropMenu() {
    let isClassPresent = this.dropmenu.nativeElement.classList.contains('show');
    if (!isClassPresent) {
      this.renderer.addClass(this.dropmenu.nativeElement, 'show')
    } else {
      this.renderer.removeClass(this.dropmenu.nativeElement, 'show')
    }
  }

  exitDropMenu() {
    let isClassPresent = this.dropmenu.nativeElement.classList.contains('show');
    if (!isClassPresent) {
      this.renderer.addClass(this.dropmenu.nativeElement, 'show')
    } else {
      this.renderer.removeClass(this.dropmenu.nativeElement, 'show')
    }
  }

  logOut() {
    this.exitDropMenu();
    this.logOutIframe();
    this.isUserAvatarLoading = true;
    this.userDetails = null;
  }

  logOutIframe() {
    const iframe = document.createElement("iframe");
    let URL: string;
    URL = `${this.utils.websites().accountUrl}/logout`;
    iframe.setAttribute("src", URL);
    iframe.style.height = '400px';
    iframe.style.width = '400px';
    iframe.classList.add('logoutFrame');
    document.body.appendChild(iframe);
    setTimeout(() => {
      iframe.classList.remove('logoutFrame');
      iframe.remove();
    }, 4000);
  }

  expandDropMenuMob() {
    let isClassPresent = this.dropmenuMob.nativeElement.classList.contains('show');
    if (!isClassPresent) {
      this.renderer.addClass(this.dropmenuMob.nativeElement, 'show')
    } else {
      this.renderer.removeClass(this.dropmenuMob.nativeElement, 'show')
    }
  }

  exitDropMenuMob(url: string) {
    let isClassPresent = this.dropmenuMob.nativeElement.classList.contains('show');
    if (!isClassPresent) {
      this.renderer.addClass(this.dropmenuMob.nativeElement, 'show')
    } else {
      this.renderer.removeClass(this.dropmenuMob.nativeElement, 'show')
    }
    $('#logoutPopup').modal('show')
    setTimeout(() => {
      $('#logoutPopup').modal('hide');
      location.reload(true);
    }, 2000)
  }

  ngOnInit() {

    // scroll to top when router is changed
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.userProfileUrl = `${this.utils.websites().portalUrl}/profile`;
    this.myPortal = this.utils.websites().portalUrl;
    this.logOutUrl = `${this.utils.websites().accountUrl}/logout`;
    this.loginUrl = `${this.utils.websites().accountUrl}/login`;
    this.signupUrl = `${this.utils.websites().accountUrl}/signup`;
    this.safeLogOutUrl = this.sanitizer.bypassSecurityTrustUrl(this.logOutUrl);
    this.authService.getAuthProviders().subscribe();

    // ASSIGN GTM VALUE
    this.GTM = GTM

    if ((this.cookieService.check('token')) && (this.cookieService.check('authProvider'))) {
      this.authService.getAuthProviders().subscribe(res => {
        const isTokenValid = this.authService.testAuthToken(res);
        if (isTokenValid) {
          this.authService.getUserDetails().subscribe(res => {
            this.userData = res;
            this.isUserAvatarLoading = false;
            this.isLoggedInSuccessfully = true;
            this.userDetails = this.userData.data.filter(data => data.externalIdType === 'github_user')[0] || this.userData.data.filter(data => data.externalIdType === 'google_user')[0] || this.userData.data.filter(data => data.externalIdType === 'rancher_id')[0];
          });
        } else {
          this.isUserAvatarLoading = false;
        }
      })
    } else {
      this.isUserAvatarLoading = false;
    }

    setInterval(() => {
      if ((this.cookieService.check('token')) && (this.cookieService.check('authProvider'))) {
        this.authService.getAuthProviders().subscribe(res => {
          const isTokenValid = this.authService.testAuthToken(res);
          if (isTokenValid) {
            if (!this.isLoggedInSuccessfully) {
              this.isUserAvatarLoading = false;
              location.reload();
            }
          } else {
            if (this.isLoggedInSuccessfully) {
              this.isUserAvatarLoading = false;
              location.reload();
            }
          }
        })
      } else {
        if (this.isLoggedInSuccessfully) {
          this.isUserAvatarLoading = false;
          location.reload();
        }
      }
    }, 5000)

    // Mobile view Code
    const button = document.getElementById('click');
    const solution = document.getElementById('click2');
    const company = document.getElementById('company');
    const workloads = document.getElementById('workloadsMob');
    const slideDiv = document.getElementById('slide-div');
    const goBack = document.getElementById('go-back');
    const buttonParentDiv = document.getElementById('buttonDiv')
    const divPass = document.getElementById('DivPass');
    const divPass2 = document.getElementById('DivPass2');
    const divPass3 = document.getElementById('DivPass3');
    const divPass4 = document.getElementById('DivPass4');
    const mainList = document.getElementById('main-list');
    const logo = document.getElementById('logo');
    const showMob = document.getElementById('showMob');

    button.addEventListener('click', () => {
      buttonParentDiv.classList.add('hide');
      slideDiv.classList.add('show');
      divPass.classList.remove('hide');
      divPass2.classList.add('hide');
      divPass3.classList.add('hide');
      divPass4.classList.add('hide');
      divPass.classList.add('slideleft');
      mainList.classList.remove('slideright');
      logo.classList.remove('sliderightmore');
    })

    solution.addEventListener('click', () => {
      buttonParentDiv.classList.add('hide');
      slideDiv.classList.add('show');
      divPass.classList.add('hide');
      divPass2.classList.remove('hide');
      divPass3.classList.add('hide');
      divPass4.classList.add('hide');
      divPass2.classList.add('slideleft');
      mainList.classList.remove('slideright');
      logo.classList.remove('sliderightmore');
    })
    company.addEventListener('click', () => {
      buttonParentDiv.classList.add('hide');
      slideDiv.classList.add('show');
      divPass.classList.add('hide');
      divPass2.classList.add('hide');
      divPass3.classList.add('hide');
      divPass4.classList.remove('hide');
      divPass4.classList.add('slideleft');
      mainList.classList.remove('slideright');
      logo.classList.remove('sliderightmore');
    })

    workloads.addEventListener('click', () => {
      buttonParentDiv.classList.add('hide');
      slideDiv.classList.add('show');
      divPass.classList.add('hide');
      divPass2.classList.add('hide');
      divPass3.classList.remove('hide');
      divPass4.classList.add('hide');
      divPass3.classList.add('slideleft');
      mainList.classList.remove('slideright');
      logo.classList.remove('sliderightmore');
    })


    goBack.addEventListener('click', () => {
      buttonParentDiv.classList.remove('hide');
      slideDiv.classList.remove('show')
      divPass.classList.remove('slideleft');
      divPass2.classList.remove('slideleft');
      divPass4.classList.remove('slideleft');
      mainList.classList.add('slideright');
      logo.classList.add('sliderightmore');
    })

    // Mobile view code ends

    // check whether router is on landing page or not
    this.routerUrl = (this.router.url === '/');

    this.renderer.listen(this.navbarToggler.nativeElement, 'click', () => {
      this.renderer.setStyle(this.mobileNav.nativeElement, 'display', 'block');
      this.renderer.addClass(this.mobileNav.nativeElement, 'displayTemplate');
    });

    this.renderer.listen(this.navbarTogglerCross.nativeElement, 'click', () => {
      this.renderer.setStyle(this.mobileNav.nativeElement, 'display', 'none');
      this.renderer.removeClass(this.mobileNav.nativeElement, 'displayTemplate');
    });
    this.renderer.listen(this.navbarTogglerCross2.nativeElement, 'click', () => {
      this.renderer.setStyle(this.mobileNav.nativeElement, 'display', 'none');
      this.renderer.removeClass(this.mobileNav.nativeElement, 'displayTemplate');
    });
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    if (this.headerWrapper && this.headerVar) {
      // minus 10 , it is because not to leave extra space while
      let height = `${this.headerVar.nativeElement.offsetHeight - 10}px`;
      this.renderer.setStyle(this.headerWrapper.nativeElement, 'height', height);
    }
  }

}
