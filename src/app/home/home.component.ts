import { CharactersComponent } from './components-home/characters/characters.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './home.component.html',
  
  
})

export class HomeComponent {}

