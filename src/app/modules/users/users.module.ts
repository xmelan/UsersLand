import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [CreateUserComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    ToastModule,
  ],
})
export class UsersModule {}
