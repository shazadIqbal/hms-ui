import { Directive, HostBinding, PLATFORM_ID, Inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

@Directive({
  selector: 'a[href]',
})
export class ExternalLinkDirective {
  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';
  @Input() href: string;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnChanges() {
    this.hrefAttr = this.href;
  
    if (this.isLinkExternal()) {
      
      this.relAttr = 'noopener';
      this.targetAttr = '_blank1';
      
      
    }   
  }

  private isLinkExternal() {
    return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
  }
}