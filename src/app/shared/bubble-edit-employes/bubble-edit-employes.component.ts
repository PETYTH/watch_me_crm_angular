import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bubble-edit-employes',
  templateUrl: './bubble-edit-employes.component.html',
  styleUrls: ['./bubble-edit-employes.component.scss']
})
export class BubbleEditEmployesComponent {
@Input()  valueLastName : string = '';
@Input()  valueFirstName : string = '';
@Input()  valueEmail : string = '';
@Input()  valueDateN : string = '';
@Input()  valuePhone : string = '';
@Input()  valueCodep : string = '';
@Input()  valueAdresse : string = '';
@Input()  valueVille : string = '';
}
