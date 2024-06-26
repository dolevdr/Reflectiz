import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FromBottom, showHide } from 'src/app/animations'
import { ViewService } from 'src/app/core/services/view.service'
import { FormComponent } from '../../cmps/form/form.component'
import { SimpleTextComponent } from '../../cmps/simple-text/simple-text.component'

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [showHide, FromBottom],
  imports: [CommonModule, FormComponent, SimpleTextComponent]
})
export class HomeComponent {
  constructor(public viewService: ViewService) {}
}
