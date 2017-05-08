import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeatService } from "app/services/seat";
import { BlockSeatComponent } from "app/components/blockseat/blockseat.component";

@NgModule({
  declarations: [
    AppComponent,
    BlockSeatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SeatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
