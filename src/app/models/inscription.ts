import { DocumentReference } from '@angular/fire/firestore/interfaces';

export class Inscription {
   nombre:string
   apellido:string
   vencimiento:Date
   plan:string
   total:number;
}