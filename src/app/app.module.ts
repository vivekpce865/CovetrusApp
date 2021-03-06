import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { FullCalendarModule } from 'ng-fullcalendar';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


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
import { WhiteboardsComponent} from './whiteboards/whiteboards.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeLayoutComponent,
    WhiteboardsComponent,
    WhiteboardComponent
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
    TimePickerModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
