import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import {SuccessMessageComponent} from "./success-message/success-message.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  // Bootstrap is the initialization section of our app
  bootstrap: [AppComponent]
})
export class AppModule { }
