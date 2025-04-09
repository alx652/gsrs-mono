import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class GsrsService {
  constructor() {}


  formatDate(dateString: string): string {
    if (dateString.length !== 8) {
      throw new Error('Invalid date format. Expected YYYYMMDD.');
    }
    const year = parseInt(dateString.slice(0, 4));
    const month = parseInt(dateString.slice(4, 6), 10) - 1;
    const day = parseInt(dateString.slice(6, 8), 10);
    const date = new Date(year, month, day);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}