import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './cmps/footer/footer.component'
import { HeaderComponent } from './cmps/header/header.component'
import { TableComponent } from './cmps/table/table.component'
import { OwnerComponent } from './pages/owner/owner.component'
@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    OwnerComponent,
    MatTabsModule,
    TableComponent,
    MatDialogModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    BrowserAnimationsModule
  ]
})
export class AppModule {}
