import { Component,Output, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { EventData } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title:"HELLO FROM THE APPCOMPONENT",
    isIcon : true
  };
  testChanged(data){
    console.log(data);
  }
}
