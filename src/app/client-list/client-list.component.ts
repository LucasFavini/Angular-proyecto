import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertsService } from '../Services/alerts.service';
import { PeticionService } from '../Services/peticion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

 
  clients:any[]= new Array<any>();

  constructor(public db:AngularFirestore, private alert:AlertsService, public peticion:PeticionService) 
  {    

  }

  ngOnInit(): void {  

    this.peticion.clients;
    this.clients = this.peticion.clients;

  }
  
  
  eliminar(item)
  {    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {        
        cancelButton: 'btn btn-danger',
        confirmButton: 'btn btn-success'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea eliminar esta inscripcion?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Inscripcion Elminada',
          '',
          'success'
       
        )
        this.db.collection('clientes').doc(item).delete();              
        setTimeout(() => {        
          window.location.reload();
        }, 1000);  

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          '',
          'error'
        )
      }
    })
  }

}
