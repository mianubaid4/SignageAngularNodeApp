import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { TemplateDesignComponent } from './template-design/template-design.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateDesignComponent,
    children: [
      {
        path: 'template-design',
        component: TemplateDesignComponent,
      },
 

      { path: '', redirectTo: 'private-chat', pathMatch: 'full' },
      { path: '**', redirectTo: 'private-chat', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
