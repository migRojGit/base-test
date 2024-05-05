import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { TableModule } from 'primeng/table';
import { CharactersComponent } from "./components-home/characters/characters.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, provideHttpClient, withFetch } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { PrimeIcons } from "primeng/api";
import { AppComponent } from "../app.component";
import { RouterModule, RouterOutlet, provideRouter } from "@angular/router";
import { routes } from "../app.routes";


@NgModule({
    declarations: [
        
        
    ],
    imports:[
        TableModule,
        HttpClientModule,
        InputTextModule,
        ButtonModule,
        HomeComponent,
        CharactersComponent,
        RouterModule
        
    ],
    exports:[

    ],
    providers:[
        provideRouter(routes), provideHttpClient(withFetch())
    ],

})

export class IndexHomeComponent{};
