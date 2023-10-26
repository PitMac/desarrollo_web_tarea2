import { Component } from '@angular/core';

@Component({
  selector: 'app-codos',
  templateUrl: './codos.component.html',
  styleUrls: ['./codos.component.css'],
})
export class CodosComponent {
  mostrarAlerta(): void {
    alert('Guardado');
  }
}
