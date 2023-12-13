import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent{
  employeMessage : string = 'Après validation, l\'employé recevra un mail pour modifier son mot de passe.'
}
