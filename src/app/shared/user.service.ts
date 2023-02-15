import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://reqres.in/api/users?page=2'
  constructor(private http: HttpClient) { }

  public getUser(){
    return this.http.get(`${this.baseUrl}`)
  }
}
