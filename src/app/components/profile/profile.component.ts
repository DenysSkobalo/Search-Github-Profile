import {Component, Input} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {GithubService} from "../../services/github.service";
import {IDataGithub} from "../../data";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor( public modalService: ModalService,
               public githubService: GithubService ) { }

  @Input() response: IDataGithub

}
