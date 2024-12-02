import { Owner } from '../classes/Owner';
import { list_owner, register_owner } from '../services/ownerService';

const input_name = document.getElementById('input_name') as HTMLInputElement;
const input_phone = document.getElementById('input_phone') as HTMLInputElement;

const button_register_owner = document.getElementById('button_register_owner');
const button_list_owner = document.getElementById('button_list_owner');

const table_body = document.getElementById('table_body');

function register() {
  try {
    const owner = new Owner(input_name.value);
    owner.setPhone(input_phone.value);
    register_owner(owner);

    alert('Dono cadastrado com sucesso');
  } catch (err) {
    alert(err);
  }
}

async function list() {
  let render_table = '';
  for (let owner of await list_owner()) {
    render_table += `
      <tr>
        <td>${owner.name}</td>
        <td>${owner.phone}</td>
      </tr>
    `;
  }

  table_body!.innerHTML = render_table;
}

button_register_owner?.addEventListener('click', register);
button_list_owner?.addEventListener('click', list);
