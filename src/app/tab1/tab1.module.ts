import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';

@NgModule({
  declarations: [Tab1Page],
  imports: [
    CommonModule,
    IonicModule, // Asegúrate de que IonicModule esté aquí
    Tab1PageRoutingModule,
  ],
})
export class Tab1PageModule {}