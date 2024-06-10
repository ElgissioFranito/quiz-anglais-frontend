import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayingComponent } from './pages/playing/playing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        component: HomeComponent,
        title: 'welcome to the quiz game app for learning english language'
    },
    { 
        path: 'playing', 
        component: PlayingComponent,
        title: 'Now, answer the question'
    },
    { path: '**', redirectTo: 'home' },
];
