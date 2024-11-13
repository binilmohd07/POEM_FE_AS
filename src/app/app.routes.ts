import { Routes } from '@angular/router';
import { LoginComponent } from './components/commons/login/login.component';
import { ErrorsComponent } from './components/commons/errors/errors.component';
import { BaseComponent } from './components/commons/base/base.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FinancesComponent } from './components/finances/finances.component';
import { OperationsComponent } from './components/operations/operations.component';

export const routes: Routes = [
    {
        path : 'login', component: LoginComponent
    }, {
        path : 'home', component: BaseComponent,
        children : [
            {
                path : 'finances', component: FinancesComponent
            }, {
                path : 'operations', component: OperationsComponent
            }, {
                path : 'settings', component: SettingsComponent
            }
        ]
    }, {
        path:'', redirectTo:'/home', pathMatch:'full'
    }, {
        path : '**', pathMatch:'full', component:ErrorsComponent
    }
];
