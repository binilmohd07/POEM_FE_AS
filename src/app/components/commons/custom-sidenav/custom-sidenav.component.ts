import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

export type menuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: menuItem[]
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule, MatDividerModule, MenuItemsComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }


  menuItems = signal<menuItem[]>([
    {
      icon: 'price_change',
      label: 'Finances',
      route: 'home/finances',
      subItems: [
        {
          icon: 'receipt_long',
          label: 'Expenses',
          route: 'expenses'
        }, {
          icon: 'trending_up',
          label: 'Investments',
          route: 'investments'
        }, {
          icon: 'calculate',
          label: 'Calculator',
          route: 'calculator'
        }
      ]
    }, {
      icon: 'list_alt',
      label: 'Operations',
      route: 'home/operations'
    }, {
      icon: 'settings',
      label: "Settings",
      route: 'home/settings'
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')
}
