import { Component, output } from '@angular/core';

@Component({
  selector: 'app-github-button',
  standalone: true,
  imports: [],
  templateUrl: './github-button.component.html',
})
export class GitHubButtonComponent {
  onClick = output<void>();
}
