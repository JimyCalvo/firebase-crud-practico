import { Injectable } from '@angular/core';
import { Contacto } from '../shared/Contacto';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})

export class ContactoService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.bookingListRef = this.db.list('/contacto')
  }

  // ---------------------------  Crear Contacto ---------------------------\\
  createBooking(cont: Contacto) {
    return this.bookingListRef.push({
      name: cont.name,
      // last_name: cont.last_name,
      email: cont.email,
      mobile: cont.mobile,
    });
  }
  // ---------------------------  Metodo Get --------------------------- \\
  getBooking(id: string) {
    this.bookingRef = this.db.object('/contacto/' + id);
    return this.bookingRef;
  }

  // ---------------------------  Metodo Get List --------------------------- \\

  getBookingList() {
    this.bookingListRef = this.db.list('/contacto');
    return this.bookingListRef;
  }

  // ---------------------------  Metodo Editar --------------------------- \\
  
  updateBooking(id, cont: Contacto) {
    return this.bookingRef.update({
      name: cont.name,
      // last_name: cont.last_name,
      email: cont.email,
      mobile: cont.mobile,
    });
  }


  // ---------------------------  Metodo Eliminar  --------------------------- \\
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/contacto/' + id);
    this.bookingRef.remove();
  }
  
}
