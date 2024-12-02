import { Channel } from '../classes/Channel';
import { Owner } from '../classes/Owner';
import { Television } from '../classes/Television';
import { list_channel } from '../services/channelService';
import { list_owner } from '../services/ownerService';
import {
  list_television,
  register_television,
} from '../services/televisionService';

const input_model = document.getElementById('input_model') as HTMLInputElement;
const input_brand = document.getElementById('input_brand') as HTMLInputElement;
const select_owner = document.getElementById(
  'select_owner',
) as HTMLSelectElement;
const select_channel = document.getElementById(
  'select_channel',
) as HTMLSelectElement;

const button_register_television = document.getElementById(
  'button_register_television',
);
const button_list_television = document.getElementById(
  'button_list_television',
);

const table_body = document.getElementById('table_body');

render_owners();
render_channels();

async function render_owners() {
  let render_options = '';
  for (let owner of await list_owner()) {
    render_options += `
      <option value=${owner}>
        ${owner.name}
      </option>
    `;
  }

  select_owner.innerHTML = render_options;
}

async function render_channels() {
  let render_options = '';
  for (let channel of await list_channel()) {
    render_options += `
      <option value=${channel}>
        ${channel.name}
      </option>
    `;
  }

  select_channel.innerHTML = render_options;
}

function register() {
  try {
    const owner_name = select_owner.options[select_owner.selectedIndex]?.text;
    const channel_name =
      select_channel.options[select_channel.selectedIndex]?.text;

    const owner = new Owner(owner_name);
    const channel = new Channel(channel_name);

    const television = new Television(input_model.value, owner);
    television.channels = channel;
    television.brand = input_brand.value;

    register_television(television);
    alert('Televisor salvo com sucesso');
  } catch (err) {
    alert(err);
  }
}

async function list() {
  let render_table = '';
  for (let television of await list_television()) {
    render_table += `
      <tr>
        <td>${television.model}</td>
        <td>${television.brand}</td>
        <td>${television.owner.name}</td>
        <td>${television.channels.name}</td>
      </tr>
    `;
  }

  table_body!.innerHTML = render_table;
}

button_register_television?.addEventListener('click', register);
button_list_television?.addEventListener('click', list);
