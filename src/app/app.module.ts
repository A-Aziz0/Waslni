import {ServicesComponent} from "./pages/services/services.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NgModule} from "@angular/core";
import {SubscribeComponent} from "./pages/subsicribe/subscribe.component";
import {PrimaryBtnComponent} from "./components/primary-btn/primary-btn.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaymentComponent} from "./pages/payment/payment.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {IndexComponent} from "./pages/index/index.component";
import {PopupMsgComponent} from "./components/popup-msg/popup-msg.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {AppComponent} from "./app.component";
import {MoveNextByMaxLengthDirectiveDirective} from "./directives/move-next-by-max-length-directive.directive";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BtnComponent} from "./components/btn/btn/btn.component";
import {RouterRoutingModule} from "./router/router-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    BtnComponent,
    IndexComponent,
    PrimaryBtnComponent,
    PopupMsgComponent,
    ServicesComponent,
    PaymentComponent,
    FooterComponent,
    SubscribeComponent,
    MoveNextByMaxLengthDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
