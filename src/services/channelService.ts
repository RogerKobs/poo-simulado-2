import { Channel } from '../classes/Channel';
import { IChannel } from '../interfaces/IChannel';

const url = 'http://localhost:3000';

export async function register_channel(channel: Channel) {
  await fetch(url + '/channels', {
    method: 'POST',
    body: JSON.stringify(channel),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function list_channel() {
  const response = await fetch(url + '/channels');
  const channels: IChannel[] = await response.json();

  return channels;
}
