import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Team } from './pages/team/team';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Team, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'RenderRetail';
}
