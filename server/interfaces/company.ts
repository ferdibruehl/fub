interface company{
    name: string,
    rf: string,
    found: string,
    companyId: string,
    systemModule: Array<systemPermision>,
    companyBranches: Array<any>
}

interface systemModule{
    name: string
}

interface companyBranch{
    location: Array<any>
    employes: Array<any>
    user: Array<any>
    clients: Array<any>
    supplier: Array<any>
    buisnessField: Array<any>
}

interface employes{
    employesId: string,
    entryDate: string,
    personId: string,
    position: string,
    team: Array<any>,
    hours: any,
    sellery: any,
    
    orgigram: any,
    companyContact: companyContact
    /**weitere employe data.... */
}

interface user{
    userId: string,
    employesId: string,
    systemPermision: any
    /**employe nicht gleich user*/
}

interface systemPermision{
    systemPermisionGroup: Array<any>,
    systemPermission: Array<any>
}


interface companyContact {
    phonenumer: string,
    email: string,
    faxnumber: string
}

