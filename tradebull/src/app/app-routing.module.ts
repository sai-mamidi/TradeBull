import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWallComponent } from './home-wall/home-wall.component';

const routes: Routes = [
  {path: '', component: HomeWallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
