import {NgModule} from '@angular/core';
import {DataHistoriesRoutingModule} from './data-histories-routing.module';
import {PoliceStatisticsModule} from './police-statistics/police-statistics.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FuseSharedModule} from '../../@fuse/shared.module';

@NgModule({
    declarations: [],
    imports: [
        // APP STRUCTURE
        PoliceStatisticsModule,
        DataHistoriesRoutingModule
    ]
})

export class DataHistoriesModule {
} // MODULE ENDS
