import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-form',
  templateUrl: './icon-form.component.html',
  styleUrls: ['./icon-form.component.scss']
})
export class IconFormComponent {
  @Input() iconExit: string =  "";
  @Input() exitLink: string = "";
  @Input() iconForm: string =  "";
}
