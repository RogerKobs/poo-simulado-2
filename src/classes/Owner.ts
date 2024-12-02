export class Owner {
  name: string;
  private phone?: string;

  constructor(name: string) {
    this.name = name;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(phone: string) {
    if (phone.length < 6) {
      throw new Error('O telefone deve possuir ao menos 6 dígitos');
    }

    this.phone = phone;
  }
}
