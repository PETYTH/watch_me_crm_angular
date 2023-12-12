import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  getEntreprise : string = 'Need For School';
  userAdresse1 : string = '4 rue du Général Sarrail';
  userAdresse2 : string = '76000 Rouen';
  userCA : string = '1000€';
  userSiret : string = 'Numéro de siret : 123-456-789';

}
