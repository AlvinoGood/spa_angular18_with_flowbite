import { Component } from '@angular/core';
import { SectionHomeComponent } from '../section-home/section-home.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { ContactComponent } from '../contact/contact.component';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';


const DECLARATIONS = [
  SectionHomeComponent, GalleryComponent, EmailFormComponent, ContactComponent, CarrouselComponent, AboutComponent, FeaturesComponent,
]

@Component({
  selector: 'app-home',
  imports: [...DECLARATIONS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
