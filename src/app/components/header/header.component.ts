import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewChecked, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from "../../services/utils/utils.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarWrapper', { static: false }) navbarWrapper: ElementRef;
  @ViewChild('navbarInside', { static: false }) navbarInside: ElementRef;
  @ViewChild('navbar', { static: false }) navbar: ElementRef;

  signUpUrl: string;
  loginUrl: string;
  innerWidth: any;

  constructor(private router: Router, private renderer: Renderer2, private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.loginUrl = `${this.utils.websites().accountUrl}/login`;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  hideclass() {
    if (innerWidth < 1024) {
      let active = document.querySelector(".show");
      active.classList.remove("show");
      document.getElementById("mobile-toggle").classList.add('collapsed');
    }

  }

  ngAfterViewChecked() {
    this.setNavbarHeight();
  }

  @HostListener('window:scroll') onScroll() {
    if (window.scrollY > 10) {
      this.renderer.removeClass(this.navbar.nativeElement, 'bg-transparent');
      this.renderer.addClass(this.navbar.nativeElement, 'bg-dark');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'bg-dark');
      this.renderer.addClass(this.navbar.nativeElement, 'bg-transparent');
    }
  }

  @HostListener('window:resize', []) onResize() {
    this.setNavbarHeight();
    this.innerWidth = window.innerWidth;

  }

  setNavbarHeight() {
    let height = `${this.navbarInside.nativeElement.offsetHeight}px`;
    this.renderer.setStyle(this.navbarWrapper.nativeElement, 'height', height);
  }

}
