import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule], // ✅ Esto habilita formGroup y formControlName
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  message = '';
  error = '';

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.message = 'Contraseña actualizada correctamente.';
      this.error = '';
    } else {
      this.error = 'El formulario es inválido.';
      this.message = '';
    }
  }
}
