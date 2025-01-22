import { CanActivateFn, Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  
  const authService=inject(UserService);
  const router=inject(Router);
  
  if(authService.isUser==false)
  {
    router.navigate(['/auth']);
    return false;
  }
  return authService.isUser;
};
