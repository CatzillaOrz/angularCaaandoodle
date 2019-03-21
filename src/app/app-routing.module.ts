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
  {
    path: 'rxjs-cookbook',
    loadChildren: './rxjs-cookbook/rxjs-cookbook.module#RxjsCookbookModule',
    data: { preload: true }
  },
  {
    path: 'form-cook',
    loadChildren: './form-cook/form-cook.module#FormCookModule',
    data: { preload: true }
  },
  {
    path: 'form-hero',
    loadChildren: './form-hero/form-hero.module#FormHeroModule',
    data: { preload: true }
  },
  // {
  //   path: 'crisis-center',
  //   loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule'
  // },

  // Before updating the app-routing.module.ts, you'll need to consider an
  // important rule. Currently, our empty path route redirects to /heroes, which
  // redirects to /superheroes. This won't work and is by design as the Router
  // handles redirects once at each level of routing configuration. This
  // prevents chaining of redirects, which can lead to endless redirect loops.
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '', redirectTo: '/heroes', pathMatch: 'full' },
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
      useHash: true,
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
