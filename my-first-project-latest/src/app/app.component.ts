import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, AsyncPipe, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
  template: `
    <h1>Curso de Angular</h1>
    <app-template-variables />
    <app-template-binding />
    <!--<app-new-component />-->
    <app-template-control-flow/>
  `
})
export class AppComponent {
}

