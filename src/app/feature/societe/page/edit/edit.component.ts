import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  societe_nom = '';
  societe_siret = '';
  societe_ville = '';
  societe_affaire = '';
  societe_codep = '';
  societe_adresse = '';
}
