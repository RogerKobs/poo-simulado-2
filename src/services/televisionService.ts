import { Television } from '../classes/Television';
import { ITelevision } from '../interfaces/ITelevision';

const url = 'http://localhost:3000';

export async function register_television(television: Television) {
  await fetch(url + '/televisions', {
    method: 'POST',
    body: JSON.stringify(television),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function list_television() {
  const response = await fetch(url + '/televisions');
  const televisions: ITelevision[] = await response.json();

  return televisions;
}
