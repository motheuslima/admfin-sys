import { Component } from '@angular/core';
import bpAtivoMock from '../../shared/mocks/bpAtivo.json';
import bpPassivoMock from '../../shared/mocks/bpPassivo.json';
import dreMock from '../../shared/mocks/dre.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  readonly TITLE: string = "Demonstração de Fluxo Consolidada";

  constructor(private router: Router) {}

  bpAtivo = bpAtivoMock;
  bpAtivoColumns = Object.keys(bpAtivoMock[0]);

  bpPassivo = bpPassivoMock;
  bpPassivoColumns = Object.keys(bpPassivoMock[0]);

  dre = dreMock;
  dreColumns = Object.keys(dreMock[0]);

  goFoward() {
    this.router.navigateByUrl("dfc");
  }
}
