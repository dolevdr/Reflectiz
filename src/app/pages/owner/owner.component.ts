import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
