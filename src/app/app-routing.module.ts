import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { PricesComponent } from './prices/prices.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '' , redirectTo:'inscripcion', pathMatch:'full',
  },
  {
    path: 'inscripcion',component:InscriptionComponent,    
  },
  {
    path: 'listado-clientes',component:ClientListComponent,    
  },
  {
    path: 'agregar-clientes',component:AddClientComponent,    
  },
  {
    path: 'agregar-clientes/:clientID',component:AddClientComponent,    
  },
  {
    path: 'planes',component:PricesComponent,    
  },
  {
    path: 'registro',component:RegisterComponent,    
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
