import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, signal } from '@angular/core';
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
  imports: [MatListModule, MatIconModule, CommonModule, RouterLink,RouterModule],
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
      icon : 'attach_money',
      label : 'Finances',
      route : 'finances'
    }, {
      icon : 'list',
      label : "To-Do's",
      route : 'operations'
    }, {
      icon : 'settings',
      label : "Settings",
      route : 'settings'
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32':'100')
}
