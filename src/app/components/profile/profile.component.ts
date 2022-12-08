import {Component, Output} from '@angular/core';
import {IDataGithub} from "../../data";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @Output() response: IDataGithub

  constructor( public modalService: ModalService ) { }

}
