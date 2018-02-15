import { Component } from '@angular/core';
import * as $ from 'jquery';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCollapsed = false;
  constructor() {
    PageScrollConfig.defaultScrollOffset = 100;
    PageScrollConfig.defaultDuration = 500;
  }
}
