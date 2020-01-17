import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, TimelineRoutingModule],
  declarations: [TimelineComponent]
})
export class TimelineModule {}
