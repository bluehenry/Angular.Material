import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute,
    private service: UserService) {
      // console.log(`this.route.snapshot.params['id']: ${this.route.snapshot.params['id']}`);
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(`params[id] is ${params['id']}`);
      // Have to convert string to number
      let id = Number(params['id']);
      if (!id) { id = 1; }

      this.user = null;

      this.service.users.subscribe(users => {
        if (users.length === 0) {
          return;
        }

        setTimeout(() => {
          this.user = this.service.userById(id);
        }, 500);
      });

    });
  }

}
