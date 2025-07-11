import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Team } from './pages/team/team';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home }, //aqui la ruta por defecto es la del home pilotos
    { path: 'about', component: About },
    { path: 'team', component: Team },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' } //Esto le puse en caso de que la ruta no exista, redirige a Home
];
