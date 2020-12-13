import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }




  alertSuccess(title:string, text:string){

    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  alertFail(title:string, text:string){

    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }


  alertWarning(title:string, text:string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  }


}
