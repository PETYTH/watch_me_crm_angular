import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bubble-edit-societe',
  templateUrl: './bubble-edit-societe.component.html',
  styleUrls: ['./bubble-edit-societe.component.scss']
})
export class BubbleEditSocieteComponent {
@Input() valueNom : string = '';
@Input() valueSiret : string = '';
@Input() valueAffaire : string = '';
@Input() valueCodep : string = '';
@Input() valueAdresse : string = '';
@Input() valueVille : string = '';
}
