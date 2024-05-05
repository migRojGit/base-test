import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
        
        
        children: [
            {
                path: 'character',
                loadComponent: () => import('./home/components-home/characters/characters.component').then( c => c.CharactersComponent),
            },
            {
                path: 'location',
                loadComponent: () => import('./home/components-home/locations/locations.component').then(c => c.LocationsComponent),
            }
        ],
    },{
        path: '', redirectTo: '/home', pathMatch: 'full'
    }

];

