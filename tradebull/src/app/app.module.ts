import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { StockWallComponent } from './stock-wall/stock-wall.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { HomeWallComponent } from './home-wall/home-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    StockWallComponent,
    CompanyViewComponent,
    HomeWallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
