import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { FormService } from 'src/app/core/services/form.service'

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(public formService: FormService) {}
}
