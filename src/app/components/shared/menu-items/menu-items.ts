import { Injectable } from '@angular/core';

export interface Levels {
  key: string;
  name: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  levels: Array<Levels>
}

const MENUITEMS: Menu[] = [
  {
    state: 'home',
    name: 'Dashboard',
    type: 'link',
    icon: 'widgets',
    levels: []
  },

  {
    state: 'dashboard',
    name: 'Adicionar Produto',
    type: 'link',
    icon: 'post_add',
    levels: [{
      key: 'level_1',
      name: 'Level 1'
    },
    {
      key: 'level_2',
      name: 'Level 2'
    }]
  },

  {
    state: 'tables',
    name: 'Produtos',
    type: 'link',
    icon: 'shopping_basket',
    levels: [{
      key: 'level_1',
      name: 'Level 1'
    }]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
