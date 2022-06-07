import { MAIN_URL } from './URL';
import axios from 'axios';

export function getMenu(){
    return axios.get(MAIN_URL);
}

