import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { WhiteboardsComponent } from './whiteboards/whiteboards.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'home', component: HomeLayoutComponent },
  { path: 'whiteboards', component: WhiteboardsComponent },
  { path: 'whiteboard', component: WhiteboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
