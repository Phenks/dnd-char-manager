import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';
import { Session } from 'src/app/_shared/session';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.less'],
})
export class NewSessionComponent implements OnInit {
  constructor() {}
  model: Partial<Session> = {
    description: '',
    name: '',
  };
  form = new FormGroup({});

  isSubmitting = false;
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: '',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: '',
        required: false,
        rows: 4,
      },
    },
    {
      key: 'minLevel',
      type: 'input',
      templateOptions: {
        label: 'Min Level',
        placeholder: '1',
        required: true,
      },
    },
    {
      key: 'maxLevel',
      type: 'input',
      templateOptions: {
        label: 'Max Level',
        placeholder: '3',
        required: true,
      },
    },
  ];
  ngOnInit(): void {}
  onCancel(): void {}

  submit() {}
}
