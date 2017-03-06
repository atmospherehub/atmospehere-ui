import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './trends.routing';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';
import { TrendsComponent } from './trends.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    TrendsComponent
  ],
  providers: [
  ]
})
export class TrendsModule {}
