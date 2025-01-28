import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { FirstViewComponent } from "./sections/first-view/first-view.component";
import { ServicesComponent } from "./sections/services/services.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FirstViewComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gdur';
}
