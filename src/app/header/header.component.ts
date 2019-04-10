import { Component, ViewEncapsulation, Inject, ViewChild ,OnInit} from '@angular/core';
import { ToolbarComponent, MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { removeClass } from '@syncfusion/ej2-base';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
now;
now1
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  
    
}
  ngOnInit() {
  }
  

}