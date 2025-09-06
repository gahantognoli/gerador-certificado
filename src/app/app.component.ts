import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { CertificadoFormComponent } from "./pages/certificado-form/certificado-form.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, BaseUiComponent, CertificadosComponent, CertificadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar = false;
}
