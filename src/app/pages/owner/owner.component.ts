import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core'
import { MatTabsModule } from '@angular/material/tabs'
import { Router } from '@angular/router'
import Chart from 'chart.js/auto'
import { FromBottom } from 'src/app/animations'
import { genders, hobbies } from 'src/app/core/constants/form'
import { ChartsService } from 'src/app/core/services/charts.service'
import { FormService } from 'src/app/core/services/form.service'
import { TableComponent } from '../../cmps/table/table.component'

@Component({
  selector: 'app-owner',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [FromBottom],
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
  imports: [CommonModule, MatTabsModule, TableComponent]
})
export class OwnerComponent implements OnInit {
  enginePerGenderConfig: any
  hobbiesConfig: any
  gendersChart: any

  constructor(public formService: FormService, private chartService: ChartsService, private router: Router) {}

  ngOnInit(): void {
    this.chartService.groupEnginesByGender()
    this.chartService.groupHobbies()
    this.chartService.groupGender()
    this.createChart()
  }
  navToHome() {
    this.router.navigate(['/home'])
  }
  createChart() {
    const [series1, series2] = this.chartService.updateEngineConfig()
    this.enginePerGenderConfig = new Chart('Motor', {
      type: 'bar',
      data: {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Fuel',
            data: series1,
            backgroundColor: 'blue'
          },
          {
            label: 'Electric',
            data: series2,
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 3
      }
    })
    this.hobbiesConfig = new Chart('Hobbies', {
      type: 'bar',
      data: {
        labels: hobbies,
        datasets: [
          {
            label: 'Hobbies',
            data: this.chartService.updateHobbiesConfig(),
            backgroundColor: [
              'red',
              'blue',
              'green',
              'yellow',
              'purple',
              'orange',
              'pink',
              'brown',
              'cyan',
              'magenta',
              'black'
            ]
          }
        ]
      },
      options: {
        aspectRatio: 3
      }
    })
    this.gendersChart = new Chart('Gender', {
      type: 'doughnut',
      data: {
        labels: genders,
        datasets: [
          {
            label: 'Amount',
            data: this.chartService.updateGenderConfig(),
            backgroundColor: ['blue', 'pink']
          }
        ]
      }
    })
  }
}
