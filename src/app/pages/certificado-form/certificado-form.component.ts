import { Component, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

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
    dataEmissao: '',
    id: '',
  };

  constructor(
    private certificadoService: CertificadoService,
    private router: Router
  ) {}
  @ViewChild('form') form!: NgForm;

  campoInvalido(control: NgModel): boolean {
    return (control.invalid && control.touched) ?? false;
  }

  formValido(): boolean {
    return (
      this.certificado.nome?.length > 0 &&
      this.certificado.atividades?.length > 0
    );
  }

  adicionarAtividade(): void {
    if (this.atividade.length === 0) {
      return;
    }
    this.certificado.atividades.push(this.atividade.trim());
    this.atividade = '';
  }

  excluirAtividade(index: number): void {
    this.certificado.atividades.splice(index, 1);
  }

  submit(): void {
    if (!this.formValido()) {
      return;
    }
    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4();
    this.certificadoService.adicionarCertificado(this.certificado);
    this.router.navigate(['certificados', this.certificado.id]);
  }

  dataAtual(): string {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  estadoInicial(): Certificado {
    return {
      nome: '',
      atividades: [],
      dataEmissao: '',
      id: '',
    };
  }
}
