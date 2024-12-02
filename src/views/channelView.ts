import { Channel } from '../classes/Channel';
import { list_channel, register_channel } from '../services/channelService';

const input_name = document.getElementById('input_name') as HTMLInputElement;
const button_register_channel = document.getElementById(
  'button_register_channel',
);
const button_list_channel = document.getElementById('button_list_channel');

const table_body = document.getElementById('table_body');

function register() {
  try {
    const channel = new Channel(input_name.value);
    register_channel(channel);

    alert('Canal registrado com sucesso');
  } catch (err) {
    alert(err);
  }
}

async function list() {
  let render_table = '';
  for (let channel of await list_channel()) {
    render_table += `
      <tr>
        <td>${channel.name}</td>
      </tr>
    `;
  }

  table_body!.innerHTML = render_table;
}

button_register_channel?.addEventListener('click', register);
button_list_channel?.addEventListener('click', list);
