import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class GithubService {

  private count : number = 0;
  
  constructor(public http: Http) {
    console.log('Hello Github Provider');
  }

  increment() : number {
    return ++this.count;
  }

  getUsers(): Observable<[{}]>{
    return this.http.get('https://api.github.com/users')
      .map((res: Response) => res.json() as [{}]);
  }
}
