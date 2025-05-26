import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'proyecto-aos-b500e',
        appId: '1:234834556184:web:620d5e6ea29b5dd25dda6d',
        databaseURL: 'https://proyecto-aos-b500e-default-rtdb.firebaseio.com',
        storageBucket: 'proyecto-aos-b500e.firebasestorage.app',
        apiKey: 'AIzaSyDVyLVLqzKiS-fs1jB5cjZowFmfOK8uBzI',
        authDomain: 'proyecto-aos-b500e.firebaseapp.com',
        messagingSenderId: '234834556184',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  
};
