import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateComponent } from './pages/update/update.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyFormComponent } from './components/my-form/my-form.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UpdateComponent, MyListComponent, MyFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
