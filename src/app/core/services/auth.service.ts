import { Injectable } from '@angular/core'
import { AES, enc } from 'crypto-js'
import { user } from '../constants/user'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  compareUser(username: string, password: string) {
    if (!username || !password) return false
    const userToCheck = { username, password }
    const decrypted = AES.decrypt(user, 'user').toString(enc.Utf8)
    return JSON.stringify(userToCheck) === decrypted
  }
}
