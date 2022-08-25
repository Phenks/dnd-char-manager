import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../_shared/character';
import { ApiServiceBase } from './api-service-base';

@Injectable({
  providedIn: 'root',
})
export class ItemsService extends ApiServiceBase<Item> {
  constructor(http: HttpClient) {
    super(http, 'items');
  }
}
