import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero/hero';
import { Navbar } from './components/navbar/navbar/navbar';
import { About } from './components/about/about/about';
import { Skills } from './components/technical-skills/skills/skills';
import { Projects } from './components/projects/projects/projects';
import { Experience } from './components/experience/experience/experience';
import { Contact } from './components/contact/contact/contact';
import { Footer } from './components/footer/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Navbar,About,Skills,Projects,Experience,Contact,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
