import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemon.Data';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon?: PokemonData | any
//  name: string = "CHARIZARD"
//  attributesTypes: string[] = ['FIRE', 'ROCK']

  constructor(
    private service: PokemonService
  ) { 
    this.pokemon = {
      id:0, name: '',
      sprites: {
        front_default: ''
      }, types:[]
    }
  }
  
  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName: string) {
//    console.log(searchName);
    this.service.getPokemon(searchName).subscribe(
    {
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      /* PARTE ABAIXO OPCIONAL PARA TESTES(CONSOLE.LOG):
        console.log(res)
        console.log(res.types)
        console.log(this.pokemon)
      */  
    },
    error: (err) => console.log('not found')
    }
  )  
  }   
}