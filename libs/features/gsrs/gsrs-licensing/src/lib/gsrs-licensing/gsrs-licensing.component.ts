import {
  afterNextRender,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import SwaggerUI from "swagger-ui";

@Component({
  selector: 'lib-gsrs-licensing',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: './gsrs-licensing.component.html',
  styleUrl: './gsrs-licensing.component.scss',
})
export class GsrsLicensingComponent {

    /**
   * container that holds the swagger ui
   */
    @ViewChild('documentation') el!: ElementRef;
    isBrowser: boolean;
  
    constructor(
      @Inject(PLATFORM_ID) private platformId: InjectionToken<NonNullable<unknown>>,
    ) {
      this.isBrowser = isPlatformBrowser(platformId);
      /**
       * create swagger ui viewer
       */
      afterNextRender(() => {
        if (this.isBrowser) {
          SwaggerUI({
            url: 'assets/gsrs-licensing/gsrs.json',
            domNode: this.el.nativeElement,
          });
        }
      });
    }
  }
  
