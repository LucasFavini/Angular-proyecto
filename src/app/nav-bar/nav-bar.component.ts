import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  
})
export class NavBarComponent implements OnInit {
  myUser:User;  
  loading:boolean=true;
  account:string;
  gmail:string="@gmail.com"
  isCollapsed = true;
  constructor(public auth:AngularFireAuth, private elementRef: ElementRef) { }

  ngOnInit(): void {
    
    this.auth.user.subscribe((user)=>{
    this.myUser = user;     
    this.account= this.myUser.email.replace(this.gmail,'');
    })
  }

  logOut() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#061922'
    this.auth.signOut();
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eaeaea';
 }

}
