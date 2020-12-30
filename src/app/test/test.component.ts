import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isIcon: boolean;
  @Input() title="HELLO FROM THE TESTCOMPONENT";
  @Output() change = new EventEmitter();
  constructor(){
    this.change.emit({title: 'Hello from the TestComponent'});
  }
  ngOnInit(): void {
  }
  onClick()
  {
    this.isIcon = !this.isIcon;
  }

}

export interface EventData{
  title : string
}
