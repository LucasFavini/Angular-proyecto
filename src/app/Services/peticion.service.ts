import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Inscription } from '../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  clients:any[]= new Array<any>();
  inscripcion:AngularFirestoreDocument<Inscription>;


  constructor(public db:AngularFirestore) {

  
    this.db.collection<any>('clientes').get().subscribe((results)=>{
      results.docs.forEach((item)=>{
       
        let client:any = item.data();
        client.id = item.id;
        client.ref = item.ref;
        this.clients.push(client);   
             
      });

      console.log(this.clients);
 
    })
   }

   delete()
   {
   // this.db.collection('inscripcion').doc(item).delete();
   }
   
}
