import { TableModule } from "primeng/table";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { Button, ButtonModule } from "primeng/button";
import { NgModule } from "@angular/core";
import { routingComponents } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition}from '@angular/animations';
import { PrimeIcons } from "primeng/api";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./home/components-home/characters/characters.component";
import { LocationsComponent } from "./home/components-home/locations/locations.component";


@NgModule({
    declarations:[

    ],
    imports:[
        TableModule,
        HttpClientModule,
        InputTextModule,
        ButtonModule,
        RouterModule.forRoot([
            {path: 'Home', component: HomeComponent, children:[
              {path: 'character', component: CharactersComponent},
              {path: 'location', component: LocationsComponent}
            ]},
            {path: '', redirectTo : '/Home', pathMatch: 'full'}
          ])
        
    ],
    providers: [],
})

export class AppModule { }