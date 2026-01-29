import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp 4ERP-BI3';
  x: boolean = true;
  msg: string = "";
  t=[1,2,3,4,"five"];

  getMyNumber(): number {
    return 100;
  }

  writeMsg(): void {
    this.msg = "Hello World!";
  }
}
