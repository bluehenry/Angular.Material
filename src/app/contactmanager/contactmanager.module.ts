import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar.component';
import { MainContentComponent } from './components/main-content.component';
import { SidenavComponent } from './components/sidenav.component';
import { UserService } from './services/user.service';
import { NotesComponent } from './components/notes/notes.component';
import { NewContractDialogComponent } from './components/new-contract-dialog/new-contract-dialog.component';

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
    ReactiveFormsModule
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContractDialogComponent
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    NewContractDialogComponent
  ]
})
export class ContactmanagerModule { }

