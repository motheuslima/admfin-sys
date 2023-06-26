import { Injectable } from '@angular/core';

@Injectable()
export class DfcService {
    private _bpAtivoFile: any = null;
    private _bpPassivoFile: any = null;
    private _dreFile: any = null;

    public hasData: boolean = false;

    public get bpAtivoFile() {
        return this._bpAtivoFile;
    }

    public get bpPassivoFile() {
        return this._bpPassivoFile;
    }

    public get dreFile() {
        return this._dreFile;
    }


    public saveFiles(bpAtivoFile: any, bpPassivoFile: any, dreFile: any) {
        this._bpAtivoFile = bpAtivoFile;
        this._bpPassivoFile = bpPassivoFile;
        this._dreFile = dreFile;
        this.hasData = true;

        alert("Arquivos salvos com sucesso");
    }

    public removeFiles() {
        this._bpAtivoFile = null;
        this._bpPassivoFile = null;
        this._dreFile = null;
        this.hasData = false;

        alert("Arquivos removido com sucesso");
    }
}