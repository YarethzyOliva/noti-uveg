import { Component } from '@angular/core';
import { initializeApp } from "firebase/app"; // Import initializeApp
import { getDatabase, ref, set, get, remove } from "firebase/database"; // Correct imports
import { environment } from '../../environments/environment'; // Import environment

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
  noticias: any[] = []; // Asegúrate de que noticias sea un array
  db: any;

  constructor() {
    // Initialize Firebase
    initializeApp(environment.firebase);
    this.db = getDatabase();
    this.loadNoticias();
  }

  loadNoticias() {
    const noticiasRef = ref(this.db, 'noticias/');
  get(noticiasRef).then((snapshot) => {
    if (snapshot.exists()) {
      const noticiasObj = snapshot.val();
      this.noticias = Object.keys(noticiasObj).map(key => ({
        id: key,
        ...noticiasObj[key]
      }));
    } else {
      this.noticias = [];
    }
  }).catch((error) => {
    console.error("Error loading noticias: ", error);
  });
  }

  addNoticia(noticia: any) {
    const newNoticiaRef = ref(this.db, 'noticias/' + Date.now());
    set(newNoticiaRef, noticia).then(() => {
      this.loadNoticias(); // Reload noticias after adding
    }).catch((error) => {
      console.error("Error adding noticia: ", error);
    });
  }

  eliminarNoticia(index: number) {
    const noticiaId = this.noticias[index].id;
  const noticiaRef = ref(this.db, 'noticias/' + noticiaId);
  remove(noticiaRef).then(() => {
    this.loadNoticias(); // Reload noticias after deletion
  }).catch((error) => {
    console.error("Error deleting noticia: ", error);
  });
  }
}
