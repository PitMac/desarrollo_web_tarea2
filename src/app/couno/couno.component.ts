import { Component } from '@angular/core';

@Component({
  selector: 'app-couno',
  templateUrl: './couno.component.html',
  styleUrls: ['./couno.component.css'],
})
export class CounoComponent {
  mostrarAlerta(): void {
    alert('Guardado');
  }
}
