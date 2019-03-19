import { ZippyComponent } from './zippy/zippy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '',
  component: IndexComponent,
  children: [
    {
      path: 'zippy',
      component: ZippyComponent,
      // children: [
      //   {
      //     path: ':id',
      //     component: CrisisDetailComponent,
      //     canDeactivate: [CanDeactivateGuard],
      //     resolve: {
      //       crisis: CrisisDetailResolverService
      //     }
      //   },
      //   {
      //     path: '',
      //     component: CrisisCenterHomeComponent
      //   }
      // ]
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsCookbookRoutingModule { }
