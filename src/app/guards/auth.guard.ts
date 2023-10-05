import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const router=inject(Router)
  const auth=inject(AuthService)
//
  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
  }
  return auth.isLoggedIn();
  // return truegedIn();
  // return true
  // return true;
};
