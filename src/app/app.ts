import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayView } from './components/display-view/display-view';
import { UserInput } from './components/user-input/user-input';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInput, DisplayView ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-app';
}
