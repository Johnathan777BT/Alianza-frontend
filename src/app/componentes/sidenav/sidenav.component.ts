import { Component, ChangeDetectorRef,OnDestroy } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  
  fillerNav =[
    {    name:"Nuevo Cliente", route:"", icon:"home"},
    {    name:"Clientes", route:"listarclientes", icon:"perm_contact_calendar"}

]


  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
    this.mobileQuery.addListener( this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener( this._mobileQueryListener);
  }

  shouldRun = true;

}
