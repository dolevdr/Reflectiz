import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './cmps/footer/footer.component'
import { HeaderComponent } from './cmps/header/header.component'

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, MatDialogModule, AppRoutingModule, HeaderComponent, FooterComponent, BrowserAnimationsModule]
})
export class AppModule {}
