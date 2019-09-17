import {Component, OnInit} from '@angular/core';
import {UnlawfulActsService} from '../../../services/unlawful-acts.service';

@Component({
    selector: 'app-unlawful-acts-type-composition',
    templateUrl: './unlawful-acts-type-composition.component.html',
    styleUrls: ['./unlawful-acts-type-composition.component.scss']
})
export class UnlawfulActsTypeCompositionComponent implements OnInit {

    // ------------------------------
    // PROPERTIES
    // ------------------------------
    chart = {
        data: null,
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
        this.unlawfulActsService.getPercentageData().subscribe(
            value => {
                this.chart.data = value;
            }
        );
    }

} // COMPONENT ENd
