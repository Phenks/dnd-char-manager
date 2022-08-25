import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map } from 'rxjs';
import { CharactersService } from 'src/app/_services/characters.service';

export interface CharacterSelect {
  characterId: number;
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
})
export class SelectComponent implements OnInit {
  constructor(private charService: CharactersService) {}
  form = new FormGroup({});
  model: CharacterSelect = { characterId: 0 };
  isSubmitting = false;
  fields: FormlyFieldConfig[] = [
    {
      key: 'characterId',
      type: 'select',
      templateOptions: {
        options: this.charService.data$.pipe(
          map((data) =>
            data.map((char) => {
              return { value: char.id, label: char.name };
            })
          )
        ),
        required: true,
      },
    },
  ];
  ngOnInit(): void {}
}
