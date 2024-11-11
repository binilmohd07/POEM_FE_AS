import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';

export type menuItem = {
  icon : string;
  label : string;
  route : string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterLink,RouterModule, MatDividerModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})



export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean) {
    this.sideNavCollapsed.set(val);
  }
  

  menuItems = signal<menuItem[]>([
    {
      icon : 'price_change',
      label : 'Finances',
      route : 'finances'
    }, {
      icon : 'list_alt',
      label : 'Operations',
      route : 'operations'
    }, {
      icon : 'settings',
      label : "Settings",
      route : 'settings'
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32':'100')
}
