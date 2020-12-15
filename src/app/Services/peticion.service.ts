import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  clients:any[]= new Array<any>();
  clientList:Clients[] = new Array <Clients>();
  planList:any[] = new Array <any>();



  constructor(public db:AngularFirestore) {
      this.peticion();
      this.peticionPlanes();
   }

   peticion()
   {     
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

   update()
   {     
    this.db.collection<any>('clientes').get().subscribe((results)=>{
      this.clients=[];
      results.docs.forEach((item)=>{       
        let client:any = item.data();
        client.id = item.id;
        client.ref = item.ref;
        this.clients.push(client);   
             
      });

    })
   }


   peticionClientes(){

      this.db.collection<any>('clientes').get().subscribe((results)=>{
        results.docs.forEach((item)=>{        
          let client:any = item.data();
          client.id = item.id;  
          this.clientList.push(client);                        
        });
        
      })

      return this.clientList;
   }



   peticionPlanes(){
        
      this.db.collection<any>('planes').get().subscribe((results)=>{
        results.docs.forEach((item)=>{       
          let plan:any = item.data();
          plan.id = item.id;
          plan.ref = item.ref;
          this.planList.push(plan);               
        })     
      });

      return this.planList;
  }
   
   
}
