import {Component} from '@angular/core';

import {GithubService} from "./services/github.service";
import {IDataGithub} from "./data";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'Search Github Profile'

   userName: string = '';
   response: IDataGithub;

  constructor( private githubService: GithubService,
               public modalService: ModalService ) { }

  public search(): void {
    this.githubService.getAll(this.userName).subscribe((res) => {
      this.response = res;
      // console.log(this.response);
    })
  }
}
