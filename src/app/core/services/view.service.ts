import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  constructor() {}
  private _successfullySendForm$ = new BehaviorSubject<boolean>(false)
  sendSuccessForm$ = this._successfullySendForm$.asObservable()

  setSuccessSendForm(loading: boolean) {
    this._successfullySendForm$.next(loading)
  }
}
