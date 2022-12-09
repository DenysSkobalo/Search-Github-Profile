import {Component} from '@angular/core';
import {IDataGithub} from "../../data";
import {GithubService} from "../../services/github.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public title = 'Search Github Profile';

  public userName: string = '';

  public response: IDataGithub;

  constructor(
    private githubService: GithubService,
    public modalService: ModalService
  ) { }

  public search(): void {
    this.githubService.getAll(this.userName).subscribe(res => this.response = res);
  }
}
