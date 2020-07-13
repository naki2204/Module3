import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontSizeEditorComponent } from './front-size-editor/front-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { AngularColorPickerComponent } from './angular-color-picker/angular-color-picker.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrontSizeEditorComponent,
    PetComponent,
    AngularColorPickerComponent,
    CalculatorComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
