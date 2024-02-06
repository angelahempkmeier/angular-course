import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Angela Hempkmeier';
  public testWithoutType = 'teste';
  public age: number = 28;
  public condition = this.age > 1 ? 'Maior que um' : 'Menor que um';
  public isDisabled = true;
  public srcValue = 'https://img.freepik.com/fotos-gratis/ceu-azul-com-nuvens_1232-936.jpg';
  public isTextDecoration = this.age >= 28 ? 'underline' : 'none'
  
  constructor(){
    setTimeout(() => {
      this.name = 'Angie';
    }, 1000);
  }

  public sum(name:string, age:number){
    return name + age;
  }

  public newSum(){
    return this.age++;
  }

  public newSub(){
    return this.age--;
  }

  public onKeyDown(event: Event){
    return console.log(event);
  }

  public onMouseEvent(event: MouseEvent){
    return console.log(event);
  }
}
