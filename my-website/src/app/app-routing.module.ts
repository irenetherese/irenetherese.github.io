import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { Dmw1Component } from './projects/dmw-1/dmw-1.component';
import { Dmw2Component } from './projects/dmw-2/dmw-2.component';
import { Ml1Component } from './projects/ml-1/ml-1.component';
import { Ml2Component } from './projects/ml-2/ml-2.component';
import { Ml3Component } from './projects/ml-3/ml-3.component';
import { AdmComponent } from './projects/adm/adm.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'dmw1', component: Dmw1Component },
  { path: 'dmw2', component: Dmw2Component },
  { path: 'ml1', component: Ml1Component },
  { path: 'ml2', component: Ml2Component },
  { path: 'ml3', component: Ml3Component },
  { path: 'adm', component: AdmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
