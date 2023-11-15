import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AEMETService {

    constructor(private http: HttpClient) { }

    apiUrl = environment.AEMET_Url;

    getUltimosDatos() {
        return this.http.get(this.apiUrl)
            .pipe(map((response: any) => {
                console.log(response)
                return response;
        }));
    }
}
