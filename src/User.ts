import { faker } from '@faker-js/faker';

export class user{
    name: string;
    location:{
        long: number;
        lat: number;
    };
    constructor(){
        this.name=faker.name.firstName();
        this.location={
            long :parseFloat(faker.address.longitude()),
            lat : parseFloat(faker.address.latitude())
        };

    }
    
}
