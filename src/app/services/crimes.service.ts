import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CrimesService {

    URL = 'http://192.168.1.19:8000/delitos';

    constructor(private http: HttpClient) {
    }

    getData(): Observable<any> {
        return this.http.get(this.URL);
    }

    getPorcentualData(): Observable<any> {
        return this.http.get('http://192.168.1.19:8000/delitos/percentage');
    }

}
