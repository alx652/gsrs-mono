import { CdkScrollable } from '@angular/cdk/overlay';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import {
  Component,
  ElementRef,
  NgModule,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from "@ncats-frontend-library/shared/utils/loading-spinner";
import releaseData from 'apps/gsrs/src/assets/data/dataReleases.json';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-gsrs-home',
  standalone: true,
  imports: [CommonModule,
    MatIconModule,
    MatCardModule,
    ScrollingModule,
    CdkScrollableModule,
    NgOptimizedImage,
    LoadingSpinnerComponent,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './gsrs-home.component.html',
  styleUrl: './gsrs-home.component.scss',
})
export class GsrsHomeComponent implements OnInit{
  @ViewChild(CdkScrollable, { static: false }) scrollable!: CdkScrollable;

  /**
   * element of the page to scroll to
   */
  @ViewChild('details', { read: ElementRef, static: true }) elemRef!: ElementRef;
data!: unknown;
releaseCount!: string;
releaseDate!: string;
releasePath!: string;


  goToDetails(): void {
    this.elemRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  goToLinkInNew(url: string) {
    window.open(url, "_new");
  }

  ngOnInit(): void {
    console.log(releaseData);
    let currentRecords = releaseData.Datasets[0].records?.toString() || null;
    console.log(currentRecords);
    if (currentRecords && currentRecords.length > 3) {
      this.releaseCount = currentRecords.slice(0, -3) + ',' + currentRecords.slice(-3);
    }

    let currentDate = releaseData.Datasets[0].date || null;
    if (currentDate) {
      this.releaseDate = this.formatDate(currentDate);
    }

    let path = releaseData.Datasets[0].filename || null;
    if (path) {
      this.releasePath = path;
    }

  }

  formatDate(dateString: string): string {
    // Ensure the input is in the correct format
    if (dateString.length !== 8) {
      throw new Error('Invalid date format. Expected YYYYMMDD.');
    }
  
    // Extract year, month, and day from the string
    const year = parseInt(dateString.slice(0, 4));
    const month = parseInt(dateString.slice(4, 6), 10) - 1; // Months are 0-indexed in JavaScript
    const day = parseInt(dateString.slice(6, 8), 10);
  
    // Create a Date object
    const dateObj = new Date(year, month, day);
  
    // Format the date to 'Month Day, Year'
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
  }
}
