import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  // {
  //   path: 'crisis-center',
  //   loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule'
  // },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

// https://angular.io/guide/router#preloading-background-loading-of-feature-areas
// https://angular.io/guide/router#canload-blocks-preload

// RouterModule.forRoot(
//   appRoutes,
//   {
//     enableTracing: true, // <-- debugging purposes only
//     preloadingStrategy: PreloadAllModules
//   }
// )

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
