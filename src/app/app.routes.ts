import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LocationsComponent } from "./home/components/locations/locations.component";
import { CharactersComponent } from "./home/components/characters/characters.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'characters', component: CharactersComponent},
    {path: 'locations', component: LocationsComponent}
      ];

@NgModule ({
    imports: [RouterModule.forRoot(routes), NavbarComponent, FooterComponent],
    exports:[RouterModule]
    })

export class AppRouteModule { }
