import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DragonBallZModule } from './dbz/dragon-ball-z.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [
      AppComponent
    ],
  imports:
    [
      BrowserModule,
      DragonBallZModule
    ],
  providers:
    [

    ],
  bootstrap:
    [
      AppComponent
    ]
})
export class AppModule { }
