import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertsService } from '../Services/alerts.service';
import { PeticionService } from '../Services/peticion.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

 
  clients:any[]= new Array<any>();

  constructor(public db:AngularFirestore, private alert:AlertsService, public peticion:PeticionService) 
  {    
    console.log(this.clients);  
  }

  ngOnInit(): void {  

    this.peticion.clients=this.clients;

  }

  eliminar()
  {
    this.alert.alertFail("Bloqueado","-Lucas Favini");
  }

}
