import { tap } from 'rxjs';
import { UserService } from './../../../../shared/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users!: any[];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.get();
  }

  public get() {
    this.service.getUser().subscribe(({ data }: any) => {
      (this.users = data), console.log(data);
    });
  }

  public delete(id: number) {
    this.service
      .deleteUser(id)
      .pipe(tap((response) => this.get()))
      .subscribe();
  }
}
