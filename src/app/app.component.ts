import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { titles } from './core/constants/routes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titles = titles

  constructor(private router: Router) {}

  getCurrentRoute() {
    return this.router.url.replace('/', '')
  }
}
