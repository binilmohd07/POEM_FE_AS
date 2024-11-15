import { Routes } from '@angular/router';
import { LoginComponent } from './components/commons/login/login.component';
import { ErrorsComponent } from './components/commons/errors/errors.component';
import { BaseComponent } from './components/commons/base/base.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FinancesComponent } from './components/finances/finances.component';
import { OperationsComponent } from './components/operations/operations.component';
import { StylingComponent } from './components/commons/styling/styling.component';
import { CalculatorComponent } from './components/finances/calculator/calculator.component';
import { ExpensesComponent } from './components/finances/expenses/expenses.component';
import { InvestmentsComponent } from './components/finances/investments/investments.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    }, {
        path: 'home', component: BaseComponent,
        children: [
            {
                path: 'finances',
                children: [
                    {
                        path: '', component: FinancesComponent
                    }, {
                        path: 'calculator', component: CalculatorComponent
                    }, {
                        path: 'expenses', component: ExpensesComponent
                    }, {
                        path: 'investments', component: InvestmentsComponent
                    }
                ]
            }, {
                path: 'operations', component: OperationsComponent
            }, {
                path: 'settings', component: SettingsComponent
            }, {
                path: 'styling', component: StylingComponent
            }
        ]
    }, {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }, {
        path: '**', pathMatch: 'full', component: ErrorsComponent
    }
];
