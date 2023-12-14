import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
    client_numero = '';
    client_date = '';
    client_paiement = '';
    client_adresse = '';
    client_codep = '';
    client_ville = '';
}
