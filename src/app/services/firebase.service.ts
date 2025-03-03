import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  // Agregar una noticia
  agregarNoticia(noticia: any) {
    const noticiasRef = collection(this.firestore, 'noticias'); // 'noticias' es el nombre de la colección en Firestore
    return addDoc(noticiasRef, noticia);
  }

  // Obtener todas las noticias
  obtenerNoticias(): Observable<any[]> {
    const noticiasRef = collection(this.firestore, 'noticias');
    return collectionData(noticiasRef, { idField: 'id' }) as Observable<any[]>;
  }

  // Eliminar una noticia
  eliminarNoticia(id: string) {
    const noticiaDocRef = doc(this.firestore, `noticias/${id}`);
    return deleteDoc(noticiaDocRef);
  }
}