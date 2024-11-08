import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly _httpclient: HttpClient
  ) { }

  getUsers(): Observable<IUser[]> {
    return this._httpclient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
