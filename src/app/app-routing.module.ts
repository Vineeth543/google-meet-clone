import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { MeetingComponent } from './components/meeting/meeting.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: MeetingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HeaderComponent,
  HeroComponent,
  HomeComponent,
  MeetingComponent,
];
