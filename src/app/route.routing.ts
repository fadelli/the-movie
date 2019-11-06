import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';


const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

export const RouteRoutes: Routes = routes;
