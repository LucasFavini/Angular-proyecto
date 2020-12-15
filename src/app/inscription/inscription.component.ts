import { Component, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Clients } from '../models/clients';
import { Inscription } from '../models/inscription';
import { Plan } from '../models/plan';
import { AlertsService } from '../Services/alerts.service';
import { PeticionService } from '../Services/peticion.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  clientList:Clients[] = new Array <Clients>();
  planList:any[] = new Array <any>();
  inscription7:Inscription;
  selectedList:Clients;
  ListPlan:Plan;


  constructor(private db:AngularFirestore,private alert:AlertsService, private router:Router,
     public peticion:PeticionService) 
     { 
      this.peticion.update();
     }

  ngOnInit(): void { 
    this.clientList= this.peticion.clients;
    this.planList = this.peticion.planList;
    console.log(this.clientList);
    console.log(this.planList);
  }

    add()
    {
      console.log(this.selectedList.nombre, this.selectedList.apellido);
      console.log(this.ListPlan.plan, this.ListPlan.price);

      this.inscription7 = {
        nombre:this.selectedList.nombre,
        apellido:this.selectedList.apellido,
        vencimiento:this.ListPlan.pTime,
        plan:this.ListPlan.plan,
        total:this.ListPlan.price
      }
   

      console.log(this.inscription7);

      this.db.collection('inscripcion').add(this.inscription7).then(res=>{
        console.log(res);
      })      
      
      this.alert.alertSuccess('Inscripcion','Realizada');
      this.router.navigate(['/registro']);
    }
     
  
}
