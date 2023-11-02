import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsermodelModule } from '../models/usermodel/usermodel.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "http://localhost:3000/enquiry"

  constructor(private http: HttpClient) { }

  postRegistration(registerObj: UsermodelModule) {
    return this.http.post<UsermodelModule>(`${this.baseUrl}`, registerObj)
  }

  getRegisteredUser() {
    return this.http.get<UsermodelModule[]>(`${this.baseUrl}`)
  }

  updateRegisterUser(registerObj: UsermodelModule, id: number) {
    return this.http.put<UsermodelModule>(`${this.baseUrl}/${id}`, registerObj)
  }

  deleteRegistered(id: number) {
    return this.http.delete<UsermodelModule>(`${this.baseUrl}/${id}`)
  }

  getRegisteredUserId(id: number) {
    return this.http.get<UsermodelModule>(`${this.baseUrl}/${id}`)
  }
}
