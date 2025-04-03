import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { hasEmailError, isRequired } from '../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, GoogleButtonComponent],
  templateUrl: './sign-up.component.html',
})
export default class SignUpComponent {
  hasEmailRequired() {
    return hasEmailError(this.form);
  }
  private _authService = inject(AuthService);
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);
  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      const { email, password } = this.form.value;

      if (!email || !password) return;

      console.log({ email, password });
      await this._authService.signUp({ email, password });
      toast.success('Usuario creado correctamente');
      this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Ocurrió un error');
    }
  }

  async submitWhitGoogle() {
    try {
      await this._authService.signInWhitGoogle();
      toast.success('Bienvenido de nuevo');
      this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Ocurrió un error');
    }
  }
}
