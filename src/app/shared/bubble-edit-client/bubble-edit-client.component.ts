import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bubble-edit-client',
  templateUrl: './bubble-edit-client.component.html',
  styleUrls: ['./bubble-edit-client.component.scss']
})
export class BubbleEditClientComponent {
@Input()  valueNom : string = '';
@Input()  valuePrenom : string = '';
@Input()  valueDate : string = '';
@Input()  valuePhone : string = '';
@Input()  valueEmail : string = '';
@Input()  valueCodeP : string = '';
@Input()  valueAdresse : string = '';
@Input()  valueVille : string = '';
}
