import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserdComponent implements OnInit {

  userForm!: FormGroup;
  submitted = false;
  users?: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // name & email validator
    const nameValidator = Validators.pattern('[A-Za-z]+');
    const emailValidator = Validators.pattern('[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.com');

    // form group
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, nameValidator]),
      lastname: new FormControl('', [Validators.required, nameValidator]),
      email: new FormControl('', [Validators.required, emailValidator])
    });
    
    this.retrieveUsers();
  }

  addUser(): void {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    
    const id = this.userForm.get('id')?.value;
    const firstName = this.userForm.get('firstname')?.value;
    const lastName = this.userForm.get('lastname')?.value;
    const email = this.userForm.get('email')?.value;
    
    const user = new User(id, firstName, lastName, email);

    this.userService.create(user)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.retrieveUsers();
        },
        error: (e) => console.error(e)
      });
      
  }
  resetForm(): void {
    this.submitted = false;
    this.userForm.reset();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUsers();
  }

  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
