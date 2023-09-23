import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactSectionComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'actual', component: HomeComponent},
  { path: 'energy-consulting', component: HomeComponent},
  { path: 'architecture', component: ArchitectureComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'contact', component: ContactSectionComponent},
  { path: 'legal', component: LegalNoticeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
