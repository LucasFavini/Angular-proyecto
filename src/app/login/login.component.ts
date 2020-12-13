import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup
  noError:boolean=true;

  constructor(public formBuilder:FormBuilder, private auth:AngularFireAuth,private spinner: NgxSpinnerService) { }

  ngOnInit(): void 
  {
    this.formLogin = this.formBuilder.group({
      email:['',Validators.compose ([Validators.required,Validators.email])],
      password:['',Validators.required]
  });
  }

  
  login()
  {
    //animacion de inicio & logIn
    if(this.auth.signInWithEmailAndPassword)
    { 
      this.spinner.show();     
      this.noError=true;
      this.auth.signInWithEmailAndPassword(this.formLogin.value.email, this.formLogin.value.password).then((user)=>{
        console.log(user);
        
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);          

      }).catch((error)=>{

        this.noError=false;
        this.spinner.show();
        this.spinner.hide();
      })
    
      this.formLogin.reset();     
    }
   
    
  }

}
