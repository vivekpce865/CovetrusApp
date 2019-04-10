import { Component, ViewEncapsulation, Inject, ViewChild, OnInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @ViewChild('dockBar')
  public dockBar: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '72px';
  // only for sample browser use 
  constructor( ) {
      
  }

  // open new tab
  newTabClick(): void {
      document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'sidebar/docking-sidebar');
  }
  positionChange(args: any) {
      this.dockBar.position = args.value == "left" ? "Left" : "Right";
  }
  toggleClick() {
      this.dockBar.toggle();
  }


  ngOnInit() {
  }

}