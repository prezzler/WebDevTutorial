import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
        console.log('SafeLinkDirective is active');
    }
    onConfirmLeavePage(event: MouseEvent){
        const wantsToLeave = window.confirm('Do you want to leave this page?');
        
        if (wantsToLeave) {
            // const adress = (event.target as HTMLAnchorElement).href;
            // (event.target as HTMLAnchorElement).href = adress + '?from=' + this.queryParam();
            
            // Alternative art an anchor und dem href ranzukommen
            const adress = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = adress + '?from=' + this.queryParam();
            return;
        }

        event.preventDefault();

        console.log('The link was clicked');
    }
}