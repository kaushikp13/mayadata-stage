import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage-kubera-mid-content',
  templateUrl: './homepage-kubera-mid-content.component.html',
  styleUrls: ['./homepage-kubera-mid-content.component.scss']
})
export class HomepageKuberaMidContentComponent implements OnInit {
  videoTagStorage: any;

  constructor(private sanitizer: DomSanitizer) {
    this.videoTagStorage = this.getvideoTagStorage();
  }

  ngOnInit() {
  }

  private getvideoTagStorage() {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<video class="landing-page-video noselect" muted loop autoplay playsinline disableRemotePlayback>
            <source src="/assets/animations/home/storage.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>`
    );
  }


}
