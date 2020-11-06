import AddressType from "./AddressType";

class Address {
    //

     zipCode: string = "";
     zipAddress: string = "";
     streetAddress: string = "";
     country: string = "";
     addressType: AddressType;

    constructor(zipCode: string, zipAddress: string, streetAddress: string) {
        //
        this.zipCode = zipCode;
        this.zipAddress = zipAddress;
        this.streetAddress = streetAddress;
        this.country = "South KOREA";
        this.addressType = AddressType.Office;
    }

    

    static getHomeAddressSample = () => {
        //
        const address = new Address("134-321", "Seoul, Geumcheon-gu, Gasan-dong", "231");
        address.setAddressType(AddressType.Home);
        return address;
    }

    static getOfficeAddressSample = () => {
        //
        const address = new Address("131-111", "Seoul, Guro-gu, ilsan-dong", "223-201");
        return address
    }

    getZipCode = () => {
        //
        return this.zipCode
    }

    setZipCode = (zipCode: string) => {
        //
        this.zipCode = zipCode
    }

    getZipAddress = () => {
        //
        return this.zipAddress
    }

    setZipAddress = (zipAddress: string) => {
        //
        this.zipAddress = zipAddress
    }

    getStreetAddress = () => {
        //
        return this.streetAddress
    }

    setStreetAddress = (streetAddress: string) => {
        //
        this.streetAddress = streetAddress;
    }

    getCountry = () => {
        //
        return this.country
    }

    setCountry = (country: string) => {
        //
        this.country = country
    }

    getAddressType = () => {
        //
        return this.addressType
    }

    setAddressType = (addressType: AddressType) => {
        //
        this.addressType = addressType;
    }



}
export default Address