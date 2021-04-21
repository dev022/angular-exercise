import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { FormsModule } from '@angular/forms';
import { exedirDirective } from './exedir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    exedirDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
