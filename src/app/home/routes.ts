
import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";



export const routes: Routes = [
    {
        path: '/Home',
        component: HomeComponent,
        children: [
            {
                path: 'character',
                loadComponent: () => import('./components-home/characters/characters.component').then( c => c.CharactersComponent),
            },{
                path: 'location',
                loadComponent: () => import('./components-home/locations/locations.component').then(c => c.LocationsComponent),
            }
        ]

    }
]