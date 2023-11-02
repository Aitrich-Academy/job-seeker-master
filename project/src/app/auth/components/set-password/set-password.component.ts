import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  // user = {
  //   password: '',
  //   confirmPassword: '',
  // };

  // submitForm(form: any) {
  //   if (form.valid) {
  //     // Form is valid, you can perform further actions here
  //     console.log('Form submitted:', this.user);
  //   }
  // }

  user = {
    password: '',
    confirmPassword: '',
  };
  passwordMismatch = false; // Add a flag to track password mismatch

  constructor(private authService: AuthService) {}

  submitForm(form: any) {
    if (form.valid) {
      if (this.user.password !== this.user.confirmPassword) {
        // Passwords do not match
        this.passwordMismatch = true;
      } else {
        // Passwords match, reset the flag
        this.passwordMismatch = false;

        // Form is valid, you can perform further actions here
        console.log('Form submitted:', this.user);

        // Call the setNewPassword method without userId
        this.authService.setNewPassword(this.user.password).subscribe(response => {
          // Handle the response from the API
        });
      }
    }
  }
}
