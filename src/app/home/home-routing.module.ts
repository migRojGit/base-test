import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "../app.routes";
import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CharactersComponent } from "./components-home/characters/characters.component";


@NgModule({
    imports:[
        RouterModule.forChild(routes),
        CharacterData,
        CharactersComponent
        
    ],
    exports:[
        RouterModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        ButtonModule
    ],

})
export class HomeRoutingModule{}