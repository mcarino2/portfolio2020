import { Component, OnInit } from '@angular/core';
import Sitedata from '../../assets/Sitedata.json';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: any;
  constructor() { }

  ngOnInit() {
    this.resume = Sitedata.data.resume;
  }

  headerDisplay(site: { startDate: any; company: any; endDate: string; }) {
    let years = site.startDate
    let title = site.company;
    years += (site.endDate && site.endDate !== site.startDate) ? ' - ' + site.endDate : '';
    return `${title}<br><span class="year-range">(${years})</span>`;
  }

}
