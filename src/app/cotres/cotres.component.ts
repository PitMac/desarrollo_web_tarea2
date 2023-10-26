import { Component } from '@angular/core';

@Component({
  selector: 'app-cotres',
  templateUrl: './cotres.component.html',
  styleUrls: ['./cotres.component.css'],
})
export class CotresComponent {
  mostrarAlerta(): void {
    alert('Guardado');
  }
}
