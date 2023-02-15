import { UserService } from './../../../../shared/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  products!: any[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getUser()
      .subscribe(({ data }: any) =>{ this.products = data, console.log(data)});
  }
}
