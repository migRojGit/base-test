import { Result } from './../../../../assets/models/locations.models';
import { Component, OnInit } from '@angular/core';
import { fetchDataSerie } from '../service/data.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { SelectItem } from 'primeng/api';
import { Root } from '../../../../assets/models/locations.models';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [FormsModule,    CommonModule, HttpClientModule, TableModule, ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',

})
export class LocationsComponent implements OnInit{
  locationId: number;
  public filteredChar: Result[] = [];
  TypeOptions: SelectItem[] = [];
  DimensionOptions: SelectItem[] = [];
  public Location : Result[] = [];
  selectedDimension: string = '';
  selectedPlanet: string = '';
   filterTable: string = '';

  constructor( private fetchData: fetchDataSerie ){
    this.locationId = 0;
  }

  getAllLocations(){
    this.fetchData.getAllLocations().subscribe((result: Root) => {
      this.Location = result.results;
      this.filteredChar = this.Location;
    },
    error => {
      console.log(error);
    })
  }
  filterTableData(event: any) {
    const statusFilter = this.selectedDimension ? this.selectedDimension.toLowerCase() : '';
    const speciesFilter = this.selectedPlanet ? this.selectedPlanet.toLowerCase() : '';
    if (statusFilter === null && speciesFilter === '') {
        this.filteredChar = this.Location;
        return;
    }
  
    this.filteredChar = this.Location.filter(chara => {
      const selectedPlanet = !statusFilter || chara.type.toLowerCase().includes(statusFilter);
      const selectedDimension = !speciesFilter || chara.dimension.toLowerCase().includes(speciesFilter);
      return selectedPlanet && selectedDimension;
    });
  }
  getLocation(locationId: number){
    if(locationId === 0){
      return;
    }
    this.fetchData.getLocation(locationId).subscribe(
      (result: Result) => {
        this.Location = [];
        this.Location.push(result) 

      },
      error => {
        console.log(error);
      }
    );
  }
  clearSearch() {
    this.getAllLocations(); 
    this.locationId = 0; 
  }
  onSort(event: any) {
  }
  ngOnInit(){

    this.getAllLocations();

  }

}
