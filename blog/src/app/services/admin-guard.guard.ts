import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AdminGuardGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.isLoggedIn() && this.authService.currentUser.role === 'admin') {
      return true;
    }
  }
}
