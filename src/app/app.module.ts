import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { DfcService } from 'src/services/dfc.service';
import { ResumeComponent } from './resume/resume.component';
import { HomeInputComponent } from './home-input/home-input.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { DfcComponent } from './dfc/dfc.component';
import { GraphsComponent } from './graphs/graphs.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeInputComponent,
    ResumeComponent,
    CustomTableComponent,
    DfcComponent,
    GraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    CanvasJSAngularChartsModule
  ],
  providers: [DfcService],
  bootstrap: [AppComponent],
})
export class AppModule { }
