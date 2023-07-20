import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  private characterList: Character[] =
  [
    {
      id: 1,
      name: "Ivan",
      power: 20000
    }
  ];

  public get listOfCharacter(): Character[]
  {
    return [...this.characterList];
  }

  public addCharacter( character: Character): void{
    character.id = this.listOfCharacter.length + 1;
    this.characterList.push(character);

    alert("Character has been added successfully!");
  }

  public removeCharacter( id: number): void{
    this.characterList = this.characterList.filter(x => x.id != id);
    alert("Character has been removed successfully!");
  }
}
