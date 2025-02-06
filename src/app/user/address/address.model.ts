
export class AddressModel {
    constructor(
        public street:string|null|undefined,
        public addressLine2:string|null|undefined,
        public city:string|null|undefined,
        public state:string|null|undefined,
        public zipCode:string|null|undefined,
        public country:string|null|undefined,
        public pNumber:string|null|undefined,
    ) {}
  }