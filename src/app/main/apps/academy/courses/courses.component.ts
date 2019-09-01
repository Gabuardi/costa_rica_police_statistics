import {Component, OnDestroy, OnInit} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {typeCrimePerMonth} from './data/typeCrimePerMonth';

@Component({
    selector: 'academy-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    animations: fuseAnimations
})
export class AcademyCoursesComponent {

    total

    // ------------------------------
    // CRIME TYPES PER MONTH OF AGE
    // ------------------------------
    crimeTypePerMonth = {
        data: typeCrimePerMonth,
        animations: true,
        legend: {
            show: true,
        },
        xAxis: {
            show: true,
            showLabel: true,
            label: 'Tipo de Delito'
        }
    };
    // ------------------------------


} // COMPONENT END
