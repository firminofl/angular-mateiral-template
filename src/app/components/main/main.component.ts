import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItems } from '../shared/menu-items/menu-items';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import PerfectScrollbar from 'perfect-scrollbar';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private _router: Subscription;

  today: number = Date.now();
  url: string;
  showSettings = false;
  dark: boolean;
  boxed: boolean;
  collapseSidebar: boolean;
  compactSidebar: boolean;
  sidebarBg: boolean = true;
  currentLang = 'en';
  layoutDir = 'ltr';
  searchFocus: boolean = false;
  click: number = 0;
  menuLayout: any = 'vertical-menu';
  selectedSidebarColor: any = 'sidebar-default';
  selectedHeaderColor: any = 'header-default';
  collapsedClass: any = 'side-panel-opened';
  count: number = 0;

  @ViewChild('sidemenu', { static: true }) sidemenu;
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private router: Router, public menuItems: MenuItems, private service: AuthService) { }

  ngOnInit(): void {

    const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');

    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar && this.layoutDir != 'rtl') {
      const ps = new PerfectScrollbar(elemSidebar, {
        wheelSpeed: 2,
        suppressScrollX: true
      });
    }

    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.url = event.url;
      if (this.isOver()) {
        this.sidemenu.close();
      }

      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar && this.layoutDir != 'rtl') {
        // Ps.update(elemContent);
      }
    });
  }

  ngOnDestroy() {

  }

  isOver(): boolean {
    if (this.url === '/apps/messages' || this.url === '/apps/calendar' || this.url === '/apps/media' || this.url === '/maps/leaflet') {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  menuMouseOver(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'over';
    }
  }

  menuMouseOut(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'side';
    }
  }

  menuToggleFunc() {
    this.sidemenu.toggle();

    if (this.collapsedClass == 'side-panel-opened') {
      this.collapsedClass = 'side-panel-closed';
    }
    else {
      this.collapsedClass = 'side-panel-opened';
    }
  }

  changeMenuLayout(value) {
    console.log(value)
    if (value) {
      this.menuLayout = 'top-menu';
    }
    else {
      this.menuLayout = 'vertical-menu';
      this.menuToggleFunc();
    }
  }

  onSelectedSidebarColor(selectedClass) {
    this.selectedSidebarColor = selectedClass;
  }

  onSelectedHeaderColor(selectedClass) {
    this.selectedHeaderColor = selectedClass;
  }

  isSidebarActive(value) {
    if (value == this.selectedSidebarColor) {
      return true;
    }
    else {
      return false;
    }
  }

  isHeaderActive(value) {
    if (value == this.selectedHeaderColor) {
      return true;
    }
    else {
      return false;
    }
  }

  clickDark() {
    this.click++;
    console.log('dark mode.')
  }

  openSettings() {
    this.showSettings = !this.showSettings
  }
}
