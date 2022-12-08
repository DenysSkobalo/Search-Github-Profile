import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IDataGithub} from "../data";

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private http: HttpClient) { }

  response: IDataGithub;

  public getAll(userName: string): Observable<IDataGithub> {
    // console.log(userName)
    return this.http.get<IDataGithub>('https://api.github.com/users/' + userName);
  }
}
