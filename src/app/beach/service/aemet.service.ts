import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { InicialResponse } from '../interfaces/AEMET/InicialResponse';
import { BasicResponse } from '../interfaces/AEMET/BasicResponse';
import { Observable, concatMap, of, tap } from 'rxjs';


@Injectable()
export class AEMETService {

    constructor(private http: HttpClient) {}

    private apiUrl = environment.AEMET_Url;
    private url = "observacion/convencional/datos/estacion/C659M/";

    getUrlAcceso():Observable<InicialResponse> {
        return this.http.get<InicialResponse>(`${this.apiUrl}/${this.url}?api_key=${environment.opendata_apike}`)
    }

    getInfoMeteo(url: string):Observable<BasicResponse> {
        return this.http.get<BasicResponse>(url)
    }
}
