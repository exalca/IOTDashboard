import { endpoint } from './../app.component';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class VisualisationService {
  baseUrl = endpoint;
  constructor(private http: HttpClient) {}

  getVisualisationData(): any {
    return this.http.get(`${this.baseUrl}Dashboard/GetVisualisationData`);
  }
}
