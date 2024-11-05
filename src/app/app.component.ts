import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControlComponent } from "./EXEMPLOS/form-control/form-control.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-forms-angular';
}
