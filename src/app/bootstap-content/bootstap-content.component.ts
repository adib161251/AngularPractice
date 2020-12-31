import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstap-content',
  templateUrl: './bootstap-content.component.html',
  styleUrls: ['./bootstap-content.component.css']
})
export class BootstapContentComponent {
  value=[];
  courses =[];
  viewModel='somethingelse';
  count: number;
  isDisable: boolean;
  constructor(){
    this.isDisable = false;
    if(this.courses.length ===0 ) this.isDisable = true;
  }
  onLoad()
  {
    this.courses =[1,2,3,4];
    this.count= this.courses.length
    //alert(this.count);
    this.isDisable=false;

  }
  onAdd()
  {
    this.count= this.courses.length;
    this.count++;
    this.courses.push(this.count);
  }
  onRemove(course:any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
    if(this.courses.length ===0 ) this.isDisable = true;

  }
}
