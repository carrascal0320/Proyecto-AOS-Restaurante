import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxSonnerToaster} from 'ngx-sonner';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-aos';
}
