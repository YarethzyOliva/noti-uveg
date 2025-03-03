import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  imagePreview: string | null = null;

  constructor() {}

  updateImagePreview(event: any) {
    const url = event.target.value;
    this.imagePreview = url;
  }

  agregarNoticia() {
    // Lógica para agregar la noticia
    console.log('Noticia agregada');
  }
}
