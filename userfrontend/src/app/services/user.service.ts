import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient is a service that provides methods to make HTTP requests and handle responses.
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = 'http://localhost:8080/api/crudrest'; // declares a constant variable called baseUrl that holds the base URL of the REST API endpoint that provides CRUD operations.

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
