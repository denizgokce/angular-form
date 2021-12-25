import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnterComponent} from "./pages/enter/enter.component";
import {ThankyouComponent} from "./pages/thankyou/thankyou.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'enter', pathMatch: 'full'
  },
  {
    path: 'enter', component: EnterComponent,
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
