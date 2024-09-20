import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductMasterComponent } from './component/product-master/product-master.component';
import { UserMasterComponent } from './component/user-master/user-master.component';

import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [AppComponent, ProductMasterComponent, UserMasterComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
