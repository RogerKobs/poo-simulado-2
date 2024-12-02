import { Channel } from '../classes/Channel';
import { Owner } from '../classes/Owner';

export interface ITelevision {
  id: number;
  model: string;
  brand: string;
  owner: Owner;
  channels: Channel;
}
