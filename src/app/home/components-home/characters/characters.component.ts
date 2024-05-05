import { Result, Origin, Root } from './../../../../assets/models/characters';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fetchDataSerie } from '../service/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Location } from './../../../../assets/models/characters';
import { TableModule } from 'primeng/table';
import { SelectItem } from 'primeng/api';
//import {BrowserAnimationModule } from 'primeng'


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  standalone: true,
  imports:[    FormsModule,    CommonModule, HttpClientModule, TableModule, 
  ],
})
export class CharactersComponent  implements OnInit{
 public characters: Root[] = [];
 public char : Result[] = [];
 public characterId: number = 0;
 statusOptions: SelectItem[];
 selectedStatus: string = '';
 public filteredChar: Result[] = [];
 speciesOptions: SelectItem[];
 selectedSpecies: string = '';
  filterTable: string = '';

 
 

  constructor( private fetchData: fetchDataSerie ){
    this.characterId = 0;
    this.statusOptions = [
      { label: 'All Status', value: null },
      { label: 'Alive', value: 'Alive' },
      { label: 'Dead', value: 'Dead' },
      { label: 'Unknown', value: 'unknown' }
    ];
  
    this.speciesOptions = [
      { label: 'All Species', value: null },
      { label: 'Human', value: 'Human' },
      { label: 'Alien', value: 'Alien' },
    ];
    

  }

  getAll(){
    this.fetchData.getAll().subscribe((result: Root) => {
      this.char = result.results;
      this.filteredChar = this.char;

    },
    error => {
      console.log(error);
    })
  }
  filterTableData(event: any) {
    const statusFilter = this.selectedStatus ? this.selectedStatus.toLowerCase() : '';
    const speciesFilter = this.selectedSpecies ? this.selectedSpecies.toLowerCase() : '';

    if (statusFilter === null && speciesFilter === '') {
        this.filteredChar = this.char;
        return;
    }
  
    this.filteredChar = this.char.filter(chara => {
        const statusMatch = !statusFilter || chara.status.toLowerCase().includes(statusFilter);
        const speciesMatch = !speciesFilter || chara.species.toLowerCase().includes(speciesFilter);
        return statusMatch && speciesMatch;
    });
}
getCharacter(characterId: number){
  if(characterId === 0){
    return;
  }
  this.fetchData.getCharacter(characterId).subscribe(
    (result: Result) => {
      this.char = [];
      this.char.push(result) 
      this.filteredChar = this.char
    },
    error => {
      console.log(error);
    }
  );
}
clearSearch() {
  this.getAll(); 
  this.characterId = 0; 
}

  ngOnInit(){
    this.getAll()
    this.selectedStatus = '';
    this.selectedSpecies = '';

  }
}
