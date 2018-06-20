import { Component, OnInit } from '@angular/core';
import {navitems} from './navitems';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nav_header = 'Vcare Polyclinics and Diagnoistic Center'
  items = navitems

}
