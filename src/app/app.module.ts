import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { AboutComponent } from './components/sections/about/about.component';
import { HighlightComponent } from './components/sections/highlight/highlight.component';
import { CatalogComponent } from './components/sections/catalog/catalog.component';
import { CardComponent } from './components/ui/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HighlightComponent,
    CatalogComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
