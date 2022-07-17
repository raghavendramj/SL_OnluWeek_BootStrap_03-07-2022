import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbindingsComponent } from './components/ngbindings/ngbindings.component';
import { OnewayComponent } from './components/bindings/oneway/oneway.component';
import { TwowayComponent } from './components/bindings/twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/bindings/parent/parent.component';
import { ChildComponent } from './components/bindings/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NgbindingsComponent,
    OnewayComponent,
    TwowayComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
