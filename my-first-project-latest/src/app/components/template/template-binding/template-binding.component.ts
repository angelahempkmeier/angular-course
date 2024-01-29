import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Angela Hempkmeier';
  public testWithoutType = 'teste';
  public age: number = 28;

  public sum(name:string, age:number){
    return name + age;
  }
}
