import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 necesario para ngModel
import { CommonModule } from '@angular/common'; // 👈 Importa esto

export interface HorarioRuta {
  nombre: string;
  id: number;
  horarios: {
    dias: string;
    ida: string[];
    regreso: string[];
  }[];
}

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {

  rutas: HorarioRuta[] = [
    {
      id: 0,
      nombre: 'Sta Elena - Sta Cecilia - La Cruz',
      horarios: [
        { dias: 'Lunes a Viernes', ida: ['6:00 AM', '12:00 PM'], regreso: ['7:00 AM', '1:00 PM'] },
        { dias: 'Sábado', ida: ['7:30 AM'], regreso: ['8:30 AM'] },
        { dias: 'Domingo', ida: ['8:00 AM'], regreso: ['9:00 AM'] },
      ],
    },
    {
      id: 1,
      nombre: 'La Virgen - Sta Cecilia - La Cruz',
      horarios: [
        { dias: 'Lunes a Viernes', ida: ['5:30 AM', '11:30 AM'], regreso: ['6:30 AM', '12:30 PM'] },
        { dias: 'Sábado', ida: ['7:00 AM'], regreso: ['8:00 AM'] },
        { dias: 'Domingo', ida: ['8:30 AM'], regreso: ['9:30 AM'] },
      ],
    },
    // ... más rutas
  ];

  public rutaSeleccionadaId = 0;

  get rutaSeleccionada() {
    return this.rutas.find(r => r.id === this.rutaSeleccionadaId);
  }

}
