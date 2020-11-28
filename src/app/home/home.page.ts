import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {InAppBrowser,InAppBrowserOptions} from "@ionic-native/in-app-browser/ngx";

declare var window;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //private themeableBrowser:ThemeableBrowser
  constructor(private appBrowser:InAppBrowser) {}
ngOnInit()
{
//this.router.navigate(["/frame"]);




}
  goto()
  {
    let options:InAppBrowserOptions={
      zoom:"yes",
     
      hideurlbar:"yes",
      hidenavigationbuttons:"yes"
    }
    let url = "https://admin.mediastarireland.ie/login/";
    this.appBrowser.create(url,"_blank",options);
  }

}
