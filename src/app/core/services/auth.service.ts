import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'https://localhost:5001/connect/token';
  constructor(private http: HttpClient, private jwt: JwtHelperService) {

  }

  login(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = new URLSearchParams();
    body.set('grant_type', "password");
    body.set('client_id', "client");
    body.set('client_secret', "secret");
    body.set('username', username);
    body.set('password', password);

    return this.http.post<any>(this.url, body.toString(), {
      headers: headers
    }).pipe(
      catchError(this.handleError<any>('login')),
      map(jwt => {
        if (jwt && jwt.access_token) {
          localStorage.setItem('token', jwt.access_token)
        }
      })
    );
  }

  isAuthenticated(): boolean {
    const token = this.getToken()
    return !this.jwt.isTokenExpired(token);
  }

  getToken(): string {
    var token = this.jwt.tokenGetter()
    return token
  }

  decodeToken(): any {
    const token = this.getToken()
    return this.jwt.decodeToken(token)
  }

  logout() {
    localStorage.removeItem('token')
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }






}
