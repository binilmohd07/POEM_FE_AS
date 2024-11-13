import { Component, computed, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';


@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatSidenavModule, CustomSidenavComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  collapsed =  signal(false);
  sidenavWidth = computed(()=> this.collapsed() ? '65px' : '250px');

  darkMode = signal(false);

  setDarkMode = effect(()=>{
    document.documentElement.classList.toggle('dark', this.darkMode())
  })
}
