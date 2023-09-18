import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { APOD } from './apod';

@Injectable()
export class ApodService {
  url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  
  constructor(private http: HttpClient) {
  }
  
  getAPOD (): Observable <APOD> {
    return this.http.get<APOD>(this.url);
  }

}