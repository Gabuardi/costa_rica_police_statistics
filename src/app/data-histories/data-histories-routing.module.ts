import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'police-statistics',
        loadChildren: './police-statistics/police-statistics.module#PoliceStatisticsModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class DataHistoriesRoutingModule {
}
