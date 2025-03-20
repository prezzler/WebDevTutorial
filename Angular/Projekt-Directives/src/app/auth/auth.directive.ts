import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias:'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);    // gives us access to content of the template
  private viewContainerRef = inject(ViewContainerRef); // gives us access to the place in the DOM where the directive is placed


  constructor() {
    effect(() => {
      if(this.authService.activePermission() === this.userType()) {
        // console.log('User has permission');
        this.viewContainerRef.createEmbeddedView(this.templateRef); 
      }else{
        // console.log('User does not have permission');
        this.viewContainerRef.clear();
      }
    });
    // angular wird also subscriben auf die activepermission() und userType() signal und wenn sich das ändert, wird der effect ausgeführt
   }

}
