import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {UserRosolveService} from './services/user-rosolve.service';
import { UsersPageComponent } from './components/users-page/users-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {path: '', component: UsersPageComponent, resolve: {users: UserRosolveService},
  children: [
    {path: ':id', component: UserCardComponent},
  ]
  }
];

@NgModule({
  declarations: [UsersPageComponent, UserCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [UserService, UserRosolveService]
})
export class UserModule { }
