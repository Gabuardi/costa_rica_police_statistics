import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PoliceStatisticsRoutingModule} from './police-statistics-routing.module';
import {UnlawfulActsTrendComponent} from './unlawful-acts-trend/unlawful-acts-trend.component';

@NgModule({
    declarations: [UnlawfulActsTrendComponent],
    imports: [
        PoliceStatisticsRoutingModule
    ]
})

export class PoliceStatisticsModule {
}
