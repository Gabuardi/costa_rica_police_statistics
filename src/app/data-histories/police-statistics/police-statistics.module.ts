import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PoliceStatisticsRoutingModule} from './police-statistics-routing.module';
import {UnlawfulActsTrendComponent} from './unlawful-acts-trend/unlawful-acts-trend.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MatIconModule} from '@angular/material';
import { TypeUnlawfulActsQuantityComponent } from './type-unlawful-acts-quantity/type-unlawful-acts-quantity.component';
import { UnlawfulActsTypeCompositionComponent } from './unlawful-acts-type-composition/unlawful-acts-type-composition.component';

@NgModule({
    declarations: [UnlawfulActsTrendComponent, TypeUnlawfulActsQuantityComponent, UnlawfulActsTypeCompositionComponent],
    imports: [
        // APP STRUCTURE
        FuseSharedModule,
        PoliceStatisticsRoutingModule,

        // LIBRARIES
        NgxChartsModule,

        // MATERIAL (<-- DELETE)
        MatIconModule
    ]
})

export class PoliceStatisticsModule {
} // MODULE ENDS
