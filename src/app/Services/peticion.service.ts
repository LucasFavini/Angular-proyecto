import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  clients:any[]= new Array<any>();
  
  constructor(public db:AngularFirestore) {

    this.db.collection('clientes').get().subscribe((search)=>{
      for (let item of search.docs)
      {
        let client = item.data();
        client.id = item.id;
        client.ref = item.ref;
        this.clients.push(client);
       
      }
      console.log('Peticion realizada');
    })
   }
}
