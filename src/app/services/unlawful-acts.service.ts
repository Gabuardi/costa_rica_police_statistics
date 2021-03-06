import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UnlawfulActsService {

    URL = `${environment.api}/${environment.apiVersion}/crimes/monthly`;

    constructor(private http: HttpClient) {
    }

    getAbsoluteData(): Observable<any> {
        return this.http.get(`${this.URL}/absolute`);
    }

    getPercentageData(): Observable<any> {
        return this.http.get(`${this.URL}/percentage`);
    }

}
