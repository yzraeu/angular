import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent }
    { path: 'curso/:id', component: CursoDetailComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'path', component: FeatureComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
*/