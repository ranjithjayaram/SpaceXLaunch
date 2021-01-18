import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { HttpApiService } from './service/http-api.service';
import {HttpClientModule} from '@angular/common/http'; 
import { AppService } from './service/app.service';
@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpApiService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
