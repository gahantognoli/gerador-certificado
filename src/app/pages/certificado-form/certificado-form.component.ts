import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css',
})
export class CertificadoFormComponent {
  atividade: string = '';
  certificado: Certificado = {
    nome: '',
    atividades: [],
  };

  campoInvalido(control: NgModel): boolean {
    return (control.invalid && control.touched) ?? false;
  }

  formValido(): boolean {
    return this.certificado.nome.trim().length > 0 && this.certificado.atividades.length > 0;
  }

  adicionarAtividade(): void {
    this.certificado.atividades.push(this.atividade.trim());
    this.atividade = '';
  }

  excluirAtividade(index: number): void {
    this.certificado.atividades.splice(index, 1);
  }

  submit(): void {
    if(!this.formValido()) {
      return;
    }
    console.log(this.certificado);
  }
}
