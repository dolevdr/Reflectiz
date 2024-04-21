import { Injectable } from '@angular/core'
import { genders, hobbies } from '../constants/form'
import { Form, engineChartFemale, engineChartMale, hobbiesChart, numberEachGender } from '../types'

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor() {}

  groupEnginesByGender() {
    const forms = JSON.parse(localStorage.getItem('forms') ?? '[]')
    forms.forEach((form: Form) => {
      if (form.gender === 'male') {
        if (form.motorType in engineChartMale) {
          engineChartMale[form.motorType]++
        } else {
          engineChartMale[form.motorType] = 1
        }
      } else {
        if (form.motorType in engineChartFemale) {
          engineChartFemale[form.motorType]++
        } else {
          engineChartFemale[form.motorType] = 1
        }
      }
    })
  }

  updateEngineConfig() {
    const fules = [engineChartMale['fuel'] ?? 0, engineChartFemale['fuel'] ?? 0]
    const electric = [engineChartMale['electric'] ?? 0, engineChartFemale['electric'] ?? 0]
    return [fules, electric]
  }

  groupHobbies() {
    const forms = JSON.parse(localStorage.getItem('forms') ?? '[]')
    forms.forEach((form: Form) => {
      form.hobbies.forEach((hobby) => {
        if (hobby in hobbiesChart) {
          hobbiesChart[hobby]++
        } else {
          hobbiesChart[hobby] = 1
        }
      })
    })
  }

  updateHobbiesConfig() {
    return hobbies.map((hobby) => hobbiesChart[hobby] ?? 0)
  }

  groupGender() {
    const forms = JSON.parse(localStorage.getItem('forms') ?? '[]')
    forms.forEach((form: Form) => {
      if (numberEachGender[form.gender]) {
        numberEachGender[form.gender]++
      } else {
        numberEachGender[form.gender] = 1
      }
    })
    console.log(numberEachGender)
  }

  updateGenderConfig() {
    return genders.map((gender) => numberEachGender[gender] ?? 0)
  }
}
