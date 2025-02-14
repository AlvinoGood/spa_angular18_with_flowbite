import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../../../services/flowbite.service';
import { TitlesComponent } from '../titles/titles.component';

const DECLATAIONS = [TitlesComponent];

@Component({
  selector: 'app-about',
  imports: [...DECLATAIONS],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{

}