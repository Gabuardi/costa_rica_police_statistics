import {Component, OnInit} from '@angular/core';
import {UnlawfulActsService} from '../../../services/unlawful-acts.service';

@Component({
    selector: 'app-unlawful-acts-trend',
    templateUrl: './unlawful-acts-trend.component.html',
    styleUrls: ['./unlawful-acts-trend.component.scss']
})
export class UnlawfulActsTrendComponent implements OnInit {

    constructor(private unlawfulActsService: UnlawfulActsService) {
    }

    ngOnInit() {
    }

} // COMPONENT END
