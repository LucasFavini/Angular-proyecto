import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '../Services/alerts.service';
import { Route } from '@angular/compiler/src/core';
import { PeticionService } from '../Services/peticion.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  clientForm:FormGroup;
  clientList:any[]=new Array();
  loadingIMG:number=0;  
  imgURL:string="";
  clientId:string;
  editButton:boolean=false;
  Swal: any;
 

  constructor(private fb:FormBuilder,private storage: AngularFireStorage, private db: AngularFirestore ,
    	        private activeRoute:ActivatedRoute,private alert:AlertsService,
              private routing:Router, public peticion:PeticionService) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])],
      fechaNac:['',Validators.required],
      DNI:['',Validators.required],   
      tel:['',Validators.required],
      imgURL: ['',Validators.required]
    })
    
   this.clientId = this.activeRoute.snapshot.params.clientID;
    if(this.clientId!=null)
    {      
      this.db.doc<any>('clientes'+ "/" + this.clientId).valueChanges().subscribe((client=>{
        this.clientForm.setValue({
          nombre:client.nombre,
          apellido:client.apellido,
          correo:client.correo,
          fechaNac:new Date (client.fechaNac.seconds * 1000).toISOString().substr(0,10),
          tel:client.tel,
          DNI:client.DNI,
          imgURL:'',
          
        })
        this.clientForm.value.imgURL  = client.imgURL;
        this.imgURL = client.imgURL;
        console.log(client.imgURL)
        }));
        this.editButton=true;

    }
  

  }

  add()
  {
    this.clientForm.value.imgURL = this.imgURL;
    this.clientForm.value.fechaNac = new Date(this.clientForm.value.fechaNac);      
    this.clientList.push(this.clientForm.value);
    console.log(this.clientForm.value);
    this.db.collection('clientes').add(this.clientForm.value).then((show)=>{
      this.clientForm.value.imgURL = this.imgURL;  
      this.alert.alertSuccess("Contacto agregado", "Correctamente");      
      console.log("Finalizado");
    });
    this.clientForm.reset();
    this.loadingIMG=0;    
        
   
  }


  edit()
  {
    this.clientForm.value.imgURL = this.imgURL;
    this.clientForm.value.fechaNac = new Date(this.clientForm.value.fechaNac);
    this.db.doc('clientes/' + this.clientId).update(this.clientForm.value).then((show)=>{
      this.clientForm.value.imgURL = this.imgURL;  
      this.alert.alertSuccess("Contacto editado", "Correctamente");    
      this.clientForm.value.imgURL = this.imgURL;  
      }).catch(()=>{
        this.alert.alertFail("Error", "No se puedo editar");
      });  
  
  }

  addImage(event)
  {
    let acum = new Date().getTime().toString();

    var file = event.target.files[0];
    let path = "clientes/" + acum;
    const ref = this.storage.ref(path);
    const task = ref.put(file);

    console.log(path);

    task.percentageChanges().subscribe((loading)=>{
      console.log(loading);
      console.log(file.name);
      this.loadingIMG= parseInt(loading.toString()) ;   
      
      ref.getDownloadURL().subscribe((url)=>{
        this.imgURL = url;
        console.log(this.imgURL);
    })


    })
  }

  warning()
  {
    this.alert.alertWarning("Ingrese solamente", "formato .JPG");
  }




  
}
