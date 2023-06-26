import { Component, OnInit } from '@angular/core';
import { DfcService } from 'src/services/dfc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.component.html',
  styleUrls: ['./home-input.component.scss']
})
export class HomeInputComponent implements OnInit {
  readonly TITLE: string = "Demonstração de Fluxo Consolidada";
  readonly SUBTITLE: string = "Entre com os dados da DF Consolidada para o período desejado. Os valores devem ser introduzidos em arquivos no formato .csv, com os valores separados por vírgula (,).";

  bpAtivoFile: any = null;
  bpPassivoFile: any = null;
  dreFile: any = null;

  started: boolean = false;

  constructor(private dfcService: DfcService, private router: Router) {}

  ngOnInit() {
  }

  startProcessing() {
    if (this.dfcService.hasData)
      if (confirm("Você já possuí dados processados. Deseja iniciar um novo processamento?"))
        this.dfcService.removeFiles();
      else {
        this.bpAtivoFile = this.dfcService.bpAtivoFile;
        this.bpPassivoFile = this.dfcService.bpPassivoFile;
        this.dreFile = this.dfcService.dreFile;
      }


    this.started = true;
  }

  sendFiles() {
    if (!this.isDisabledForm()) {
      this.dfcService.saveFiles(this.bpAtivoFile, this.bpPassivoFile, this.dreFile);
      this.router.navigateByUrl('resume');
    } else alert("Selecione corretamente todos os arquivos.")
  }

  onBpAtivoSelected(event: any) {
    this.bpAtivoFile = event.target.files[0] ?? null;
  }

  onBpPassivoSelected(event: any) {
    this.bpPassivoFile = event.target.files[0] ?? null;
  }

  onDreSelected(event: any) {
    this.dreFile = event.target.files[0] ?? null;
  }

  isDisabledForm(): boolean {
    return !this.bpAtivoFile || !this.bpPassivoFile || !this.dreFile;
  }
}
