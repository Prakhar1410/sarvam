import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-get-involved',
  standalone: true,
  imports: [RouterLink, CardModule],
  templateUrl: './get-involved.component.html',
  styleUrl: './get-involved.component.css'
})
export class GetInvolvedComponent {

}
