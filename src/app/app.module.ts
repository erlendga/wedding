import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { FridayComponent } from './friday/friday.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BridalProcessionComponent } from './bridal-procession/bridal-procession.component';

const appRoutes: Routes = [
  {
    path: 'friday',
    component: FridayComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'saturday',
    component: SaturdayComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  },
  {
    path: 'bridal-procession',
    component: BridalProcessionComponent
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FridayComponent,
    WelcomeComponent,
    SaturdayComponent,
    WishListComponent,
    BridalProcessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
