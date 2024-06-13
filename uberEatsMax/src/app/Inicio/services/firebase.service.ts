import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { tap,map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {}


  getLocalesPorCategoria(categoria: string): Observable<any[]> {
    return this.firestore.collection('Locales', ref => ref.where(`categorias.${categoria}`, '==', true)).valueChanges();
  }

  pruebaGetLocalesPorCategoria() {
    this.getLocalesPorCategoria('Pizza')
      .subscribe(locales => {
        console.log("Locales para la categoría 'super':", locales);
      }, error => {
        console.error("Error al obtener locales para la categoría 'super':", error);
      });
  }

  getLocalesSuper(): Observable<any[]> {
    return this.firestore.collection('Locales').doc().collection('super').valueChanges()
      .pipe(
        tap(locales => console.log('Locales para la categoría "super":', locales))
      );
  }
  //Agregar un local por su categoria.
  agregarLocalEnCategoria(categoria: string, nombreLocal: string, imagenUrl: string): Promise<void> {
    const idLocal = this.firestore.createId();
    const datosLocal = {
      nombre_local: nombreLocal,
      imagen_url: imagenUrl
    };

    // Obtener el documento que contiene las categorías
    return this.firestore.collection('Locales').get().pipe(
      // Utilizar mergeMap para transformar el Observable en uno nuevo que contenga el ID del documento
      mergeMap(snapshot => {
        // Verificar que el documento exista y tenga al menos una categoría
        if (!snapshot.empty && snapshot.docs[0].exists) {
          // Obtener el ID del primer documento
          const idDocumento = snapshot.docs[0].id;
          // Obtener una referencia a la subcolección de la categoría especificada
          const categoriaRef = this.firestore.collection('Locales').doc(idDocumento).collection(categoria);
          // Insertar los datos del local en la subcolección de la categoría
          return categoriaRef.doc(idLocal).set(datosLocal);
        } else {
          // Si no hay ningún documento que contenga las categorías, retornar una promesa rechazada
          return Promise.reject('No se encontró el documento que contiene las categorías');
        }
      })
    ).toPromise(); // Convertir el Observable a una promesa para que sea compatible con el método "then"
  }

  obtenerLocalesPorCategoria(categoria: string): Observable<any[]> {
    // Obtener el documento que contiene las categorías
    return this.firestore.collection('Locales').get().pipe(
      mergeMap(snapshot => {
        // Verificar que el documento exista y tenga al menos una categoría
        if (!snapshot.empty && snapshot.docs[0].exists) {
          // Obtener el ID del primer documento
          const idDocumento = snapshot.docs[0].id;
          // Obtener una referencia a la subcolección de la categoría especificada
          const categoriaRef = this.firestore.collection('Locales').doc(idDocumento).collection(categoria);
          // Obtener los locales de la subcolección de la categoría
          return categoriaRef.get().pipe(
            map(snapshot => {
              // Mapear los documentos a un array de locales
              return snapshot.docs.map(doc => doc.data());
            })
          );
        } else {
          // Si no hay ningún documento que contenga las categorías, retornar un array vacío
          return [];
        }
      })
    ) as Observable<any[]>;
  }
  obtenerColeccion(path:string){
    return this.firestore.collection(path).valueChanges()
  }
  eliminarProdCarro(id:string){
    this.firestore.collection('Carrito').doc(id).delete();
  }
  modificarProdCarro(id:string, data:any){
    this.firestore.collection('Carrito').doc(id).update(data)
  }
  agregarAlCarro(data: any, id: string){
    const coleccion = this.firestore.collection('Carrito');
    return coleccion.doc(id).set(data)
   }
}
