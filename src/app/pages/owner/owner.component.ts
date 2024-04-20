import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatTabsModule } from '@angular/material/tabs'
import { FormService } from 'src/app/core/services/form.service'
import { TableComponent } from '../../cmps/table/table.component'

@Component({
  selector: 'app-owner',
  standalone: true,
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
  imports: [CommonModule, MatTabsModule, TableComponent]
})
export class OwnerComponent implements OnInit {
  constructor(public formService: FormService) {}

  ngOnInit(): void {}
}
