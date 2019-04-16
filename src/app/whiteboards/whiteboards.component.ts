import { Component, OnInit ,Inject} from '@angular/core';
import { timelineData } from '../../assets/data';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { dataBinding } from '@syncfusion/ej2-schedule';

// import './dialog-data.html'
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-whiteboards',
  templateUrl: './whiteboards.component.html',
  styleUrls: ['./whiteboards.component.css']
})
export class WhiteboardsComponent implements OnInit {
  arrayData: any;
  selectData : any;
  insideData = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.arrayData = timelineData;
    this.insideData = ["1","2","3","4"] 
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
  setNewUser(type){
    console.log(type)
    // if (type == "Outpatients") {
    //   this.arrayData.forEach(function(item){
    //     if(item.patientType == type){
    //     this.insideData.push(item.patientStatus);
    //     }
    //   });
    //  // this.insideData = this.arrayData[0].patientStatus[0].StatusType;
    // }
    // else if (type == "Clinic Whiteboard") {
    //   this.arrayData.forEach(function(item){
    //     this.insideData.push(item);
    //   });
    // }
    if (type == "Outpatients") {
      this.insideData = ["3.1", "3.2", "3.3"];
    }
    else if (type == "Clinic Whiteboard") {
      this.insideData = ["2.1", "2.2", "2.3"];
    }
    else if (type == "3") {
      this.insideData = ["3.1", "3.2", "3.3"];
    }
    else {
      this.insideData = ["3.1", "3.2", "3.3"];
    }
      }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: '../dialog-data.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
