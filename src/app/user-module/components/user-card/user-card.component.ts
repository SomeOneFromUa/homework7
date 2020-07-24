import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../models/user.interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
user: IUser;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(history);
    this.activatedRoute.params.subscribe(value => this.user = history.state);
  }

}
