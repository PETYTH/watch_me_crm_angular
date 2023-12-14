import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bubble-edit-commandes',
  templateUrl: './bubble-edit-commandes.component.html',
  styleUrls: ['./bubble-edit-commandes.component.scss']
})
export class BubbleEditCommandesComponent {
@Input()  valueNumero : string = '';
@Input()  valueDate : string = '';
@Input()  valuePaiement : string = '';
@Input()  valueCodep : string = '';
@Input()  valueAdresse : string = '';
@Input()  valueVille : string = '';
}
