import {NgModule} from '@angular/core';

import {DataHistoriesRoutingModule} from './data-histories-routing.module';
import {PoliceStatisticsModule} from './police-statistics/police-statistics.module';

@NgModule({
    declarations: [],
    imports: [
        PoliceStatisticsModule,
        DataHistoriesRoutingModule
    ]
})

export class DataHistoriesModule {
}
