import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contract-dialog',
  templateUrl: './new-contract-dialog.component.html',
  styleUrls: ['./new-contract-dialog.component.scss']
})
export class NewContractDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];
  user: User;

  constructor(
    private dialogRef: MatDialogRef<NewContractDialogComponent>,
    private userService: UserService ) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(this.user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
