import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'usersLand';

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'UserXLand',
        icon: 'pi pi-fw pi-home',
        url: '/'
      },
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        url:'/users/create',
      },
      {
        label: 'List',
        icon: 'pi pi-fw pi-pencil',
        url:'users/list'

      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //   ],
      // },
    ];
  }
}
