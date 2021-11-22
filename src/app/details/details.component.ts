import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  areDetailsShown: boolean;
  clicksLog = [];
  lastClicked;
  time;

  constructor() {
    this.areDetailsShown = false;
    this.lastClicked = 0;
  }

  ngOnInit(): void {
  }

  onDetailsClick() {
    // Toggle state
    if (this.areDetailsShown) {
      this.areDetailsShown = false;
    }
    else {
      this.areDetailsShown = true;
    }

    //  Generate time stamp
    this.time = new Date().toLocaleTimeString()

    // Log click
    this.clicksLog.push(this.lastClicked)
    this.lastClicked++;
  }
}
