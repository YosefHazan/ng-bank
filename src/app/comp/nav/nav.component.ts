import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private db:DbService) { }

  ngOnInit() {
  }
  //step 3
  getAccountId():number{
    return this.db.getcurrentAccountId();
  }

}
