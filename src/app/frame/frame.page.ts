import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {
link:SafeResourceUrl;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/channel/UCzJLtHlTxYQla2Nl56l-lsQ");
    
  }

}
