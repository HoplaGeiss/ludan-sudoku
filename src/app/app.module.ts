import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SudokuModule } from '../../projects/ngx-ludan-sudoku/src/lib/sudoku.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, SudokuModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
