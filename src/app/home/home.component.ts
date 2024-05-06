import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core/service/api.service';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { Character } from '../core/interfaces/character/character.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, StyleClassModule, CommonModule, DividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public characters: Character[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getAllCharacter();
    
  }

  getAllCharacter(){
    this.apiService.getAllCharacters().subscribe(data => {
      this.characters = data.results;
    })
  }

}
