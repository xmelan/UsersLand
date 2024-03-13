import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  public getUser() {
    return this.http.get(`${this.baseUrl}`);
  }

  public getById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public createUser(user: any) {
    return this.http.post(`${this.baseUrl}`, user);
  }

  public updateUser(id: number, user: any) {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
