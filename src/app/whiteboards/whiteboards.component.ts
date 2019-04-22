import { Component, OnInit ,Inject} from '@angular/core';
import { timelineData } from '../../assets/data';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { dataBinding } from '@syncfusion/ej2-schedule';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

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
  submitted = false;
  username = new FormControl('')
  selectType = new FormControl('')
  selectTypeData = new FormControl('')
  loginForm: FormGroup = this.formBuilder.group({
    username: this.username,
  });
  patientType: FormGroup = this.formBuilder.group({
    selectType: this.selectType,
    selectTypeData: this.selectTypeData
  });

  constructor(public dialog: MatDialog, 
    private formBuilder: FormBuilder) {}
  //   registerForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],

     
  // });
  ngOnInit() {

    this.arrayData = timelineData;
    this.insideData = ["1","2","3","4"] 
  }
  login() {
    console.log(this.loginForm.value);
    const newField = { patientType: this.loginForm.value.username};
    this.arrayData.push(newField)
      // this.arrayData.map(v => {
      //   if(v['code'] ===this.arrayData.getNodeDetails.parentID){
      //     v['countries'].map(c =>{
      //       if(c.code === this.arrayData.getNodeDetails.id){
      //         v['countries'].push(newField)
      //       } 
      //     })
      //   }
      // })
    
  }
  submittype(){
    this.arrayData.map(v => {
      if(v.patientType === this.patientType.value.selectType){
v.patientStatus.map(v1 =>{
  if(v1.StatusType === this.patientType.value.selectTypeData){
v1.statusCount ++;
  }
})
      }
    })
    const newField1 =[{ patientType: this.loginForm.value.username,
      
      patientStatus:this.patientType.value
    }];
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

