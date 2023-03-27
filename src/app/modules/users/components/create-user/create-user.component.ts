import { UserService } from './../../../../shared/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [MessageService]
})
export class CreateUserComponent {
  public userForm!: FormGroup;
  private userId!: any;
  private user!: any;
  public isUpdateForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.setForm();
    if (this.router.url.includes('update')) {
      this.isUpdateForm = true;
      this.activatedRoute.params.subscribe(
        ({ id }) => ((this.userId = id), this.getById(id))
      );
    }
  }

  private setForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  private getById(id: number) {
    this.userService
      .getById(id)
      .pipe(
        tap(({ data }: any) => {
          this.user = data;
          this.patchValues(data);
        })).subscribe();
  }

  public saveOrUpdate() {
    if (this.isUpdateForm) {
      this.updateUser(this.userId);
    } else {
      this.createUser();
    }
  }

  private patchValues(user: any) {
    this.userForm.patchValue({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    });
  }

  public createUser() {
    if (this.userForm.valid) {
      this.userService
        .createUser(this.userForm.value)
        .pipe(
          tap((value) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User created succesfully' });
            this.router.navigate(['/users/list']);
          }),
          catchError(async (err) => console.log(err))
        )
        .subscribe();
    }
  }

  public updateUser(id: number) {
    if (this.userForm.valid) {
      this.userService
        .updateUser(id, this.userForm.value)
        .pipe(
          tap((value) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User updated succesfully' });
            this.router.navigate(['/users/list']);
          }),
          catchError(async (err) => console.log(err))
        )
        .subscribe();
    }
  }
}
