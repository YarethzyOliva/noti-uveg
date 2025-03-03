import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class Tab2Page {
  imagePreview: string | null = null;
  noticia = {
    titulo: '',
    fecha: '',
    descripcion: '',
    imagen: ''
  };

  constructor(private router: Router) {}

  updateImagePreview(event: any) {
    const url = event.target.value;
    this.imagePreview = url;
    this.noticia.imagen = url;
  }

  agregarNoticia() {
    // Guardar la noticia en el almacenamiento local o en un servicio
    const noticias = JSON.parse(localStorage.getItem('noticias') || '[]');
    noticias.push(this.noticia);
    localStorage.setItem('noticias', JSON.stringify(noticias));

    // Redirigir a tab1 para ver la noticia agregada
    this.router.navigate(['/tabs/tab1']);
  }
}
