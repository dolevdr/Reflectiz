import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { ViewService } from 'src/app/core/services/view.service'

@Component({
  selector: 'app-simple-text',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss']
})
export class SimpleTextComponent {
  @Input() title: string = ''
  @Input() text: string = ''

  constructor(private viewService: ViewService) {}

  goBack() {
    this.viewService.setSuccessSendForm(false)
  }
}
