import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FinancesComponent } from './components/finances/finances.component';
import { CalculatorComponent } from './components/finances/calculator/calculator.component';
import { ExpensesComponent } from './components/finances/expenses/expenses.component';
import { InvestmentsComponent } from './components/finances/investments/investments.component';
import { ErrorsComponent } from './components/commons/errors/errors.component';
import { OperationsComponent } from './components/operations/operations.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    {
        path:'login', component: LoginComponent
    }, {
        path :'home', component: HomeComponent
    }, {
        path : 'finances', component: FinancesComponent,
        children : [
            {
                path : '', component : FinancesComponent
            }, {
                path: 'calculator', component: CalculatorComponent
            }, {
                path:'expenses', component: ExpensesComponent
            }, {
                path : 'investments', component : InvestmentsComponent
            }
        ]
    }, {
        path:'operations', component: OperationsComponent
    }, {
        path:'settings', component: SettingsComponent
    }, {
        path:'', redirectTo:'/login', pathMatch:'full'
    }, {
        path : '**', pathMatch:'full', component:ErrorsComponent
    }
];
