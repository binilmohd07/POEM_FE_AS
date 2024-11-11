import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-finances',
  standalone: true,
  imports: [RouterOutlet,MatDividerModule],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.scss'
})
export class FinancesComponent {

}
