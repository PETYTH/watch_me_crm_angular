import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  employe_lname = '';
  employe_fname = '';
  employe_dateN = '';
  employe_email = '';
  employe_phone = '';
  employe_adresse = '';
  employe_codep = '';
  employe_ville = '';
}
