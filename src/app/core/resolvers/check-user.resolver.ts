import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class CheckUserResolver implements Resolve<void> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userLogin = localStorage.getItem('user')
    if (!!userLogin) {
      this.router.navigate(['/dashboard'])
    }
  }
}
