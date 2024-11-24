import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RedmineService } from './services/RedmineService';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } ,
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    RedmineService, 
    importProvidersFrom(HttpClientModule), 
    provideHttpClient(withFetch())
  ]
};
