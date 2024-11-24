import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ValidarTarefaComponent } from './pages/validar-tarefa/validar-tarefa.component';
import { GerarRelatorioComponent } from './pages/gerar-relatorio/gerar-relatorio.component';
import { AuthGuard } from './services/AuthGuardService';
import { LoginComponent } from './pages/login/login.component';
import { SubirRelatorioComponent } from './pages/tutoriais/subir-relatorio/subir-relatorio.component';
import { TutorialGerarRelatorioComponent } from './pages/tutoriais/tutorial-gerar-relatorio/tutorial-gerar-relatorio.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'validar-tarefa', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'gerar-relatorio', component: GerarRelatorioComponent },
    { path: 'validar-tarefa', component: ValidarTarefaComponent, canActivate: [AuthGuard] },
    { path: 'tutoriais/gerar-relatorio-fiscalizacao', component: TutorialGerarRelatorioComponent },
    { path: 'tutoriais/subir-relatorio-no-sei', component: SubirRelatorioComponent },
    { path: '**', component: PageNotFoundComponent },

];

@NgModule({
    exports: [RouterModule],
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ]
})

export class AppRoutingModule { }
