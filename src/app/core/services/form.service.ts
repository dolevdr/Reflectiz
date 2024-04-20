import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, delay, map, take, tap } from 'rxjs'
import { Form } from '../types'
import { ViewService } from './view.service'

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _form$ = new BehaviorSubject<Form[]>([])
  form$ = this._form$.asObservable()

  constructor(private viewService: ViewService) {}

  sendForm(form: Form) {
    return this._form$.pipe(
      take(1),
      delay(1500), // Simulate network latency
      catchError((error) => {
        // Handle error from API
        throw error
      }),
      map((forms: Form[]) => [...forms, form]),
      tap((forms) => {
        localStorage.setItem('forms', JSON.stringify(forms))
        this._form$.next(forms)
      })
    )
  }

  getAllForms() {
    const forms = localStorage.getItem('forms') ?? '[]'
    this._form$.next(JSON.parse(forms))
  }
}
