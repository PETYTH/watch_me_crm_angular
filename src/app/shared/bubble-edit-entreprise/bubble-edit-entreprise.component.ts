import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bubble-edit-entreprise',
  templateUrl: './bubble-edit-entreprise.component.html',
  styleUrls: ['./bubble-edit-entreprise.component.scss']
})
export class BubbleEditEntrepriseComponent {
@Input() valueNom : string = '';
@Input() valueSiret : string = '';
@Input() valueAffaire : string = '';
@Input() valueCodep : string = '';
@Input() valueAdresse : string = '';
@Input() valueVille : string = '';
}
