import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { ShippingReturnComponent } from './shipreturn/shipping-return/shipping-return.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"user",

        children:[
            {
                path:"login",
                component:LoginComponent
            },
            {
                path:"signup",
                component:SignupComponent
            }
        ]
    },
    {
        path:"contact",
        component:ContactComponent,
    },
    {
        path:"shop",
        component:ShoppingComponent,
    },
    {
        path:"shipreturn",
        component:ShippingReturnComponent,
    },
];
