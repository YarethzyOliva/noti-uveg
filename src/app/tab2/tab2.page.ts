import { Component } from '@angular/core';
import { initializeApp } from "firebase/app"; // Import initializeApp
import { getDatabase, ref, set } from "firebase/database"; // Import necessary Firebase functions
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // Import environment

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

  db: any;

  constructor(private router: Router) {
    // Initialize Firebase
    initializeApp(environment.firebase);
    this.db = getDatabase();
  }

  updateImagePreview(event: any) {
    const url = event.target.value;
    this.imagePreview = url;
    this.noticia.imagen = url;
  }

  agregarNoticia() {
    const newNoticiaRef = ref(this.db, 'noticias/' + Date.now());
    set(newNoticiaRef, this.noticia).then(() => {
      // Redirect to tab1 to view the added news after successful addition
      this.router.navigate(['/tabs/tab1']);
    }).catch((error) => {
      console.error("Error adding noticia: ", error);
    });
  }
}
