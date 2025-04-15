import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './if/if.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,IfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-diretivas';
}
