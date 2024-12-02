import { Owner } from '../classes/Owner';
import { IOwner } from '../interfaces/IOwner';

const url = 'http://localhost:3000';

export async function register_owner(owner: Owner) {
  await fetch(url + '/owners', {
    method: 'POST',
    body: JSON.stringify(owner),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function list_owner() {
  const response = await fetch(url + '/owners');
  const owners: IOwner[] = await response.json();

  return owners;
}
