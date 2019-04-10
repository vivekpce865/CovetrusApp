import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { FullCalendarModule } from 'ng-fullcalendar';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
// import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { SidebarModule, MenuAllModule, TreeViewAllModule} from '@syncfusion/ej2-angular-navigations';

import { RadioButtonModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { WhiteboardsComponent } from './whiteboards/whiteboards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeLayoutComponent,
    WhiteboardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TreeViewModule,
    MenuAllModule,
    TreeViewAllModule,
    FullCalendarModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    TimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
