import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { user } from '../constants/user'

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLogin = localStorage.getItem('user') ?? ''
    const validUser = !!userLogin && userLogin === user
    if (!validUser) {
      localStorage.removeItem('user')
      this.router.navigate(['/login'])
    }
    return validUser
  }
}
