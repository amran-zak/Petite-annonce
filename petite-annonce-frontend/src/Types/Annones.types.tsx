export default interface AnnonceData {

    titreAnnonce: null | FormDataEntryValue | String,
    adresse_complet: null | FormDataEntryValue | String,
    description: null | FormDataEntryValue | String,

    Typeannonce: null | FormDataEntryValue | String,
    Typebien: null | FormDataEntryValue | String,
    // Meuble: null | FormDataEntryValue | String,
    surfaceValue: null | FormDataEntryValue | Number,
    roomValue: null | FormDataEntryValue | Number,
    ValueGarden: null | FormDataEntryValue | String,
    dpeValue: null | FormDataEntryValue | Number,
    gesValue: null | FormDataEntryValue | Number,
    prixValue: null | FormDataEntryValue | Number,
    
    Chargescomp?: null | FormDataEntryValue | Number,
    pieceValue?: null | FormDataEntryValue | Number,

    wcValue?: null | FormDataEntryValue | Number,
    bathroomValue?: null | FormDataEntryValue | Number,

    personValue?: null | FormDataEntryValue | Number,

    fraisValue?: null | FormDataEntryValue | Number,
    chargesValue?: null | FormDataEntryValue | Number,
    detailsAnnonceAirbnb?: null | FormDataEntryValue | String,


    images?: null | FormDataEntryValue | String
}