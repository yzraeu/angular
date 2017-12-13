import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, InputOutputComponent, OutputPropertyComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
