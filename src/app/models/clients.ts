import { DocumentReference } from '@angular/fire/firestore/interfaces';

export class Clients{
    nombre:string;
    apellido:string;
    correo:string;
    fechaNac:string;
    DNI:number;
    tel:number;
    imgURL:string;
    id:string;
    ref:DocumentReference;

}