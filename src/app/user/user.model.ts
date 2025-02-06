import { AddressModel } from "./address/address.model";

export class UserModel{
    constructor(
        fname:string|null|undefined,
        lname:string|null|undefined,
        email:string|null|undefined,
        password:string|null|undefined,
        cnPassword:string|null|undefined,
        addressModel:AddressModel|null|undefined,
        plantInterest:string|null|undefined,
    )
    {}
}