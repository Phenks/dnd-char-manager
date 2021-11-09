import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Character } from 'src/app/_shared/character';

interface BeyondUrl {
  url: string;
}

@Component({
  selector: 'new-char',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewCharComponent implements OnInit {
  constructor() {}
  form = new FormGroup({});

  model: BeyondUrl = { url: '' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'url',
      type: 'input',
      templateOptions: {
        label: 'DnD Beyond Url',
        placeholder: 'Url',
        description:
          'Die Url die du auf der Character Seite bei DnD Beyond siehst',
        required: true,
      },
    },
  ];
  ngOnInit(): void {}

  loadCharacter(url: BeyondUrl) {
    alert('test');
  }
}
