import { Component,ViewEncapsulation, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'myGymProyect';
  myUser:User;
  loading:boolean = true;  
  constructor(public auth: AngularFireAuth, public elementRef:ElementRef){

    this.auth.user.subscribe((user)=>{
      this.myUser = user;
      setTimeout(()=>
      {
        this.loading = false;
       
      },0.2000);
      

    })
  }

 

  
}
