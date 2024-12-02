import { Channel } from './Channel';
import { Owner } from './Owner';

export class Television {
  private model: string;
  brand?: string;
  private owner: Owner;
  channels?: Channel;

  constructor(model: string, owner: Owner) {
    if (model.length < 2) {
      throw new Error('Digite ao menos 3 caracteres para o modelo');
    }

    if (!owner) {
      throw new Error('Selecione um dono para esse televisor');
    }

    this.model = model;
    this.owner = owner;
  }

  getModel() {
    return this.model;
  }

  getOwner() {
    return this.owner;
  }

  setModel(model: string) {
    if (model.length < 2) {
      throw new Error('Digite ao menos 3 caracteres para o modelo');
    }

    this.model = model;
  }

  setOwner(owner: Owner) {
    if (!owner) {
      throw new Error('Selecione um dono para esse televisor');
    }

    this.owner = owner;
  }
}
