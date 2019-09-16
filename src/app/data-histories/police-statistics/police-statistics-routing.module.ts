import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnlawfulActsTrendComponent} from './unlawful-acts-trend/unlawful-acts-trend.component';
import {TypeUnlawfulActsQuantityComponent} from './type-unlawful-acts-quantity/type-unlawful-acts-quantity.component';
import {UnlawfulActsTypeCompositionComponent} from './unlawful-acts-type-composition/unlawful-acts-type-composition.component';

const routes: Routes = [
    {
        path: 'unlawful-acts-trend',
        component: UnlawfulActsTrendComponent
    },
    {
        path: 'type-unlawful-acts-quantity',
        component: TypeUnlawfulActsQuantityComponent
    },
    {
        path: 'unlawful-acts-type-composition',
        component: UnlawfulActsTypeCompositionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class PoliceStatisticsRoutingModule {
}
