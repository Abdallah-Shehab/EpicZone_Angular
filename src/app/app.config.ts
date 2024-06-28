import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthenticationInterceptor } from '../Services/interceptor';
import { JwtHelperService } from '@auth0/angular-jwt';
import { customInterceptor } from '../Services/custom.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [JwtHelperService,provideRouter(routes),provideHttpClient(withInterceptors([customInterceptor]))
  , provideAnimationsAsync()]
};
