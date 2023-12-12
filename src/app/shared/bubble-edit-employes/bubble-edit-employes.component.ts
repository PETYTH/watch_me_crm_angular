import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-edit-employes',
  templateUrl: './bubble-edit-employes.component.html',
  styleUrls: ['./bubble-edit-employes.component.scss']
})
export class BubbleEditEmployesComponent {
  valueLastName : string = 'Justine';
  valueFirstName : string = 'Labas';
  valueMail : string = 'justinelabas95@gmail.com';
  valueBirthday : string = '12/02/1995';
}
