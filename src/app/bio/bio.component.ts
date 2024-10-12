import { Component, OnInit } from '@angular/core';
import Sitedata from '../../assets/Sitedata.json';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  bio: string;

  constructor() {}

  ngOnInit() {
    this.bio = Sitedata.data.bio;
  }
}
