import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterService } from './services/character.service';
import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent } from './components/addCharacter/add-Character.component';
import { FormsModule } from '@angular/forms';
import { ListCharacaterComponent } from './components/listCharacter/list-characater/list-characater.component';

@NgModule({
  declarations:
  [
    MainPageComponent,
    AddCharacterComponent,
    ListCharacaterComponent
  ],
  exports:
  [
    MainPageComponent
  ],
  imports:
  [
    CommonModule,
    FormsModule
  ],
  providers:
  [
    CharacterService
  ]
})

export class DragonBallZModule { }
