import { Routes } from '@angular/router';
import { HomeComponent } from './vehicles/pages/home/home.component';
import { DetailsComponent } from './vehicles/pages/details/details.component';

export const routes: Routes = [

    {path:'home', component:HomeComponent},
    {path:'details/:name', component:DetailsComponent},

    {path:'**', redirectTo:'home', pathMatch:'full'}
];
