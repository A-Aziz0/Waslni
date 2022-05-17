import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "../pages/sign-in/sign-in.component";
import {IndexComponent} from "../pages/index/index.component";
import {ServicesComponent} from "../pages/services/services.component";
import {PaymentComponent} from "../pages/payment/payment.component";
import {SubscribeComponent} from "../pages/subsicribe/subscribe.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  {path:"index" ,  component:IndexComponent, data:{animation:'isLeft'}},
  {path:"SignIn" ,  component:SignInComponent, data:{animation: 'isRight'}},
  {path:"services", component:ServicesComponent},
  {path:"subscribe", component:SubscribeComponent},
  {path:"payment", component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule {
}
