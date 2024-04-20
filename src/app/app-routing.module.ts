import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OwnerGuard } from './core/guards/owner.guard'
import { CheckUserResolver } from './core/resolvers/check-user.resolver'
import { FormsResolver } from './core/resolvers/forms.resolver'

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    resolve: { forms: FormsResolver },
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'login',
    resolve: { checkUser: CheckUserResolver },
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'dashboard',
    canActivate: [OwnerGuard],
    loadComponent: () => import('./pages/owner/owner.component').then((m) => m.OwnerComponent)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
