import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
