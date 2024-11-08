import { Routes } from '@angular/router';
import { FormControlComponent } from './EXEMPLOS/form-control/form-control.component';
import { ValidadorAssincronoComponent } from './EXEMPLOS/validador-assincrono/validador-assincrono.component';

export const routes: Routes = [
  {path: '', component: FormControlComponent},
  {path: 'assinc', component: ValidadorAssincronoComponent},
];
