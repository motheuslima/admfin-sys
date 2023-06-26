import { Component } from '@angular/core';
import draMock from '../../shared/mocks/dra.json';
import dfcMock from '../../shared/mocks/dfc.json';
import dmplMock from '../../shared/mocks/dmpl.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dfc',
  templateUrl: './dfc.component.html',
  styleUrls: ['./dfc.component.scss']
})
export class DfcComponent {
  readonly TITLE: string = "Demonstração de Fluxo Consolidada";

  constructor(private router: Router) {}

  dra = draMock;
  draColumns = Object.keys(draMock[0]);

  dfc = dfcMock;
  dfcColumns = Object.keys(dfcMock[0]);

  dmpl = dmplMock;
  dmplColumns = Object.keys(dmplMock[0]);

  goFoward() {
    this.router.navigateByUrl("graphs");
  }

  goBackward() {
    this.router.navigateByUrl("resume");
  }
}
