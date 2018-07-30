import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar.component';
import { MainContentComponent } from './components/main-content.component';
import { SidenavComponent } from './components/sidenav.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: 'maincontent/:id', component: MainContentComponent },
      // { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexModule,
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }

