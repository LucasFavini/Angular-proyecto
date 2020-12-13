import { Component, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Clients } from '../models/clients';
import { Inscription } from '../models/inscription';
import { Plan } from '../models/plan';
import { AlertsService } from '../Services/alerts.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  clientList:Clients[] = new Array <Clients>();
  planList:any[] = new Array <any>();
  inscription:Inscription[] = new Array<Inscription>();
  selectedList:Clients;
  ListPlan:Plan;


  constructor(private db:AngularFirestore,private alert:AlertsService) {  }

  ngOnInit(): void {

    this.db.collection<any>('clientes').get().subscribe((results)=>{
      results.docs.forEach((item)=>{
       
        let client:any = item.data();
        client.id = item.id;
        client.ref = item.ref;
        this.clientList.push(client);   
             
      })
      console.log(this.clientList)
   
    })

    
    this.db.collection<any>('planes').get().subscribe((results)=>{
      results.docs.forEach((item)=>{
       
        let plan:any = item.data();
        plan.id = item.id;
        plan.ref = item.ref;
        this.planList.push(plan);     
           
      })
     
    })
  }

    add()
    {
      this.alert.alertFail("En progreso","-LucasFavini");
    }
     
  
}
