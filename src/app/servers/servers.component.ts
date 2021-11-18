import { Component, OnInit } from '@angular/core';
import {isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
