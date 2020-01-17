import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, SkillsRoutingModule],
  declarations: [SkillsComponent]
})
export class SkillsModule {}
