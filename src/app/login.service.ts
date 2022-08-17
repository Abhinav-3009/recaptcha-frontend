import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string = 'http://localhost:21436/api/Recaptcha/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  login(data: Login): Observable<any> {
    return this.httpClient.post<Login>(this.baseURL + 'login', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  names(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'names', this.httpOptions).pipe(catchError(this.handleError))
  }
  
  

  handleError(err:HttpErrorResponse){
    return throwError(err)
  }
}