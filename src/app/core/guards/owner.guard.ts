import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { user } from '../constants/user'
import { FormService } from '../services/form.service'

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private router: Router, private formService: FormService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.formService.getAllForms()
    const userLogin = localStorage.getItem('user') ?? ''
    const validUser = !!userLogin && userLogin === user
    if (!validUser) {
      localStorage.removeItem('user')
      this.router.navigate(['/login'])
    }
    return validUser
  }
}
