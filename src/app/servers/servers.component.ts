import { Component, OnInit } from '@angular/core';
// import {isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No servers created!"
  serverName = "Test server"

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreationStatus = "Server " + this.serverName + " was created!"
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
