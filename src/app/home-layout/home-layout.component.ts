import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import { extend, createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { ItemModel } from '@syncfusion/ej2-angular-navigations';
import { Query, Predicate, DataManager, ReturnOption } from '@syncfusion/ej2-data';
import {
    EventSettingsModel,View ,EJ2Instance, ActionEventArgs,ToolbarActionArgs, ScheduleComponent, EventRenderedArgs, DayService, WeekService,
    WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ResizeService, DragAndDropService,
     ExcelExportService, ExportOptions
} from '@syncfusion/ej2-angular-schedule';
import { Grid } from '@syncfusion/ej2-angular-grids';
import { scheduleData } from '../../assets/data';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, ExcelExportService]
})
export class HomeLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
}
@ViewChild('scheduleObj')
public scheduleObj: ScheduleComponent;
public selectedDate: Date = new Date(2019, 0, 10);
//public currentView: Array<string> = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
// public eventSettings: EventSettingsModel = {
//   dataSource: scheduleData,
//   fields: {
//       id: 'Id',
//       subject: { name: 'Subject', title: 'Event Name'},
//       location: { name: 'Location', title: 'Event Location'},
//       description: { name: 'Description', title: 'Medication'},
//       startTime: { name: 'StartTime', title: 'Appointment Start *'},
//       endTime: { name: 'EndTime', title: 'Appointment End *'},
      
//   }
// }
public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], scheduleData, null, true) };
public currentView: View = 'Week';
oneventRendered(args: EventRenderedArgs): void {
  switch (args.data.EventType) {
          case 'Requested':
              (args.element as HTMLElement).style.backgroundColor = '#F57F17';
              break;
          case 'Confirmed':
              (args.element as HTMLElement).style.backgroundColor = '#7fa900';
              break;
          case 'New':
              (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
              break;
      }
  // let categoryColor: string = args.data.CategoryColor as string;
  // if (!args.element || !categoryColor) {
  //     return;
  // }
  // if (this.currentView === 'Agenda') {
  //     (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
  // } else {
  //     args.element.style.backgroundColor = categoryColor;
  // }
}

onPopupOpen(args: PopupOpenEventArgs): void {
  if (args.type === 'Editor') {
    // let PatientstatusElement: HTMLInputElement = args.element.querySelector('#ResourceType') as HTMLInputElement;
    // if (!PatientstatusElement.classList.contains('e-dropdownlist')) {
    //     let dropDownListObject: DropDownList = new DropDownList({
    //         placeholder: 'Select Type', value: PatientstatusElement.value,
    //         dataSource: ['New', 'Requested', 'Confirmed']
    //     });
    //     dropDownListObject.appendTo(PatientstatusElement);
    //     PatientstatusElement.setAttribute('name', 'ResourceType');
    // }
    // let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
    // if (!statusElement.classList.contains('e-dropdownlist')) {
    //     let dropDownListObject: DropDownList = new DropDownList({
    //         placeholder: 'Select Resource', value: statusElement.value,
    //         dataSource: ['New', 'Requested', 'Confirmed']
    //     });
    //     dropDownListObject.appendTo(statusElement);
    //     statusElement.setAttribute('name', 'EventType');
    // }
    // let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
    // if (!startElement.classList.contains('e-datetimepicker')) {
    //     new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
    // }
    // let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
    // if (!endElement.classList.contains('e-datetimepicker')) {
    //     new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
    // }
    // patients fields
        if (!args.element.querySelector('.patient-field-row')) {
          let row: HTMLElement = createElement('div', { className: 'patient-field-row' });
          let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
          formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
          let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
          let inputEle: HTMLInputElement = createElement('input', {
              className: 'e-field e-input e-subject', attrs: { name: 'EventType', placeholder: 'Please enter client or patient name (Optional)' }
          }) as HTMLInputElement;
          container.appendChild(inputEle);
          row.appendChild(container);
          inputEle.setAttribute('name', 'EventType');
        }
  // Link button
        if (!args.element.querySelector('.link-field-row')) {
          let row: HTMLElement = createElement('div', { className: 'link-field-row' });
          let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
         formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
          let container: HTMLElement = createElement('div', { className: 'link-container' });
          let anchorEle: HTMLElement = createElement('a', {
              className: 'e-field', attrs: { name: 'LinkType', href:'https://www.google.com'}
          }) as HTMLInputElement;
          anchorEle.innerHTML = 'Click to quickly create client and patient'
          container.appendChild(anchorEle);
          row.appendChild(container);
        }
 // resource field       
    if (!args.element.querySelector('.custom-field-resource')) {
      let row: HTMLElement = createElement('div', { className: 'custom-field-resource' });
      let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
      formElement.firstChild.insertBefore(row, args.element.querySelector('.patient-field-row'));
      let container: HTMLElement = createElement('div', { className: 'custom-field-container1' });
      let inputEle: HTMLInputElement = createElement('input', {
          className: 'e-field', attrs: { name: 'ResourceType' }
      }) as HTMLInputElement;
      container.appendChild(inputEle);
      row.appendChild(container);
      let drowDownList: DropDownList = new DropDownList({
          dataSource: [
              { text: 'Requested1', value: 'Requested' },
              { text: 'Confirmed1', value: 'Confirmed' },
              { text: 'New1', value: 'New' },
              { text: 'Family Event2', value: 'family-event' }
          ],
          fields: { text: 'text', value: 'value' },
          value: (args.data as { [key: string]: Object }).EventType as string,
          floatLabelType: 'Always', placeholder: 'Resource'
      });
      drowDownList.appendTo(inputEle);
      inputEle.setAttribute('name', 'ResourceType');
    }
    
    if (!args.element.querySelector('.confirm-status')) {
      let row: HTMLElement = createElement('div', { className: 'confirm-status' });
      let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
      formElement.firstChild.insertBefore(row, args.element.querySelector('.e-start-end-row'));
      let container: HTMLElement = createElement('div', { className: 'confirm-status-container' });
      let inputEle: HTMLInputElement = createElement('input', {
          className: 'e-field', attrs: { name: 'confirmStatusType' }
      }) as HTMLInputElement;
      container.appendChild(inputEle);
      row.appendChild(container);
      let drowDownList: DropDownList = new DropDownList({
          dataSource: [
              { text: 'Requested1', value: 'Requested' },
              { text: 'Confirmed1', value: 'Confirmed' },
              { text: 'New1', value: 'New' },
              { text: 'Family Event2', value: 'family-event' }
          ],
          fields: { text: 'text', value: 'value' },
          value: (args.data as { [key: string]: Object }).EventType as string,
          floatLabelType: 'Always', placeholder: 'Confirm status'
      });
      drowDownList.appendTo(inputEle);
      inputEle.setAttribute('name', 'confirmStatusType');
    }
    if (!args.element.querySelector('.custom-field-status')) {
      let row: HTMLElement = createElement('div', { className: 'custom-field-status' });
      let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
      formElement.firstChild.insertBefore(row, args.element.querySelector('.confirm-status'));
      let container: HTMLElement = createElement('div', { className: 'status-container' });
      let inputEle: HTMLInputElement = createElement('input', {
          className: 'e-field', attrs: { name: 'StatusType' }
      }) as HTMLInputElement;
      container.appendChild(inputEle);
      row.appendChild(container);
      let drowDownList: DropDownList = new DropDownList({
          dataSource: [
              { text: 'Requested1', value: 'Requested' },
              { text: 'Confirmed1', value: 'Confirmed' },
              { text: 'New1', value: 'New' },
              { text: 'Family Event2', value: 'family-event' }
          ],
          fields: { text: 'text', value: 'value' },
          value: (args.data as { [key: string]: Object }).EventType as string,
          floatLabelType: 'Always', placeholder: 'Status'
      });
      drowDownList.appendTo(inputEle);
      inputEle.setAttribute('name', 'StatusType');
    }
    if (!args.element.querySelector('.custom-field-provider')) {
      let row: HTMLElement = createElement('div', { className: 'custom-field-provider' });
      let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
      formElement.firstChild.insertBefore(row, args.element.querySelector('.custom-field-status'));
      let container: HTMLElement = createElement('div', { className: 'provider-container' });
      let inputEle: HTMLInputElement = createElement('input', {
          className: 'e-field', attrs: { name: 'ProviderType' }
      }) as HTMLInputElement;
      container.appendChild(inputEle);
      row.appendChild(container);
      let drowDownList: DropDownList = new DropDownList({
          dataSource: [
              { text: 'Requested1', value: 'Requested' },
              { text: 'Confirmed1', value: 'Confirmed' },
              { text: 'New1', value: 'New' },
              { text: 'Family Event2', value: 'family-event' }
          ],
          fields: { text: 'text', value: 'value' },
          value: (args.data as { [key: string]: Object }).EventType as string,
          floatLabelType: 'Always', placeholder: 'Primary provider'
      });
      drowDownList.appendTo(inputEle);
      inputEle.setAttribute('name', 'ProviderType');
    }
      // Create required custom elements in initial time
      if (!args.element.querySelector('.custom-field-type')) {
          let row: HTMLElement = createElement('div', { className: 'custom-field-type' });
          let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
          formElement.firstChild.insertBefore(row, args.element.querySelector('.custom-field-resource'));
          let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
          let inputEle: HTMLInputElement = createElement('input', {
              className: 'e-field', attrs: { name: 'Type' }
          }) as HTMLInputElement;
          container.appendChild(inputEle);
          row.appendChild(container);
          let drowDownList: DropDownList = new DropDownList({
              dataSource: [
                  { text: 'Requested', value: 'Requested' },
                  { text: 'Confirmed', value: 'Confirmed' },
                  { text: 'New', value: 'New' },
                  { text: 'Family Event', value: 'family-event' }
              ],
              fields: { text: 'text', value: 'value' },
              value: (args.data as { [key: string]: Object }).EventType as string,
              floatLabelType: 'Always', placeholder: 'Type'
          });
          drowDownList.appendTo(inputEle);
          inputEle.setAttribute('name', 'Type');
        }
       
    //     // feeding fields
        // if (!args.element.querySelector('.feeding-field-row')) {
        //   let row: HTMLElement = createElement('div', { className: 'feeding-field-row' });
        //   let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
        //  formElement.firstChild.insertBefore(row, args.element.querySelector('.e-description-row'));
        //   let container: HTMLElement = createElement('div', { className: 'feeding-field-container' });
        //   let inputEle: HTMLInputElement = createElement('textarea', {
        //       className: 'e-field e-input e-subject', attrs: { name: 'FeedingType'}
        //   }) as HTMLInputElement;
        //   let lableEle: HTMLInputElement = createElement('lable', {
        //     className: 'e-field e-input lable-color', attrs: { name: 'feedingLable'}
        // }) as HTMLInputElement;
        // lableEle.innerHTML = 'Feeding instructions'
        // container.appendChild(lableEle);
        //   container.appendChild(inputEle);
        //   row.appendChild(container);
        //   inputEle.setAttribute('name', 'FeedingType');
        // }
    //      // equipment fields
    //      if (!args.element.querySelector('.equipment-field-row')) {
    //       let row: HTMLElement = createElement('div', { className: 'equipment-field-row' });
    //       let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
    //      formElement.firstChild.insertBefore(row, args.element.querySelector('.feeding-field-row'));
    //       let container: HTMLElement = createElement('div', { className: 'equipment-field-container' });
    //       let inputEle: HTMLInputElement = createElement('textarea', {
    //           className: 'e-field e-input', attrs: { name: 'equipmentType'}
    //       }) as HTMLInputElement;
    //       let lableEle: HTMLInputElement = createElement('lable', {
    //         className: 'e-field e-input lable-color', attrs: { name: 'EquipmentType', value:'equipment'}
    //     }) as HTMLInputElement;
    //     lableEle.innerHTML = 'Equipment' 
    //     container.appendChild(lableEle);
    //       container.appendChild(inputEle);
    //       row.appendChild(container);
    //       inputEle.setAttribute('name', 'EquipmentType');
    //     }

      //   // medication fields
      //  if (!args.element.querySelector('.medication-field-row')) {
      //   let row: HTMLElement = createElement('div', { className: 'medication-field-row' });
      //   let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
      //  formElement.firstChild.insertBefore(row, args.element.querySelector('.equipment-field-row'));
      //   let container: HTMLElement = createElement('div', { className: 'medication-field-container' });
      //   let inputEle: HTMLInputElement = createElement('textarea', {
      //       className: 'e-field e-input e-subject', attrs: { name: 'medicationType'}
      //   }) as HTMLInputElement;
      //   let lableEle: HTMLInputElement = createElement('lable', {
      //     className: 'e-field e-input e-subject', attrs: { name: 'medication-lable'}
      // }) as HTMLInputElement;
      // lableEle.innerHTML = 'Medication'
      // container.appendChild(lableEle);
      //   container.appendChild(inputEle);
      //   row.appendChild(container);
      //   inputEle.setAttribute('name', 'MedicationType');
      // }
        
       
        
  }
}
public onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
  if (args.requestType === 'toolbarItemRendering') {
    const exportItem: ItemModel = {
      align: 'Center', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
      text: 'Excel Export', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
    };
    args.items.push(exportItem);
  }
}
public onExportClick(): void {
  const exportValues: ExportOptions = { fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'Location'] };
  this.scheduleObj.exportToExcel(exportValues);
}

public onActionComplete(args):void{
console.log('complete')
}

globalSearch(args: KeyboardEvent): void {
  let searchString: string = (args.target as HTMLInputElement).value;
  if (searchString !== '') {
    new DataManager(this.scheduleObj.getEvents(null, null, true)).executeQuery(new Query().
      search(searchString, ['Subject', 'Location', 'Description'], null, true, true)).then((e: ReturnOption) => {
        if ((e.result as any).length > 0) {
          this.showSearchEvents('show', e.result);
        } else {
          this.showSearchEvents('hide');
        }
      });
  } else {
    this.showSearchEvents('hide');
  }
}

clearOnClick(): void {
  document.getElementById('schedule').style.display = 'block';
 // (document.getElementById('seperateSearch') as HTMLFormElement).reset();
  this.showSearchEvents('hide');
}
private showSearchEvents(type: string, data?: Object): void {
  if (type === 'show') {
    if (document.getElementById('grid').classList.contains('e-grid')) {
      let gridObj: Grid = (document.querySelector('#grid') as EJ2Instance).ej2_instances[0] as Grid;
      gridObj.dataSource = data;
      gridObj.dataBind();
    } else {
      let gridObj: Grid = new Grid({
        dataSource: data,
        height: 505,
        width: 'auto',
        columns: [
          { field: 'Subject', headerText: 'Subject', width: 120 },
          { field: 'Location', headerText: 'Location', width: 120 },
          { field: 'StartTime', headerText: 'StartTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
          { field: 'EndTime', headerText: 'EndTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
        ]
      });
      gridObj.appendTo(document.querySelector('#grid') as HTMLElement);
      this.scheduleObj.element.style.display = 'none';
    }
  } else {
    let gridObj: Object[] = (document.querySelector('#grid') as EJ2Instance).ej2_instances;
    if (gridObj && gridObj.length > 0 && !(gridObj[0] as Grid).isDestroyed) {
      (gridObj[0] as Grid).destroy();
    }
    this.scheduleObj.element.style.display = 'block';
  }
}

// public onEventRendered(args: EventRenderedArgs): void {
//   switch (args.data.EventType) {
//       case 'Requested':
//           (args.element as HTMLElement).style.backgroundColor = '#F57F17';
//           break;
//       case 'Confirmed':
//           (args.element as HTMLElement).style.backgroundColor = '#7fa900';
//           break;
//       case 'New':
//           (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
//           break;
//   }

//   let categoryColor: string = args.data.CategoryColor as string;
//   if (!args.element || !categoryColor) {
//       return;
//   }
//   if (this.currentView === 'Agenda') {
//       (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
//   } else {
//       args.element.style.backgroundColor = categoryColor;
//   }
// }
}
