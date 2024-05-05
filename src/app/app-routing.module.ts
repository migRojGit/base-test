import { RouterModule, Routes } from "@angular/router";
import { CharactersComponent } from "./home/components-home/characters/characters.component";
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { LocationsComponent } from "./home/components-home/locations/locations.component";


const routes: Routes = [
    {path: 'Home', component: HomeComponent, children:[
        {path: 'character', component: CharactersComponent},
        {path: 'location', component: LocationsComponent}
    ]},
    {path: '', redirectTo : '/Home', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [CharactersComponent];