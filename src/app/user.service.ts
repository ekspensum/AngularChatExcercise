import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patterns } from './patterns';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  patterns: Patterns;

  constructor(private http: HttpClient) { }

  getLoggedEmployees(): Observable<any> {
    const url = this.patterns.baseUrl + '/getLoggedEmployees';
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: token
    });
    return this.http.get(url, { headers: headers, observe: 'response' });
  }
}
