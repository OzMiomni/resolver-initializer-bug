import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from 'src/app/test/test.component';
import { TestResolver } from 'src/app/test/test.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {'data': TestResolver},
    component: TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
