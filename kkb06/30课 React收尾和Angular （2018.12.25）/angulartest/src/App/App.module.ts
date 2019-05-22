import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './App.component';
import {HeaderComponent} from './Header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{

}
