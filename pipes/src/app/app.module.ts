import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [AppComponent, ExemplosPipesComponent, CamelCasePipe],
  imports: [BrowserModule],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: settingsService => settingsService.getLocale()
    }
  ],
  // Modo alternativo
  // providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
