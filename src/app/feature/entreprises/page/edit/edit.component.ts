import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  entreprise_nom = '';
  entreprise_siret = '';
  entreprise_ville = '';
  entreprise_affaire = '';
  entreprise_codep = '';
  entreprise_adresse = '';
}
