import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { FormService } from '../services/form.service'

@Injectable({
  providedIn: 'root'
})
export class FormsResolver implements Resolve<void> {
  constructor(private formService: FormService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.formService.getAllForms()
  }
}
