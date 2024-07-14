import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { Dmw1Component } from './projects/dmw-1/dmw-1.component';
import { Dmw2Component } from './projects/dmw-2/dmw-2.component';
import { AdmComponent } from './projects/adm/adm.component';
import { Ml1Component } from './projects/ml-1/ml-1.component';
import { Ml2Component } from './projects/ml-2/ml-2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    Dmw1Component,
    Dmw2Component,
    AdmComponent,
    Ml1Component,
    Ml2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
