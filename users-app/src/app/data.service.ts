import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(UserId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+UserId);
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getUserPosts(UserId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+UserId)
  }
}
