import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//TODO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'virtual-dom-angular';
}
