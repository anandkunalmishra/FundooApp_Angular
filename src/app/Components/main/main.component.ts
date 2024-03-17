import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  constructor() {}

  showElseBlock: boolean = false;

  toggleBlock(){
    this.showElseBlock = !this.showElseBlock;
  }

}

