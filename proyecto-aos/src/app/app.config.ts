import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"proyectoaos-b3323","appId":"1:1050146862175:web:d68a6e14470d044e3897ea","storageBucket":"proyectoaos-b3323.firebasestorage.app","apiKey":"AIzaSyAMUmLlBkk1Eya4Wml6-cNUdhp6yabdTWc","authDomain":"proyectoaos-b3323.firebaseapp.com","messagingSenderId":"1050146862175"})), provideAuth(() => getAuth())]
};
