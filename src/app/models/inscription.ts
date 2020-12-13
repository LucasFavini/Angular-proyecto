import { DocumentReference } from '@angular/fire/firestore/interfaces';

export class Inscription {
    fecha:Date;
    fechaFinal:Date;   
    fechaEgr:Date;
    precios: DocumentReference;
    cliente:DocumentReference;
    total:number;
}