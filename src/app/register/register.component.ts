import { Component,OnInit } from '@angular/core';
import { PeticionService } from '../Services/peticion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent implements OnInit {

  

  constructor(public peticion:PeticionService) { 
    
  }
  
  ngOnInit(): void {
    console.log(this.peticion.clients);
  }
  
  probar()
  {
    console.log(this.peticion.clients);
  }
}
