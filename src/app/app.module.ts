import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ projectId: "ionic-firebase-bcc7f", appId: "1:133815072295:web:53c02c16778e1de7b9c002", storageBucket: "ionic-firebase-bcc7f.firebasestorage.app", apiKey: "AIzaSyC1Y21dv5ZZlhWX_g45VWY5cFO7kydYdUs", authDomain: "ionic-firebase-bcc7f.firebaseapp.com", messagingSenderId: "133815072295", measurementId: "G-KMTWHJ342D" })), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
