import { NgModule } from '@angular/core';

import { SidebarComponent } from "./sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import { HeaderBoardsComponent } from './header-boards/header-boards.component';
import { ButtonLinkSidebarComponent } from './button-link-sidebar/button-link-sidebar.component';
import { IconFormComponent } from './icon-form/icon-form.component';
import { BubbleNbEmployesComponent } from './bubble-nb-employes/bubble-nb-employes.component';
import { BubbleNbEntrepriseComponent } from './bubble-nb-entreprise/bubble-nb-entreprise.component';
import { BubbleInfosUtileComponent } from './bubble-infos-utile/bubble-infos-utile.component';
import { BubbleChartsComponent } from './bubble-charts/bubble-charts.component';
import { BubbleEvolutionStatsComponent } from './bubble-evolution-stats/bubble-evolution-stats.component';
import { FormsModule } from '@angular/forms';
import { BubbleListComponent } from './bubble-list/bubble-list.component';
import { BubbleAddEmployesComponent } from './bubble-add-employes/bubble-add-employes.component';
import { BubbleEditEmployesComponent } from './bubble-edit-employes/bubble-edit-employes.component';
import { BubbleAllInfosComponent } from './bubble-all-infos/bubble-all-infos.component';
import { BubbleAddClientComponent } from './bubble-add-client/bubble-add-client.component';
import { BubbleEditClientComponent } from './bubble-edit-client/bubble-edit-client.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BubbleAddEntrepriseComponent } from './bubble-add-entreprise/bubble-add-entreprise.component';
import { BubbleAddCommandesComponent } from './bubble-add-commandes/bubble-add-commandes.component';
import { BubbleAddSocieteComponent } from './bubble-add-societe/bubble-add-societe.component';
import { BubbleEditEntrepriseComponent } from './bubble-edit-entreprise/bubble-edit-entreprise.component';
import { BubbleEditSocieteComponent } from './bubble-edit-societe/bubble-edit-societe.component';
import { BubbleEditCommandesComponent } from './bubble-edit-commandes/bubble-edit-commandes.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';




@NgModule({
  declarations: [
    SidebarComponent,
    HeaderBoardsComponent,
    ButtonLinkSidebarComponent,
    IconFormComponent,
    BubbleNbEmployesComponent,
    BubbleNbEntrepriseComponent,
    BubbleInfosUtileComponent,
    BubbleChartsComponent,
    BubbleEvolutionStatsComponent,
    BubbleListComponent,
    BubbleAddEmployesComponent,
    BubbleEditEmployesComponent,
    BubbleListComponent,
    BubbleAddEmployesComponent,
    BubbleEditEmployesComponent,
    BubbleAllInfosComponent,
    BubbleAddClientComponent,
    BubbleEditClientComponent,
    BubbleAddEntrepriseComponent,
    BubbleAddCommandesComponent,
    BubbleAddSocieteComponent,
    BubbleEditEntrepriseComponent,
    BubbleEditSocieteComponent,
    BubbleEditCommandesComponent,
  ],
    exports: [
        SidebarComponent,
        HeaderBoardsComponent,
        IconFormComponent,
        BubbleNbEmployesComponent,
        BubbleNbEntrepriseComponent,
        BubbleChartsComponent,
        BubbleInfosUtileComponent,
        BubbleEvolutionStatsComponent,
        BubbleListComponent,
        BubbleAddEmployesComponent,
        BubbleEditEmployesComponent,
        BubbleAllInfosComponent,
        BubbleAddClientComponent,
        BubbleEditEntrepriseComponent,
        BubbleAddEntrepriseComponent,
        BubbleEditClientComponent,
        BubbleAddSocieteComponent,
        BubbleEditSocieteComponent,
        BubbleEditCommandesComponent,
        BubbleAddCommandesComponent,
    ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [],
})
export class SharedModule { }
