import {store} from '../Store';

export function sampleAction() {
  return ({
    type: 'SAMPLE_ACTION',
    payload: true,
  });
}