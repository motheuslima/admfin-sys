import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInputComponent } from './home-input/home-input.component';
import { ResumeComponent } from './resume/resume.component';
import { DfcComponent } from './dfc/dfc.component';
import { GraphsComponent } from './graphs/graphs.component';

const routes: Routes = [
  { path: 'home', component: HomeInputComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'dfc', component: DfcComponent },
  { path: 'graphs', component: GraphsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
