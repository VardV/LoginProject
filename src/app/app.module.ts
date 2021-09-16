import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent} from './card/card.component';
import { FormComponent } from './form/form.component';
import { CalcComponent } from './calc/calc.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
