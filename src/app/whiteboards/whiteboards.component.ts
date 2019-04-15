import { Component, OnInit } from '@angular/core';
import { timelineData } from '../../assets/data';
@Component({
  selector: 'app-whiteboards',
  templateUrl: './whiteboards.component.html',
  styleUrls: ['./whiteboards.component.css']
})
export class WhiteboardsComponent implements OnInit {
  arrayData: any;
  constructor() { 
    debugger
    
  }
  ngOnInit() {
    this.arrayData = timelineData;
    console.log(this.arrayData);
  }

}
