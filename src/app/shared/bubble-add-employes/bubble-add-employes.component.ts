import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bubble-add-employes',
  templateUrl: './bubble-add-employes.component.html',
  styleUrls: ['./bubble-add-employes.component.scss']
})
export class BubbleAddEmployesComponent {
  @Input() afterValidationMessage : string = '';
}
