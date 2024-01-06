import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CartModule } from './pages/cart/cart.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { AboutComponent } from './components/sections/about/about.component';
import { HighlightComponent } from './components/sections/highlight/highlight.component';
import { CatalogComponent } from './components/sections/catalog/catalog.component';
import { CardComponent } from './components/ui/card/card.component';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HighlightComponent,
    CatalogComponent,
    CardComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
