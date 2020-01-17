import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, ResumeRoutingModule],
  declarations: [ResumeComponent]
})
export class ResumeModule {}
