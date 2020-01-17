import { Component, OnInit } from '@angular/core';
import Sitedata from '../../assets/Sitedata.json';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timeline: any;

  constructor() { }

  ngOnInit() {
    this.timeline = Sitedata.data.timeline;
  }

}
