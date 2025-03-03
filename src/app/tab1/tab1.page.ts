import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  // Cargar noticias desde Firestore
  cargarNoticias() {
    this.firebaseService.obtenerNoticias().subscribe((data) => {
      this.noticias = data;
    });
  }

  // Agregar una noticia
  agregarNoticia() {
    const nuevaNoticia = { titulo: 'Nueva Noticia', contenido: 'Contenido de la noticia...' };
    this.firebaseService.agregarNoticia(nuevaNoticia).then(() => {
      console.log('Noticia agregada');
      this.cargarNoticias(); // Recargar la lista de noticias
    });
  }

  // Eliminar una noticia
  eliminarNoticia(id: string) {
    this.firebaseService.eliminarNoticia(id).then(() => {
      console.log('Noticia eliminada');
      this.cargarNoticias(); // Recargar la lista de noticias
    });
  }
}