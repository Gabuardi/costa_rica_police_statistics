import {Component, OnInit} from '@angular/core';
import {UnlawfulActsService} from '../../../services/unlawful-acts.service';

@Component({
    selector: 'app-type-unlawful-acts-quantity',
    templateUrl: './type-unlawful-acts-quantity.component.html',
    styleUrls: ['./type-unlawful-acts-quantity.component.scss']
})
export class TypeUnlawfulActsQuantityComponent implements OnInit {

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
        this.unlawfulActsService.getAbsoluteData().subscribe(
            value => {
                console.log(value);
                this.chart.data = value;
            }
        );
    }

} // COMPONENT END
