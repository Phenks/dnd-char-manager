import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CharactersService } from 'src/app/_services/characters.service';

interface BeyondUrl {
  url: string;
}

@Component({
  selector: 'new-char',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
})
export class NewCharComponent implements OnInit {
  constructor(private charService: CharactersService, private router: Router) {}
  form = new FormGroup({});
  model: BeyondUrl = { url: '' };
  options: FormlyFormOptions = {};
  isSubmitting = false;
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
    this.isSubmitting = true;
    this.charService
      .create(url.url)
      .subscribe((c) => this.router.navigate(['characters']));
  }
}
