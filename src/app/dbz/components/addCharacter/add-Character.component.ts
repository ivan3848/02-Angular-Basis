import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'add-character',
  templateUrl: 'add-character.component.html'
})

export class AddCharacterComponent {

  constructor( private characterService: CharacterService) {}

  public character: Character = {
    id: 0,
    name: '',
    power: 0
  }

  public sendCharacter(): void{
    this.characterService.addCharacter(this.character);
    this.cleanCharacterForm();
  }

  public cleanCharacterForm():void{

    this.character = {
      id: 0,
      name: '',
      power: 0
    }
  }
}
