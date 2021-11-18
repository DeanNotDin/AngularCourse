import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // Bootstrap is the initialization section of our app
  bootstrap: [AppComponent]
})
export class AppModule { }
