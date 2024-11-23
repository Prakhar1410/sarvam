import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Initial icon class for light mode
  iconClass: string = 'pi pi-moon'; // Moon icon for dark mode toggle

  // Toggle dark mode and update icon
  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle dark mode on body

    // Update icon class based on dark mode status
    if (body.classList.contains('dark-mode')) {
      this.iconClass = 'pi pi-sun'; // Sun icon when dark mode is active
    } else {
      this.iconClass = 'pi pi-moon'; // Moon icon when dark mode is inactive
    }
  }
}
