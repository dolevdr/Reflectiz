import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, delay, map, take, tap } from 'rxjs'
import { Form } from '../types'

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _form$ = new BehaviorSubject<Form[]>([])
  form$ = this._form$.asObservable()
  private columns: string[] = []

  constructor() {}

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
    const formsParsed = JSON.parse(forms).map((form: Form) => {
      return { ...form, birthDate: form.birthDate.toString().replace(/[TZ]/g, ' ') }
    })
    this._form$.next(formsParsed)
  }

  getColums() {
    const forms = JSON.parse(localStorage.getItem('forms') ?? '[]')
    if (!this.columns.length) {
      this.columns = forms[0] ? Object.keys(forms[0]) : []
    }
    return this.columns
  }
}
