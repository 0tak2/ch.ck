import Dexie from 'dexie';
import type { Table } from 'dexie';
import type { Chck } from './types';

export class SubClassedDexie extends Dexie {
  chcks!: Table<Chck>; 

  constructor() {
    super('chcks');
    this.version(1).stores({
      chcks: '++id, templateId, createdAt, modifiedAt, title'
    });
  }
}

export const db = new SubClassedDexie();
