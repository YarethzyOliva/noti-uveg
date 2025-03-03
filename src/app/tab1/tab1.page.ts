import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class Tab1Page {
  noticias: any[] = [];

  constructor() {
    this.loadNoticias();
  }

  loadNoticias() {
    this.noticias = JSON.parse(localStorage.getItem('noticias') || '[]');
  }

  eliminarNoticia(index: number) {
    this.noticias.splice(index, 1);
    localStorage.setItem('noticias', JSON.stringify(this.noticias));
  }
}
