import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearContactoPageRoutingModule } from './crear-contacto-routing.module';

import { CrearContactoPage } from './crear-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearContactoPageRoutingModule
  ],
  declarations: [CrearContactoPage]
})
export class CrearContactoPageModule {}
