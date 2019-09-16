import {Component, OnInit} from '@angular/core';
import {UnlawfulActsService} from '../../../services/unlawful-acts.service';
import {typeCrimePerMonth} from '../../../main/apps/academy/courses/data/typeCrimePerMonth';

@Component({
    selector: 'app-unlawful-acts-type-composition',
    templateUrl: './unlawful-acts-type-composition.component.html',
    styleUrls: ['./unlawful-acts-type-composition.component.scss']
})
export class UnlawfulActsTypeCompositionComponent implements OnInit {

    // ------------------------------
    // PROPERTIES
    // ------------------------------
    crimeTypePerMonth = {
        data: typeCrimePerMonth,
        animations: true,
        legend: {
            show: true,
        },
        xAxis: {
            show: true
        },
        yAxis: {
            show: true,
            showLabel: true,
            label: 'Tipo de Delito'
        }
    };

    // ------------------------------

    constructor(private unlawfulActsService: UnlawfulActsService) {
    }

    ngOnInit() {
        this.unlawfulActsService.getPorcentualData().subscribe(
            value => {
                this.crimeTypePerMonth.data = value;
            }
        );
    }

} // COMPONENT ENd
