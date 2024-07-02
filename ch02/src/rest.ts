import { count } from "console";

let address: any = {
    country : 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Singsa-dong 123-456',
    address3: '789 street, 2 Floor ABC building'
}

const {country, city, ... detail} = address;

let coord = {...{x:0}, ...{y:1}}

console.log(detail);
console.log(coord);