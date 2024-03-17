import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'] // Corrected property name to styleUrls
})
export class NotesComponent {
  showTools: boolean = false;

  handleHover() {
    this.showTools = !this.showTools;
  }
}
