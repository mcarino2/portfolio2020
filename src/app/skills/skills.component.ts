import { Component, OnInit } from '@angular/core';
import Sitedata from '../../assets/Sitedata.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any;
  displayedColumns: string[] = ['title', 'yearsExp', 'yearLastUsed', 'selfRating'];

  constructor() {}

  ngOnInit() {
    this.skills = Sitedata.data.skills;
  }
}
