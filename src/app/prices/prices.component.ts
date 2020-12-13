import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertsService } from '../Services/alerts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
formPrice:FormGroup
planList:Array<any> =new Array<any>();

  constructor(private fb:FormBuilder, private db:AngularFirestore, private alert:AlertsService) { }

  ngOnInit(): void {
    this.formPrice = this.fb.group({
      plan:["",Validators.required],
      price:["",Validators.required],
      pTime:["",Validators.required],

    });

    this.update();
    
  }

    update(){

      this.db.collection('planes').get().subscribe((info)=>{
        this.planList.length = 0;
        info.docs.forEach((item)=>{
          let plans = item.data();
          plans.id = item.id;
          plans.ref = item.ref;
          this.planList.push(plans);
        })
      })
  
    }

  add(){
    console.log(this.formPrice.value);
    this.db.collection('planes').add(this.formPrice.value).then(()=>{
      this.alert.alertSuccess("Plan de entrenamiento","Agregado correctamente");
      this.formPrice.reset();     
      console.log(this.planList);
      this.update();
    })
  }

  remove(){
  
    this.alert.alertFail("En progreso","-LucasFavini");

  }

  remove2(item){
  
    this.alert.alertFail("En progreso","-LucasFavini");
    console.log(item);
  }

  removePlan(item)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {        
        cancelButton: 'btn btn-danger',
        confirmButton: 'btn btn-success'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea eliminar este Plan?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Plan Elminado',
          '',
          'success'
       
        )
        this.db.collection('planes').doc(item).delete();
        this.update();        
        setTimeout(() => {        
          window.location.reload();
        }, 1500);  
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
