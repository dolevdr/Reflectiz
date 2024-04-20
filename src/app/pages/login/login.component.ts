import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router'
import { user } from 'src/app/core/constants/user'
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error = 'Username, password or both are incorrect.'
  showMessage = false
  constructor(private authService: AuthService, private router: Router) {}

  login(f: NgForm) {
    const { username, password } = f.value
    if (this.authService.compareUser(username, password)) {
      localStorage.setItem('user', user)
      this.router.navigate(['/dashboard'])
    } else {
      this.showMessage = true
    }
  }

  hideMessages() {
    this.showMessage = false
  }
}
