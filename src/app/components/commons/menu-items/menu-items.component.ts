import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { menuItem } from '../custom-sidenav/custom-sidenav.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({opacity:0, height: '0px'}),
        animate('500ms ease-in-out', style({opacity:1, height: '*'}))
      ]), 
      transition(':leave', [
        animate('500ms ease-in-out', style({opacity:0, height: '0px'}))
      ])
    ]) 
  ],
  imports: [MatListModule, RouterModule, MatIconModule, CommonModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {
  item = input.required<menuItem>();
  collapsed = input(false);

  nestedMenuOpen = signal(false);
  toggleNested() {
    if(!this.item().subItems) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }

  routeHistory = input('');
  level = computed(()=> this.routeHistory().split('/').length-1);
  indentation = computed(() => this.collapsed() ? '16px' : `${(16 + (this.level() * 16))}px`)
  
  // logRoutes = effect(()=> console.log(this.routeHistory(), this.level()));
  
}
