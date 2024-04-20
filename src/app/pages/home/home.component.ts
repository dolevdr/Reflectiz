import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormComponent } from '../../cmps/form/form.component'

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, FormComponent]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
