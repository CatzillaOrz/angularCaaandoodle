import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { CanActivate, CanActivateChild, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
// tslint:disable-next-line: no-parameter-properties
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor'
    };


    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }
  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
}
