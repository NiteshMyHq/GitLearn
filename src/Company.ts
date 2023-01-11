import { faker } from '@faker-js/faker';

export class company{
     name: string;
     phrase: string;
     location:
     {
        lat:number;
        long: number;
     }
     constructor()
     {
        this.name=faker.company.name();
        this.phrase=faker.company.catchPhrase();
        this.location=
        {
            lat: parseFloat(faker.address.longitude()),
            long:parseFloat(faker.address.latitude())
        }
     };
}
