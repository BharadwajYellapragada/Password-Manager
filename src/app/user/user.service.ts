import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginService(data:any) {
    // const username = data['username']
    // const password = data['password']
    return this.http.post('http://127.0.0.1:5000/somedata?name=bharadwaj',data)
  }
}
