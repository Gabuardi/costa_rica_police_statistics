import {Component, OnDestroy, OnInit} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {typeCrimePerMonth} from './data/typeCrimePerMonth';
import {totalCrimesPerAge} from './data/totalCrimesPerAge';
import {CrimesService} from '../../../../services/crimes.service';

@Component({
    selector: 'academy-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    animations: fuseAnimations
})
export class AcademyCoursesComponent {

    percentageData = null;

    constructor(private crimesService: CrimesService){


        this.crimesService.getData().subscribe(
            value => {
                console.log(value);
                this.crimeTypePerMonth.data = value;
                this.parseToLineChart(value);
            }
        );

        this.crimesService.getPorcentualData().subscribe(
            value => {
                this.percentageData = value;
            }
        )

    }


    private parseToLineChart(data): void {

        const lineChart = {name: 'Crimes', series: []};

        for (const month of data) {

            let total = 0;

            for (const crimeType of month.series) {

                total += crimeType['value'];

            }

            lineChart.series.push({name: month['name'], value: total});

        }

        this.totalCrimePerAge.data = [lineChart];
        console.log(lineChart);

    }

    // ------------------------------
    // TOTAL CRIMES PER AGE
    // ------------------------------
    totalCrimePerAge = {
        data: totalCrimesPerAge,
        autoscale: false,
        animations: true,
        xAxis: {
            show: true,
            showLabel: true,
            label: 'Tipo de Delito'
        }
    };
    // ------------------------------

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
            show: true
        },
        yAxis: {
            show: true,
            showLabel: true,
            label: 'Tipo de Delito'
        }
    };
    // ------------------------------


} // COMPONENT END
