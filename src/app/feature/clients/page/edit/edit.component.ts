import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
    client_nom : string = 'James';
    client_prenom : string = 'LeBron';
    client_date : string = '';
    client_phone : string = '';
    client_email : string = '';
    client_codeP : string = '';
    client_adresse : string = '';
    client_ville : string = '';
}
