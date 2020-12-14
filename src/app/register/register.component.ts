import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertsService } from '../Services/alerts.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent implements OnInit {

  planList:Array<any> =new Array<any>();

  constructor(public db:AngularFirestore, public del:AlertsService,private routing:Router) { 

  }
  
  ngOnInit(): void {
      this.inscripciones();  
  }

  
  inscripciones(){
    this.db.collection('inscripcion').get().subscribe(results=>{
      results.docs.map(item=> {
        let plans = item.data();
        plans.id = item.id;
        this.planList.push(plans);  
       
      })
    })
  }
  

  delete(item)
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
        this.db.collection('inscripcion').doc(item).delete();              

        setTimeout(() => {        
          window.location.reload();
          this.routing.navigate(['/register'])
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
