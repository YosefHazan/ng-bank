import { Component, OnInit, Output, Input, EventEmitter, HostListener } from '@angular/core'; //part b step 3
import { AccountAction } from 'src/app/model/account-action';


@Component({
  selector: 'action-display-item',//part b step 4
  templateUrl: './action-display-item.component.html',
  styleUrls: ['./action-display-item.component.css']
})
export class ActionDisplayItemComponent implements OnInit {
  ngOnInit(){
  }

  // part b step 5 START
  @Input() action:AccountAction
  get a(){return this.action}

  @Output() zeClick:EventEmitter<string> = new EventEmitter<string>()

  clickMeLala(){
    this.zeClick.emit('mooo');
  }

  @HostListener('click', ['$event'])
  handleClick(event:Event){
    this.clickMeLala()
  }
  // part b step 5 END
}
