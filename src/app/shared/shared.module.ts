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
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule
  ],
  providers: [],
})
export class SharedModule { }
