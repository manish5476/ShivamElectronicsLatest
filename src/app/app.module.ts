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
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
// import { NavbarComponent } from './component/navbar/navbar.component';
import { SplitterModule } from 'primeng/splitter';
import { DialogModule } from 'primeng/dialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DropdownModule } from 'primeng/dropdown'; // Import PrimeNG DropdownModule

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProductDetaiViewComponent } from './component/product-detai-view/product-detai-view.component';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    ProductMasterComponent,
    UserMasterComponent,
    // NavbarComponent,
    ProductDetaiViewComponent,
  ],
  imports: [
    DropdownModule,
    SplitterModule,
    DragDropModule,
    FullCalendarModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
