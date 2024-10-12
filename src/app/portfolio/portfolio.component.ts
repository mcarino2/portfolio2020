import { Component, OnInit } from '@angular/core';
import Sitedata from '../../assets/Sitedata.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  activeSites: any;
  inactiveSites: any;
  sites = Sitedata.data.sites;

  constructor() {}

  ngOnInit() {
    this.activeSites = this.processSites('Online');
    this.inactiveSites = this.processSites('Offline');
  }

  processSites(status: string) {
    let sites = [...this.sites];
    sites = sites.filter((site: { status: string }) => {
      return site.status === status;
    });
    sites = sites.reverse();

    return sites;
  }

  headerDisplay(site: { startYear: any; title: any; endYear: string }) {
    let years = site.startYear;
    let title = site.title;
    years += site.endYear && site.endYear !== site.startYear ? ' - ' + site.endYear : '';
    return `${title}<br><span class="year-range">(${years})</span>`;
  }
}
