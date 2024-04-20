import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerGuard } from './core/guards/owner.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'dashboard',
    canActivate: [OwnerGuard],
    loadComponent: () =>
      import('./pages/owner/owner.component').then((m) => m.OwnerComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
