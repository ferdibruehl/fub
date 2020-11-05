interface person {
    firstname: string,
    lastname: string,
    birthday: string,
    privatContact: privatContact,
    companyId: string,
    personId: string,
    createAccoutDate: any,
    systemPermisions: any,
    contacts: Array<contacts>
    /** weitere personbezogene Daten */
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

/** userid und companyid müssen seperat überpruft werden ?!? -ganz schlecht! */
interface contacts{
    userid?: string,
    companyid?: string,
    aaa: string, /** Privat --- Firma */
    contactGroup: Array<any>,
    contactsPermisions: contactsPermisions
}

interface contactsPermisions{
    releasePrivateAdress: boolean,
    releasePrivateContact: boolean,
    releaseCompanyContaact: boolean,
    releaseBirthday: boolean,
}

