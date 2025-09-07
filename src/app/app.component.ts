import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CommonModule,
    BaseUiComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar = false;
}
