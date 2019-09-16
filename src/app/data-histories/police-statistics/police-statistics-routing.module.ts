import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnlawfulActsTrendComponent} from './unlawful-acts-trend/unlawful-acts-trend.component';

const routes: Routes = [
    {
        path: 'unlawful-acts-trend',
        component: UnlawfulActsTrendComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class PoliceStatisticsRoutingModule {
}
