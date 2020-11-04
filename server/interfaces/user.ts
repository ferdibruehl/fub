interface user {
    firstname: string,
    lastname: string,
    birthday: string,
    privatContact: privatContact,
    companyid: string,
    userid: string,
    create: any,
    systemPermisions: any,
    contacts: Array<contacts>
}

interface privatContact {
    street: string,
    number: string,
    zip: string,
    contry: string,
    phonenumber: any,
    faxnumber: string,
    email: string,
    homepage: string
}

interface companyContact {
    street: string,
    number: string,
    zip: string,
    contry: string,
    phonenumber: any,
    faxnumber: string,
    email: string,
    homepage: string
}
/** userid und companyid müssen seperat überpruft werden ?!? -ganz schlecht! */
interface contacts{
    userid?: string,
    companyid?: string,
    contactsPermisions: contactsPermisions
}

interface contactsPermisions{
    privateAdress: boolean,
    privateContact: boolean,
    
}