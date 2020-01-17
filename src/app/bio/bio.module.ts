import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { BioRoutingModule } from './bio-routing.module';
import { BioComponent } from './bio.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, BioRoutingModule],
  declarations: [BioComponent]
})
export class BioModule {}
