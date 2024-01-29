import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
    <h1>Curso de Angular</h1>
    <div class="theme-dark">
      <app-new-component />
    </div>
  `
})
export class AppComponent {
}

