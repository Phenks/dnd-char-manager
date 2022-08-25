import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core/public_api';
import { ItemsService } from 'src/app/_services/items.service';
import { Item } from 'src/app/_shared/character';

export interface ItemData {
  item: Item;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewComponent implements OnInit {
  form = new FormGroup({});
  model: Item = {
    value: 0,
    name: '',
    tradeable: true,
    description: '',
    imageUrl: '',
    bundleSize: 1,
    weight: 0,
    id: 0,
    dndBeyondId: 0,
    rarity: '',
  };
  submitting = false;
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Item Name',
        placeholder: "The Magician's Magical Sword of Magic",
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'HTML allowed!',
        required: true,
        rows: 3,
      },
    },
    {
      key: 'imageUrl',
      type: 'input',
      templateOptions: {
        label: 'Image (Url)',
        placeholder: 'www.free-dnd-images.com/amazing-sword.png',
      },
    },
    {
      key: 'value',
      type: 'input',
      templateOptions: {
        label: 'Value',
        placeholder: 'in Gold',
        type: 'number',
        required: true,
      },
    },
    {
      key: 'bundle_size',
      type: 'input',
      defaultValue: 1,
      templateOptions: {
        label: 'Bundle Size',
        type: 'number',
        required: true,
      },
    },
    {
      key: 'tradeable',
      type: 'toggle',
      templateOptions: {
        label: 'Tradeable',
      },
    },
    {
      key: 'rarity',
      type: 'select',
      templateOptions: {
        label: 'Rarity',
        placeholder: 'Choose One',
        required: true,
        options: [
          { value: 'Common', label: 'Common' },
          { value: 'Uncommon', label: 'Uncommon' },
          { value: 'Rare', label: 'Rare' },
          { value: 'Very Rare', label: 'Very Rare' },
          { value: 'Legendary', label: 'Legendary' },
        ],
      },
    },
  ];

  mode: 'post' | 'put' = 'post';

  ngOnInit(): void {}
  constructor(
    private itemService: ItemsService,
    public dialogRef: MatDialogRef<NewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemData
  ) {
    if (data) {
      this.mode = 'put';
      this.model = data.item;
    }
  }
  addItem(model: Item) {
    let request = this.itemService.create(model);
    this.submitting = true;
    request.subscribe(() => {
      this.submitting = false;
      this.dialogRef.close();
    });
  }

  updateItem(model: Item) {
    let request = this.itemService.update(model);
    this.submitting = true;
    request.subscribe(() => {
      this.submitting = false;
      this.dialogRef.close();
    });
  }
}
