import { Component } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';
import { CharacterService } from 'src/app/dbz/services/character.service';

@Component({
  selector: 'list-characater',
  templateUrl: './list-characater.component.html'
})

export class ListCharacaterComponent {

  constructor( private characterService : CharacterService){};

  public characters: Character[] = this.characterService.listOfCharacter;

  public removeCharacter(id : number):void{
    this.characterService.removeCharacter(id);
    this.characters = this.characterService.listOfCharacter;
  }

}
