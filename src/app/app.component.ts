import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RutasComponent } from './rutas/rutas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RutasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routesapp';
}
