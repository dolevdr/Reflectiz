import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatSliderModule } from '@angular/material/slider'
import { Router } from '@angular/router'
import { finalize } from 'rxjs'
import { FormService } from 'src/app/core/services/form.service'
import { ViewService } from 'src/app/core/services/view.service'
import { seats } from '../../core/constants/form'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  seats = seats
  sendFormLoading = false
  constructor(private formService: FormService, private viewService: ViewService, private router: Router) {}

  ngOnInit(): void {}

  submit(f: NgForm) {
    this.sendFormLoading = true
    this.formService
      .sendForm(f.value)
      .pipe(finalize(() => (this.sendFormLoading = false)))
      .subscribe(() => this.viewService.setSuccessSendForm(true))
  }

  now() {
    return new Date()
  }

  navigateToLogin() {
    this.router.navigate(['/login'])
  }
}
