import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleNavbar = new EventEmitter<void>();

  onToggleNavbar(){
    this.toggleNavbar.emit();
  }
}
