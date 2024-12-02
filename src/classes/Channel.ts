export class Channel {
  name: string;

  constructor(name: string) {
    if (!name) {
      throw new Error('O nome é obrigatório');
    }

    this.name = name;
  }
}
