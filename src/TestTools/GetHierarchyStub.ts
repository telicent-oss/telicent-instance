export const GetHierarchyStub = () => [
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WebResource"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Any http presence on the web"
    },
    "subLabel": {
      "type": "literal",
      "value": "Web Resource"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is either man-made (or defined - see Rights) or whose extent is defined in such a way as to specify ownership - e.g. a parcel of real estate"
    },
    "subLabel": {
      "type": "literal",
      "value": "Asset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is a geographic place which specifies a point or an area on the Earths surface or elsewhere."
    },
    "subLabel": {
      "type": "literal",
      "value": "Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is a geographic place which specifies a point or an area on the Earth's surface or elsewhere."
    },
    "subLabel": {
      "type": "literal",
      "value": "Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Actor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is capable of performing functions - i.e. actively participating in an Event."
    },
    "subLabel": {
      "type": "literal",
      "value": "Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Religion"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity whose extent is all the people (PersonState) who share the same belief.Religions may be part of other religions - e.g. Christianity being made up of Catholic, Protestant, Orthodox, etc. 1. The religion �practiced� by the respective Person..2. The religion may be qualified to identity a particular sect.3. The Metropolitan Police standard [F] shall be used as the reference data standard"
    },
    "subLabel": {
      "type": "literal",
      "value": "Religion"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Religion"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity whose extent is all the people (PersonState) who share the same belief.\n\nReligions may be part of other religions - e.g. Christianity being made up of Catholic, Protestant, Orthodox, etc. \n\n1. The religion ‘practiced’ by the respective Person..\n2. The religion may be qualified to identity a particular sect.\n3. The Metropolitan Police standard [F] shall be used as the reference data standard"
    },
    "subLabel": {
      "type": "literal",
      "value": "Religion"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Account"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is the collection of all transactions between a provider and a customer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelephoneAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsAccount that is used to administer the use of one or more telephone numbers."
    },
    "subLabel": {
      "type": "literal",
      "value": "Telephone Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EmailAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsAccount that is used to administer the use of one or more e-mail addresses."
    },
    "subLabel": {
      "type": "literal",
      "value": "Email Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#JointAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FinancialAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A FinancialAccount held by more than one person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Joint Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Passport"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IdentityDocument that confirms a Persons nationality and permits them to cross national boundaries"
    },
    "subLabel": {
      "type": "literal",
      "value": "Passport"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Passport"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IdentityDocument that confirms a Person's nationality and permits them to cross national boundaries"
    },
    "subLabel": {
      "type": "literal",
      "value": "Passport"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BirthCertificate"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IdentityDocument issued to prove the data and place of birth of a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Birth Certificate"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NationalIdentityCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IdentityDocument issued by a Government to identify a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "National Identity Card"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelVisa"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IdentityDocument, usually attached to a Passport, which allows a Person to remain in a Country for a set period of time. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Visa"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DrivingLicence"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IdentityDocument that permits a Person to drive a Vehicle in the Country of issue. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Driving Licence"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccountState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an OnlineAccount"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Account State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccountState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a CommunicationsAccount"
    },
    "subLabel": {
      "type": "literal",
      "value": "Communications Account State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Account"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is the collection of all transactions between a provider and a customer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#UnitOfMeasure"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfMeasureValue that is used to quantify a Measure on a standard scale"
    },
    "subLabel": {
      "type": "literal",
      "value": "Unit Of Measure"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CBRadioHandset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsDevice used to hold radio conversations on frequencies allocated as Citizen Band"
    },
    "subLabel": {
      "type": "literal",
      "value": "CBRadio Handset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CBRadioHandset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsDevice used to hold radio conversations on frequencies allocated as \"Citizen Band\""
    },
    "subLabel": {
      "type": "literal",
      "value": "CBRadio Handset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SatellitePhoneHandset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsDevice that communicates via satellite. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Satellite Phone Handset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPPhoneHandset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subLabel": {
      "type": "literal",
      "value": "IPPhone Handset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LocationTransponder"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LandlineHandset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsDevice that connects using fixed line telecommunications"
    },
    "subLabel": {
      "type": "literal",
      "value": "Landline Handset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SIMCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsDevice that holds data about a IMSI"
    },
    "subLabel": {
      "type": "literal",
      "value": "SIMCard"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MobileHandset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsDevice that is a portable telephone using cellular networks"
    },
    "subLabel": {
      "type": "literal",
      "value": "Mobile Handset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonalRadioHandset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsDevice for portable radio communications - e.g. a walkie-talkie"
    },
    "subLabel": {
      "type": "literal",
      "value": "Personal Radio Handset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfElement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An rdfs:Class and an ExchangedItem whose instances are classes of classes of Element"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Class Of Element"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ExchangedItem that has a spatial extent and can have start and end dates"
    },
    "subLabel": {
      "type": "literal",
      "value": "Element"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An rdfs:Class and an ExchangedItem whose instances are classes of Element\n\nExamples:\n\n\nHuman groupings (e.g. Nigerian Women, British Men, Righthanded people, English Speakers);\nPolitical Ideologies\nWeapons\nDays of the week\nStandard procedures\netc.\n"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Element"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An rdfs:Class and an ExchangedItem whose instances are classes of ElementExamples:\tHuman groupings (e.g. Nigerian Women, British Men, Righthanded people, English Speakers);\tPolitical Ideologies\tWeapons\tDays of the week\tStandard procedures\tetc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Element"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PeaceTreaty"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Treaty"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Treaty that formalises the end of hostilities in a War"
    },
    "subLabel": {
      "type": "literal",
      "value": "Peace Treaty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A unique Identifier for an Organisation (more usually an OrganisationState)Example:DUNS numberVAT numberCompanies House NumberRegistered Charity Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ISO639-3Code"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "ISO639-3 three-letter language code"
    },
    "subLabel": {
      "type": "literal",
      "value": "ISO639-3Code"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataKey"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A unique key (usually only unique within a Database, though it could be a GUID) that identifies a DataObject"
    },
    "subLabel": {
      "type": "literal",
      "value": "Data Key"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A unique Identifier for the a ModelOfDevice\n\nNote:  this is different to a serial number which is unique to each Device"
    },
    "subLabel": {
      "type": "literal",
      "value": "Part Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A unique Identifier for the a ModelOfDeviceNote:  this is different to a serial number which is unique to each Device"
    },
    "subLabel": {
      "type": "literal",
      "value": "Part Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SeatNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The number of the seat that the Passenger should be travelling in. Whilst this partially identifies the Passenger, there is no guarantee that people have not swapped seats. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Seat Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegistrationNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The registration number for the respective Vehicle (with or without spaces).\n\nFor road vehicles this is often referred to as the VRN (vehicle registration number).\n\nFor aircraft the tail number is often used as a means of identification and/or registration."
    },
    "subLabel": {
      "type": "literal",
      "value": "Registration Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegistrationNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The registration number for the respective Vehicle (with or without spaces).For road vehicles this is often referred to as the VRN (vehicle registration number).For aircraft the tail number is often used as a means of identification and/or registration."
    },
    "subLabel": {
      "type": "literal",
      "value": "Registration Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Name of the respective Vehicle (if applicable) � often this only applies to ships/boats. Examples:The Saucy SueThe Bountiful Blumpkin"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Name of the respective Vehicle (if applicable) – often this only applies to ships/boats. \n\nExamples:\n\nThe Saucy Sue\nThe Bountiful Blumpkin"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelServiceIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Identifier for the respective Travel Service – this is how humans would usually refer to the service \n\nNote however that often this identifier does not, on its own, uniquely identify any given instance of a travel service – e.g. Flight BA0010 is reused on a daily basis to refer to the flight between London Heathrow and Los Angeles. As such, to uniquely identify any given instance of a Travel Service you would need to combine it with other attributes – typically departure date/time.\n\nFor Flights, this will be the Flight Number.\n\nFor Ferry Sailings this is typically the name of the vessel that is scheduled to make that sailing and, when combined with the departure date/time can be used to uniquely identify that sailing. Note that if the actual vessel that makes the sailing is different to that which was scheduled (e.g. as result of the scheduled vessel being out of commission), this identifier is not modified."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Service Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelServiceIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Identifier for the respective Travel Service � this is how humans would usually refer to the service Note however that often this identifier does not, on its own, uniquely identify any given instance of a travel service � e.g. Flight BA0010 is reused on a daily basis to refer to the flight between London Heathrow and Los Angeles. As such, to uniquely identify any given instance of a Travel Service you would need to combine it with other attributes � typically departure date/time.For Flights, this will be the Flight Number.For Ferry Sailings this is typically the name of the vessel that is scheduled to make that sailing and, when combined with the departure date/time can be used to uniquely identify that sailing. Note that if the actual vessel that makes the sailing is different to that which was scheduled (e.g. as result of the scheduled vessel being out of commission), this identifier is not modified."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Service Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BranchCode"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "In identifier for a BankBranch - In the UK this is often referred to as the Sort Code."
    },
    "subLabel": {
      "type": "literal",
      "value": "Branch Code"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The account number for the respective FinancialAccount."
    },
    "subLabel": {
      "type": "literal",
      "value": "Account Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Username"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Identity for an account registered with an internet-based service.\n\nAn email address can be used as an online identifier for a specific domain (like Facebook). Where this is the case it can be considered to be both an instance of an email address and an instance of a username for an online identity."
    },
    "subLabel": {
      "type": "literal",
      "value": "Username"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Username"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Identity for an account registered with an internet-based service.An email address can be used as an online identifier for a specific domain (like Facebook). Where this is the case it can be considered to be both an instance of an email address and an instance of a username for an online identity."
    },
    "subLabel": {
      "type": "literal",
      "value": "Username"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ReferenceNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier used to uniquely identity a document."
    },
    "subLabel": {
      "type": "literal",
      "value": "Reference Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoardingCardNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The number of the boarding card issued to the Passenger. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Boarding Card Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OffenceCode"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier for a ClassOfCriminalActivity\n\nThe Home Office Offence Classification Index [B] should be used wherever possible to specify the Crime Type"
    },
    "subLabel": {
      "type": "literal",
      "value": "Offence Code"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OffenceCode"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier for a ClassOfCriminalActivityThe Home Office Offence Classification Index [B] should be used wherever possible to specify the Crime Type"
    },
    "subLabel": {
      "type": "literal",
      "value": "Offence Code"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CardNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier that is the long number on the face of the card (PaymentArtefact)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Card Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingReference"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier that is  notionally unique number that is allocated to a TravelBooking.Note that Booking Reference Numbers are recycled and so are not unique in their own right. When combined with the BookingDate it is potentially possible to identify a specific booking."
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Reference"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingReference"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier that is  notionally unique number that is allocated to a TravelBooking.\n\nNote that Booking Reference Numbers are recycled and so are not unique in their own right. When combined with the BookingDate it is potentially possible to identify a specific booking."
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Reference"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IndividualDocumentID"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier used to uniquely identify an IndividualDocument"
    },
    "subLabel": {
      "type": "literal",
      "value": "Individual Document ID"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier for the end-point of a communication "
    },
    "subLabel": {
      "type": "literal",
      "value": "Communications Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SerialNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier for Device that has been assigned at manufacture.Example Value:123ABC456DEF"
    },
    "subLabel": {
      "type": "literal",
      "value": "Serial Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SerialNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier for Device that has been assigned at manufacture.\n\nExample Value:\n\n123ABC456DEF"
    },
    "subLabel": {
      "type": "literal",
      "value": "Serial Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IBAN"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier that is an International Bank Account NumberSee ISO 13616:2007"
    },
    "subLabel": {
      "type": "literal",
      "value": "IBAN"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IBAN"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier that is an International Bank Account Number\n\nSee ISO 13616:2007"
    },
    "subLabel": {
      "type": "literal",
      "value": "IBAN"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleIdentificationNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "VIN – Vehicle Identification Number.\n\nFor road vehicles this is often directly referred to as the VIN, but this can also be applied in a generic fashion to other vehicle types.\n\nISO 3833 for road vehicles (17-digits)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle Identification Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleIdentificationNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "VIN � Vehicle Identification Number.For road vehicles this is often directly referred to as the VIN, but this can also be applied in a generic fashion to other vehicle types.ISO 3833 for road vehicles (17-digits)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle Identification Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A unique Identifier attributed to the respective Location"
    },
    "subLabel": {
      "type": "literal",
      "value": "Geo Identity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CustomerIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The customer identifier associated with the Financial Account.\n\nA single Customer Identity could be associated with more than one Financial Account managed by the same provider."
    },
    "subLabel": {
      "type": "literal",
      "value": "Customer Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CustomerIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The customer identifier associated with the Financial Account.A single Customer Identity could be associated with more than one Financial Account managed by the same provider."
    },
    "subLabel": {
      "type": "literal",
      "value": "Customer Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#URL"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier for a WebResource"
    },
    "subLabel": {
      "type": "literal",
      "value": "URL"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NationalIdentityNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier of a Person that is specified by a GovernmentOrganisation "
    },
    "subLabel": {
      "type": "literal",
      "value": "National Identity Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VersionNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The number or code that identifies a VersionOfDocument."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TeleConference"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#InteractiveCommunication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An InteractiveCommunication where 2 or more parties communicate using audio"
    },
    "subLabel": {
      "type": "literal",
      "value": "Tele Conference"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VoiceCall"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#InteractiveCommunication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An InteractiveCommunication by voice"
    },
    "subLabel": {
      "type": "literal",
      "value": "Voice Call"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Measure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Measure specified in the International system of quantities"
    },
    "subLabel": {
      "type": "literal",
      "value": "Standard Measure"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MeasureRange"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Measure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Measure specified by upper and lower bound Measures"
    },
    "subLabel": {
      "type": "literal",
      "value": "Measure Range"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfEntity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of ClassOfEntity"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Class Of Entity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfCharacteristic"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEventEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#FunctionalProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of functional properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "FunctionalProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#DeprecatedProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of deprecated properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "DeprecatedProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#DatatypeProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of data properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "DatatypeProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#AnnotationProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of annotation properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "AnnotationProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of container membership properties, rdf:_1, rdf:_2, ...,\n                    all of which are sub-properties of 'member'."
    },
    "subLabel": {
      "type": "literal",
      "value": "ContainerMembershipProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#OntologyProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of ontology properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "OntologyProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of object properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "ObjectProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Likes"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Interested"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Interested State where a ResponsibleActor likes something"
    },
    "subLabel": {
      "type": "literal",
      "value": "Likes"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Hates"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Interested"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Interested state where a ResponsibleActor hates something"
    },
    "subLabel": {
      "type": "literal",
      "value": "Hates"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Dislikes"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Interested"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Interested state where a ResponsibleActor dislikes something"
    },
    "subLabel": {
      "type": "literal",
      "value": "Dislikes"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Loves"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Interested"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A interestedIn relationship where a Person loves another Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Loves"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LeadInvestigator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Investigator"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Investigator who is charge of an Investigation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Lead Investigator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Temperature"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of the thermodynamic temperature of an Element"
    },
    "subLabel": {
      "type": "literal",
      "value": "Temperature"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Length"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of distance as specified by the International System of Quantities"
    },
    "subLabel": {
      "type": "literal",
      "value": "Length"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of radiated light"
    },
    "subLabel": {
      "type": "literal",
      "value": "Luminous Intensity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Duration"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of an Element's temporal extent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Duration"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Duration"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of an Elements temporal extent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Duration"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AmountOfSubstance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of the stoichiometric quantity of substance (usually measured in moles)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Amount Of Substance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Mass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of an Entity's resistance to acceleration as specified by the International System of Quantities"
    },
    "subLabel": {
      "type": "literal",
      "value": "Mass"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Mass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of an Entitys resistance to acceleration as specified by the International System of Quantities"
    },
    "subLabel": {
      "type": "literal",
      "value": "Mass"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricCurrent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of the flow of electric chargeNote: whilst this is a tricky Measure in a 4D ontology, it should be used in a niaive manner - i.e. a measure of a State of an Entity when the current is flowing through it."
    },
    "subLabel": {
      "type": "literal",
      "value": "Electric Current"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricCurrent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasure"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Measure of the flow of electric charge\n\nNote: whilst this is a tricky Measure in a 4D ontology, it should be used in a niaive manner - i.e. a measure of a State of an Entity when the current is flowing through it."
    },
    "subLabel": {
      "type": "literal",
      "value": "Electric Current"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#InteractiveCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Communication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Communication that occurs synchronously - e.g. a video or voice call"
    },
    "subLabel": {
      "type": "literal",
      "value": "Interactive Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Message"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Communication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Communication or OnlineContentEvent where a message is sent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Message"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FoundOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Create"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Create Event where an Organisation is founded"
    },
    "subLabel": {
      "type": "literal",
      "value": "Found Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Forgery"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Create"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CriminalActivity that is the creation of fake items(also a subclass of Create). "
    },
    "subLabel": {
      "type": "literal",
      "value": "Forgery"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Forgery"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Create"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CriminalActivity that is the creation of fake items\n\n(also a subclass of Create). "
    },
    "subLabel": {
      "type": "literal",
      "value": "Forgery"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentCreation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Create"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineContentEvent where a \"post\" is made.\n\nExamples:\n\n* Posting a blog\n* Posting a comment\n* Tweeting (other microblogs are available, probably)\n* A Facebook, LinkedIn, Instagram, etc. post"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Content Creation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentCreation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Create"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineContentEvent where a post is made.Examples:* Posting a blog* Posting a comment* Tweeting (other microblogs are available, probably)* A Facebook, LinkedIn, Instagram, etc. post"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Content Creation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfMoneyTransfer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of MoneyTransferExamples:* BACS* CHAPS* Paypal payment"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Money Transfer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfMoneyTransfer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of MoneyTransfer\n\nExamples:\n\n* BACS\n* CHAPS\n* Paypal payment"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Money Transfer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfTravelBooking"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of TravelBooking\n\nExamples:\n\nINTERNET Booking\nTELEPHONE Booking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Travel Booking"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfTravelBooking"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of TravelBookingExamples:INTERNET BookingTELEPHONE Booking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Travel Booking"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfCriminalActivity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of CriminalActivityExample instances:* Burglary* Fraud* Murder* Driving sheep across London Bridge if not a freeman of the City* Being Welsh inside the walls of Chester outside daylight hours"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Criminal Activity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfCriminalActivity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of CriminalActivity\n\nExample instances:\n\n* Burglary\n* Fraud\n* Murder\n* Driving sheep across London Bridge if not a freeman of the City\n* Being Welsh inside the walls of Chester outside daylight hours"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Criminal Activity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisedEventClass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfEvent where the type activity described is either authorised or required to be authorised.An instance of an AuthorisedEventClass will most often also be a TimeBoundedClass as it is rare to see requests or grants of authority with no time limit. An AuthorisedEventClass will usually be of the form of Event type A against Entity X = e.g. Arrest of John Smith, Surveillance of 23 Acacia Gardens. The link from this class to the entity involved is via the allAuthorisedAgainst relationship."
    },
    "subLabel": {
      "type": "literal",
      "value": "Authorised Event Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisedEventClass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfEvent where the type activity described is either authorised or required to be authorised."
    },
    "subLabel": {
      "type": "literal",
      "value": "Authorised Event Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfOperationalEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of OperationalEventExamples:* Counter-Narcotics Operation* Murder Investigation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OilFiredPowerGenerationComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricalPowerGenerationComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhotovoltaicPowerGenerationComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricalPowerGenerationComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BiomassPowerGenerationComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricalPowerGenerationComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VoipAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TelephoneAccount where the voice communication is over IP. This may also include video communication, screen sharing, etc. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Voip Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EmailAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsAccount that is used to administer the use of one or more e-mail addresses."
    },
    "subLabel": {
      "type": "literal",
      "value": "Email Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Treaty"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndAgreement that is between Nations and subject to international law"
    },
    "subLabel": {
      "type": "literal",
      "value": "Treaty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalAgreement that sets tariffs and standards for trade between nations. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Trade Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IncarceratingOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisations's role in incarcerating a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incarcerating Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IncarceratingOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisationss role in incarcerating a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incarcerating Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prisoner"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A persons role when incarcerated"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prisoner"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prisoner"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A person's role when incarcerated"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prisoner"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Witness"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons role as a witness in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Witness"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Witness"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's role as a witness in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Witness"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArrestingOfficer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons role as arresting officer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arresting Officer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArrestingOfficer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's role as arresting officer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arresting Officer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BirthState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the beginning of a Person's life.\n\nThe location of the birth can be specified using inLocation\n\nThe date/time of the birth can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Birth State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BirthState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the beginning of a Persons life.The location of the birth can be specified using inLocationThe date/time of the birth can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Birth State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attendance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Presence where the Person is presentNote - we may not know the identity of the person, so would just create only the Attendance (EventParticipant). This allows the model to grow as more information is discovered without recourse to using sameAs relationships."
    },
    "subLabel": {
      "type": "literal",
      "value": "Attendance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attendance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Presence where the Person is present\n\nNote - we may not know the identity of the person, so would just create only the Attendance (EventParticipant). This allows the model to grow as more information is discovered without recourse to using sameAs relationships."
    },
    "subLabel": {
      "type": "literal",
      "value": "Attendance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonState (and an EventParticipant) when a Person is involved in communicating. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Person In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Person"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A human being, living or dead. This also includes what may appear to be a person, but is in fact an Alias"
    },
    "subLabel": {
      "type": "literal",
      "value": "Person"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Married"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State when a Person is married to another person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Married"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeathState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the end of a Persons lifeThe location of the death can be specified using inLocationThe date/time of the death can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Death State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeathState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the end of a Person's life\n\nThe location of the death can be specified using inLocation\n\nThe date/time of the death can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Death State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrested"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons role when arrested"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrested"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrested"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's role when arrested"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrested"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RoadVehicle"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Vehicle that travels by road (surprisingly enough)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Road Vehicle"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Ship"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Vehicle that travels on water"
    },
    "subLabel": {
      "type": "literal",
      "value": "Ship"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Aircraft"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Vehicle that travels by air"
    },
    "subLabel": {
      "type": "literal",
      "value": "Aircraft"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vessel"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Sailing"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Transit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TravelService by sea"
    },
    "subLabel": {
      "type": "literal",
      "value": "Sailing"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TrainTravel"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Transit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TravelService by rail"
    },
    "subLabel": {
      "type": "literal",
      "value": "Train Travel"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Flight"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Transit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TravelService by air"
    },
    "subLabel": {
      "type": "literal",
      "value": "Flight"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CarTravel"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Transit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TravelService by car"
    },
    "subLabel": {
      "type": "literal",
      "value": "Car Travel"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Measure"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Characteristic"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Characteristic which is measurable on a scale"
    },
    "subLabel": {
      "type": "literal",
      "value": "Measure"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Accent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Characteristic"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Characteristic whose members are people who all share the same national or regional accent"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Colour"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Characteristic"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Characteristic whose members all have the same colour"
    },
    "subLabel": {
      "type": "literal",
      "value": "Colour"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ValueInAmperes"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A StandardMeasureValue for ElectricCurrent in amperes"
    },
    "subLabel": {
      "type": "literal",
      "value": "Value In Amperes"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ValueInMetres"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A StandardMeasureValue for Length in metres"
    },
    "subLabel": {
      "type": "literal",
      "value": "Value In Metres"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ValueInKelvin"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A StandardMeasureValue for Temperature in kelvin"
    },
    "subLabel": {
      "type": "literal",
      "value": "Value In Kelvin"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ValueInCandela"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A StandardMeasureValue for LuminousIntensity in candela"
    },
    "subLabel": {
      "type": "literal",
      "value": "Value In Candela"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ValueInMoles"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A StandardMeasureValue for AmountOfSubstance in moles"
    },
    "subLabel": {
      "type": "literal",
      "value": "Value In Moles"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ValueInSeconds"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A StandardMeasureValue for Duration in seconds"
    },
    "subLabel": {
      "type": "literal",
      "value": "Value In Seconds"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ValueInKilograms"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A StandardMeasureValue for Mass in kilograms"
    },
    "subLabel": {
      "type": "literal",
      "value": "Value In Kilograms"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Investigator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Operator"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Operator role where a Person is an investigator"
    },
    "subLabel": {
      "type": "literal",
      "value": "Investigator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PointOnEarthSurface"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoPoint"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is a point (mathematically speaking, of vanishing area) on the surface of the WGS84 spheroid"
    },
    "subLabel": {
      "type": "literal",
      "value": "Point On Earth Surface"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Airport"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Port"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Port used for air travel"
    },
    "subLabel": {
      "type": "literal",
      "value": "Airport"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FerryPort"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Port"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfFinancialAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of FinancialAccount\n\nExamples:\n\n* Savings Account\n* Current Account\n* Credit Card Account"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Financial Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfFinancialAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of FinancialAccountExamples:* Savings Account* Current Account* Credit Card Account"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Financial Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Departure"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant and a BoundingState that marks the start of a Travel eventThe date/time of the departure can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Departure"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Departure"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant and a BoundingState that marks the start of a Travel event\n\nThe date/time of the departure can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Departure"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BirthState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the beginning of a Person's life.\n\nThe location of the birth can be specified using inLocation\n\nThe date/time of the birth can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Birth State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BirthState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the beginning of a Persons life.The location of the birth can be specified using inLocationThe date/time of the birth can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Birth State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeathState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the end of a Persons lifeThe location of the death can be specified using inLocationThe date/time of the death can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Death State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeathState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the end of a Person's life\n\nThe location of the death can be specified using inLocation\n\nThe date/time of the death can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Death State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Created"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is created\n\nThe date/time of the creation can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Created"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Created"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is createdThe date/time of the creation can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Created"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrival"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the end of a Movement event\n\nThe date/time of the arrival can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrival"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrival"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BoundingState that marks the end of a Movement eventThe date/time of the arrival can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrival"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LowVoltageElectricitySubstationComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricalPowerDistributionComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#HighVoltageElectricitySubstationComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricalPowerDistributionComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookedPassenger"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons involvement as a booked traveller in a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booked Passenger"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookedPassenger"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's involvement as a booked traveller in a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booked Passenger"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Interested"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActorState where the Actor is interested in something"
    },
    "subLabel": {
      "type": "literal",
      "value": "Interested"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Accused"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActors role as the accused in a Prosecution"
    },
    "subLabel": {
      "type": "literal",
      "value": "Accused"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Accused"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor's role as the accused in a Prosecution"
    },
    "subLabel": {
      "type": "literal",
      "value": "Accused"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Person State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an Organisation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisation State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingAgent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActors involvement as the facilitator of a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Agent"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingAgent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor's involvement as the facilitator of a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Agent"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Cooperator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is in Cooperation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Cooperator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#InPost"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a ResponsibleActor when they are in a Post"
    },
    "subLabel": {
      "type": "literal",
      "value": "In Post"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Actor that can be held legally responsible for their actions - generally a Person or an Organisation. This also includes Posts which may be filled by people or organisations.Note: there are many situations (mostly due to the law) where a Person or Organisation can be the subject of a relationship or Event interchangeably. Hence the need for a parent class in the IES ontology. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Responsible Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Actor that can be held legally responsible for their actions - generally a Person or an Organisation. This also includes Posts which may be filled by people or organisations.\n\nNote: there are many situations (mostly due to the law) where a Person or Organisation can be the subject of a relationship or Event interchangeably. Hence the need for a parent class in the IES ontology. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Responsible Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Competitor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is in competition"
    },
    "subLabel": {
      "type": "literal",
      "value": "Competitor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PostState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a Post"
    },
    "subLabel": {
      "type": "literal",
      "value": "Post State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prosecutor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A persons role as a prosecutor in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prosecutor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prosecutor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A person's role as a prosecutor in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prosecutor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountHolder"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonState when they hold an Account"
    },
    "subLabel": {
      "type": "literal",
      "value": "Account Holder"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SchemaObject"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is a standardised plan or outline for something.e.g. Bristol City Street Furniture Schema"
    },
    "subLabel": {
      "type": "literal",
      "value": "Schema Object"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SchemaObject"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is a standardised plan or outline for something.\n\ne.g. Bristol City Street Furniture Schema"
    },
    "subLabel": {
      "type": "literal",
      "value": "Schema Object"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoObject"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject and a GeoRepresentation that contains geographical information"
    },
    "subLabel": {
      "type": "literal",
      "value": "Geo Object"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Database"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is the contents of an entire database (note this is still a class, as there may be many copies of the database)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Database"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DatabaseItem"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is part of the data in a Database\n\nExamples:\n\n* A table, row, column in RDBMS\n* A document in a document db\n* a key-value pair in KVDB\n* named graph in a graph db"
    },
    "subLabel": {
      "type": "literal",
      "value": "Database Item"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DatabaseItem"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is part of the data in a DatabaseExamples:* A table, row, column in RDBMS* A document in a document db* a key-value pair in KVDB* named graph in a graph db"
    },
    "subLabel": {
      "type": "literal",
      "value": "Database Item"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MediaFile"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is a stand-alone file - e.g. a video, image or sound recording"
    },
    "subLabel": {
      "type": "literal",
      "value": "Media File"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor that is a group of people formed for one or more of purposes � e.g. government organisations, educational organisations, terrorists organisations, religious organisations, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor that is a group of people formed for one or more of purposes – e.g. government organisations, educational organisations, terrorists organisations, religious organisations, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OrganisationState that is assessed to be breaking the law in an organised manner"
    },
    "subLabel": {
      "type": "literal",
      "value": "Criminal Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TerroristOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OrganisationState that is assessed to be conducting acts of terror to achieve a political or religious goal."
    },
    "subLabel": {
      "type": "literal",
      "value": "Terrorist Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TerroristOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OrganisationState that is assessed to be conducting acts of terror to achieve a political or religious goal.\n"
    },
    "subLabel": {
      "type": "literal",
      "value": "Terrorist Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssetState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporalState of a Device"
    },
    "subLabel": {
      "type": "literal",
      "value": "Device State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssetState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is either man-made (or defined - see Rights) or whose extent is defined in such a way as to specify ownership - e.g. a parcel of real estate"
    },
    "subLabel": {
      "type": "literal",
      "value": "Asset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssetState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a Vehicle"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Meeting"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CoLocation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CoLocation where the attendees (Presence) communicate with each other"
    },
    "subLabel": {
      "type": "literal",
      "value": "Meeting"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WaterDistributionComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#HighwayRoundabout"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricalPowerGenerationComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WaterExtractionComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LiquidFuelStorageComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FireBrigadeComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Port"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Facility which is a recognised terminus for international travel"
    },
    "subLabel": {
      "type": "literal",
      "value": "Port"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectricalPowerDistributionComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WastewaterComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PublicToilets"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VeterinaryHospital"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LifeboatStation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GasDistributionComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Road"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RailwayJunction"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Library"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelecommunicationsComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RailwayStation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#HeavyRailComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WaterReservoir"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MedicalFacility"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MotorVehicleFuellingOrChargingStation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IncarcerationFacility"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Facility used for incarceration - e.g. a prison, detention centre, or remand facility"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incarceration Facility"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Pylon"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CarPark"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RecurringPeriod"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArbitraryPeriod"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PeriodOfTime that is composed of regularly recurring periods of time.ISO8601 is used to represent these periods (recurrentPeriod property), using the blanking technique (e.g. blanking the date to give a daily time). The recurrence can be limited using the recurringFrom and recurringUntil properties Examples:Every Tuesday from 28th August 2018 to 2 October 201813:00 to 14:00 on every day from 27th June 2016 to 2 October 2024"
    },
    "subLabel": {
      "type": "literal",
      "value": "Recurring Period"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RecurringPeriod"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArbitraryPeriod"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PeriodOfTime that is composed of regularly recurring periods of time.\n\nISO8601 is used to represent these periods (recurrentPeriod property), using the blanking technique (e.g. blanking the date to give a daily time). The recurrence can be limited using the recurringFrom and recurringUntil properties \nExamples:\n\nEvery Tuesday from 28th August 2018 to 2 October 2018\n13:00 to 14:00 on every day from 27th June 2016 to 2 October 2024"
    },
    "subLabel": {
      "type": "literal",
      "value": "Recurring Period"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Message"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Communication or OnlineContentEvent where a message is sent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Message"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentCreation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineContentEvent where a \"post\" is made.\n\nExamples:\n\n* Posting a blog\n* Posting a comment\n* Tweeting (other microblogs are available, probably)\n* A Facebook, LinkedIn, Instagram, etc. post"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Content Creation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentCreation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineContentEvent where a post is made.Examples:* Posting a blog* Posting a comment* Tweeting (other microblogs are available, probably)* A Facebook, LinkedIn, Instagram, etc. post"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Content Creation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Notify"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineContentEvent where a notification is raised - i.e.  an application-generated event (not a user-generated event)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Notify"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WastewaterDisposalComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WastewaterComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WastewaterComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WastewaterTreatmentComplex"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WastewaterComplex"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineShop"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Retailer"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a TradeEvent as an online shop"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Shop"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FirstLineOfAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LineOfAddress"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The first line of the Address including the number of the dwelling and the street name."
    },
    "subLabel": {
      "type": "literal",
      "value": "First Line Of Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ISO19125-WKT"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoRepresentation using Well-Known-Text encoding for ISO19125 simple features.Note: the WKT must include the coordinate reference system used - e.g WGS 84"
    },
    "subLabel": {
      "type": "literal",
      "value": "ISO19125-WKT"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ISO19125-WKT"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoRepresentation using Well-Known-Text encoding for ISO19125 simple features.\n\nNote: the WKT must include the coordinate reference system used - e.g WGS 84"
    },
    "subLabel": {
      "type": "literal",
      "value": "ISO19125-WKT"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoObject"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject and a GeoRepresentation that contains geographical information"
    },
    "subLabel": {
      "type": "literal",
      "value": "Geo Object"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GML"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Geography-Markup-Language (GML) is the XML grammar defined by the Open Geospatial Consortium (OGC) to express geographical features. GML serves as a modeling language for geographic systems as well as an open interchange format for geographic transactions on the Internet. Key to GMLs utility is its ability to integrate all forms of geographic information, including not only conventional vector or discrete objects, but coverages (see also GMLJP2) and sensor data."
    },
    "subLabel": {
      "type": "literal",
      "value": "GML"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GML"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Geography-Markup-Language (GML) is the XML grammar defined by the Open Geospatial Consortium (OGC) to express geographical features. GML serves as a modeling language for geographic systems as well as an open interchange format for geographic transactions on the Internet. \n\nKey to GML's utility is its ability to integrate all forms of geographic information, including not only conventional \"vector\" or discrete objects, but coverages (see also GMLJP2) and sensor data."
    },
    "subLabel": {
      "type": "literal",
      "value": "GML"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoJSON"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "GeoJSON is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. It is based on JSON, the JavaScript Object Notation.\n\nGeoJSON mandates use of WGS 84 coordinate system - see IETF RFC 7946"
    },
    "subLabel": {
      "type": "literal",
      "value": "Geo JSON"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoJSON"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "GeoJSON is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. It is based on JSON, the JavaScript Object Notation.GeoJSON mandates use of WGS 84 coordinate system - see IETF RFC 7946"
    },
    "subLabel": {
      "type": "literal",
      "value": "Geo JSON"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MeetingChair"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attendance"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Attendance where the Person involved is the chair of a Meeting"
    },
    "subLabel": {
      "type": "literal",
      "value": "Meeting Chair"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MoneyTransfer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BusinessEvent where an AmountOfMoney is moved from one FinancialAccount to another.\n\nUsually a Money Transfer event will involve two accounts but we might not know both, or it might be a cash transfer – in which case only one of the participants might be specified."
    },
    "subLabel": {
      "type": "literal",
      "value": "Money Transfer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MoneyTransfer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BusinessEvent where an AmountOfMoney is moved from one FinancialAccount to another.Usually a Money Transfer event will involve two accounts but we might not know both, or it might be a cash transfer � in which case only one of the participants might be specified."
    },
    "subLabel": {
      "type": "literal",
      "value": "Money Transfer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RequestForQuotation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TradeEvent where one or more Entities are is required"
    },
    "subLabel": {
      "type": "literal",
      "value": "Request For Quotation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Delivery"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TradeEvent where one or more Entities are delivered to the receiving party"
    },
    "subLabel": {
      "type": "literal",
      "value": "Delivery"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Purchase"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TradeEvent where an Entity is bought"
    },
    "subLabel": {
      "type": "literal",
      "value": "Purchase"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WithdrawFromSale"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TradeEvent where a type of entity is withdrawn from sale"
    },
    "subLabel": {
      "type": "literal",
      "value": "Withdraw From Sale"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OfferForSale"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TradeEvent where one or more Entities of the same type (specified by an ClassOfEntity) are offered for sale or exchange"
    },
    "subLabel": {
      "type": "literal",
      "value": "Offer For Sale"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a ResponsibleActorNote:  this is the superclass of ResponsibleActor (the whole life person or organisation) because the whole-life state is just a special case of a ResponsibleActorState. This pattern is true for all states. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Responsible Actor State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActorState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a ResponsibleActor\n\nNote:  this is the superclass of ResponsibleActor (the whole life person or organisation) because the whole-life state is just a special case of a ResponsibleActorState. This pattern is true for all states. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Responsible Actor State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Actor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is capable of performing functions - i.e. actively participating in an Event."
    },
    "subLabel": {
      "type": "literal",
      "value": "Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveFollower"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Follower"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#System"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SystemState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device (usually comprising software and hardware) that is generally a collection of other Devices brought together for a purpose. The Devices may or may not be removable / replaceable"
    },
    "subLabel": {
      "type": "literal",
      "value": "System"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#System"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SystemState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device  comprising software and hardware brought together for a purpose. The Devices may or may not be removable / replaceable"
    },
    "subLabel": {
      "type": "literal",
      "value": "System"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NetworkInterface"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SystemState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device (usually part of another Device) that provides wired or wireless access to a network.Network interfaces can often be removable. To model this, create DeviceStates of the NetworkInterface and make them part of the Device which hosts the interface for that period of time. "
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CellularBaseStation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SystemState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A RadioMast that is used for cellular communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RadioMast"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SystemState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device that is placed in a Location to provide either a link from a wired to wireless connection, or to relay between two wireless endpoints."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ExchangedItem is a real world ‘thing’ about which a sender might retain specific knowledge, some or all of which is needed to be shared (exchanged) with one or more recipients."
    },
    "subLabel": {
      "type": "literal",
      "value": "Exchanged Item"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ExchangedItem is a real world �thing� about which a sender might retain specific knowledge, some or all of which is needed to be shared (exchanged) with one or more recipients."
    },
    "subLabel": {
      "type": "literal",
      "value": "Exchanged Item"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of RDF properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "Property"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#AllDisjointProperties"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of collections of pairwise disjoint properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "AllDisjointProperties"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of RDF statements."
    },
    "subLabel": {
      "type": "literal",
      "value": "Statement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GroupOfItems"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A collection of ExchangedItem that have been gathered together for a purpose. Note: The same ExchangedItem can be in more than one GroupOfItems"
    },
    "subLabel": {
      "type": "literal",
      "value": "Group Of Items"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GroupOfItems"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A collection of ExchangedItem that have been gathered together for a purpose. \n\nNote: The same ExchangedItem can be in more than one GroupOfItems"
    },
    "subLabel": {
      "type": "literal",
      "value": "Group Of Items"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Axiom"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object."
    },
    "subLabel": {
      "type": "literal",
      "value": "Axiom"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#NegativePropertyAssertion"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of negative property assertions."
    },
    "subLabel": {
      "type": "literal",
      "value": "NegativePropertyAssertion"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Annotation"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object."
    },
    "subLabel": {
      "type": "literal",
      "value": "Annotation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Ontology"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of ontologies."
    },
    "subLabel": {
      "type": "literal",
      "value": "Ontology"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#AllDisjointClasses"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of collections of pairwise disjoint classes."
    },
    "subLabel": {
      "type": "literal",
      "value": "AllDisjointClasses"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Container"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of RDF containers."
    },
    "subLabel": {
      "type": "literal",
      "value": "Container"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of classes."
    },
    "subLabel": {
      "type": "literal",
      "value": "Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of RDF Lists."
    },
    "subLabel": {
      "type": "literal",
      "value": "List"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A class representing a compound literal."
    },
    "subLabel": {
      "type": "literal",
      "value": "CompoundLiteral"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Literal"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of literal values, eg. textual strings and integers."
    },
    "subLabel": {
      "type": "literal",
      "value": "Literal"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#AllDifferent"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Resource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of collections of pairwise different individuals."
    },
    "subLabel": {
      "type": "literal",
      "value": "AllDifferent"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A unique Identifier for an Organisation (more usually an OrganisationState)Example:DUNS numberVAT numberCompanies House NumberRegistered Charity Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FlightTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelTicket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Ticket that is used to travel by air"
    },
    "subLabel": {
      "type": "literal",
      "value": "Flight Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TrainTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelTicket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Ticket that is used to travel by rail"
    },
    "subLabel": {
      "type": "literal",
      "value": "Train Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FerryTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelTicket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Ticket that is used to travel by sea"
    },
    "subLabel": {
      "type": "literal",
      "value": "Ferry Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Retailer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Supplier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a TradeEvent as a retailer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Retailer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ContinuousState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ContinuousState that occurs at the beginning or end of an Element \n\nThe date/time of the state can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Bounding State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BoundingState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ContinuousState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ContinuousState that occurs at the beginning or end of an Element The date/time of the state can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Bounding State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IndividualDocument used to confirm the identity of the bearer (and often enables a particular activity – e.g. a passport enables the bearer to travel across international borders)."
    },
    "subLabel": {
      "type": "literal",
      "value": "Identity Document"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdentityDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IndividualDocument used to confirm the identity of the bearer (and often enables a particular activity � e.g. a passport enables the bearer to travel across international borders)."
    },
    "subLabel": {
      "type": "literal",
      "value": "Identity Document"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Ticket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Documented authority (paid-for or otherwise) entitling the bearer to some specified activity."
    },
    "subLabel": {
      "type": "literal",
      "value": "Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TerrorAttack"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CriminalActivity that is politically motivated and designed to cause terror"
    },
    "subLabel": {
      "type": "literal",
      "value": "Terror Attack"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Hacking"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CriminalActivity where computer equipment is interfered with without the owners permission"
    },
    "subLabel": {
      "type": "literal",
      "value": "Hacking"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Stalking"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CriminalActivity involving the malicious surveillance of a person, often in threatening manner"
    },
    "subLabel": {
      "type": "literal",
      "value": "Stalking"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Forgery"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CriminalActivity that is the creation of fake items(also a subclass of Create). "
    },
    "subLabel": {
      "type": "literal",
      "value": "Forgery"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Forgery"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CriminalActivity that is the creation of fake items\n\n(also a subclass of Create). "
    },
    "subLabel": {
      "type": "literal",
      "value": "Forgery"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VersionOfDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation and a TimeBoundedClass that is a versionOf a WorkOfDocumentation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RequestDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation that requests permission"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Warrant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation that provides legal permission, usually for something that would be considered illegal or intrusive otherwise"
    },
    "subLabel": {
      "type": "literal",
      "value": "Warrant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Warrant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AuthorisationDocument that provides legal permission, usually for something that would be considered illegal or intrusive otherwise"
    },
    "subLabel": {
      "type": "literal",
      "value": "Warrant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation that provides permission"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Report"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation that offers one or more persons view on a particular topic. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Report"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Book"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation that is a published book"
    },
    "subLabel": {
      "type": "literal",
      "value": "Book"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LanguageProficiency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfPersonState indicating the proficiency a person has in a particular language at that state in their life.\n\n"
    },
    "subLabel": {
      "type": "literal",
      "value": "Language Proficiency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LanguageProficiency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPersonState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfPersonState indicating the proficiency a person has in a particular language at that state in their life."
    },
    "subLabel": {
      "type": "literal",
      "value": "Language Proficiency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#NamedIndividual"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Thing"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of named individuals."
    },
    "subLabel": {
      "type": "literal",
      "value": "NamedIndividual"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Nothing"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Thing"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "This is the empty class."
    },
    "subLabel": {
      "type": "literal",
      "value": "Nothing"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineService"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WebResource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A service provided on the internet."
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Service"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WebResource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WebResource which is any kind of media presented online that is more granular than a webpage, and user-generated - e.g. a blog post, tweet, facebook post, etc.Note: when applying begin and end states (and periods of time) to OnlineArtefact, the times should correspond to the life of the content, not the duration of the posting activity."
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Artefact"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WebResource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WebResource which is any kind of media presented online that is more granular than a webpage, and user-generated - e.g. a blog post, tweet, facebook post, etc.\n\nNote: when applying begin and end states (and periods of time) to OnlineArtefact, the times should correspond to the life of the content, not the duration of the posting activity."
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Artefact"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LocationObservation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Observation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#UsuallyParked"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DiscontinuousState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a Vehicle which is the fusion of all its Parked statesExamples:* A car that is usually parked in Acacia Avenue* A ship that regularly docks at Dover* An aircraft that regularly resides in a private hangar"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SMS"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Message"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Message (text and images) sent over a cellular network"
    },
    "subLabel": {
      "type": "literal",
      "value": "SMS"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CyberStalking"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Stalking"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A form of Stalking which takes place online."
    },
    "subLabel": {
      "type": "literal",
      "value": "Cyber Stalking"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is man-made and performs one or more functions - i.e. it is also an Actor"
    },
    "subLabel": {
      "type": "literal",
      "value": "Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DeviceState (and an EventParticipant) when a Device is communicating. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Device In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefactInEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an OnlineArtefact participates in an OnlineEvent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Artefact In Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceOnline"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a Device participates in an OnlineEvent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Device Online"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccountState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Account that enables a person, organisation or other entity to participate within a particular online domain.\n\nNote: was called \"OnlineIdentifier\" in previous versions of IES"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccountState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Account that enables a person, organisation or other entity to participate within a particular online domain.Note: was called OnlineIdentifier in previous versions of IES"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ProbabilityRepresentation"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#NumericRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeLikelyOrProbably"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeLikelyOrProbably"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeUnlikely"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeUnlikely"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeAlmostCertain"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeAlmostCertain"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeTrue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where a fact is assessed to be true by a Actor (i.e. a Person or Device)An AssessToBeTrue shall have one and only one hmlConfidence attribute (i.e. this is mandatory)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Assess To Be True"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeTrue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where a fact is assessed to be true by a Actor (i.e. a Person or Device)\n\nAn AssessToBeTrue shall have one and only one hmlConfidence attribute (i.e. this is mandatory)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Assess To Be True"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeHighlyLikely"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeHighlyLikely"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeHighlyUnlikely"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeHighlyUnlikely"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessProbability"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeRealisticPossibility"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeRealisticPossibility"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeRemoteChance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhiaAssessmentYardstick"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeRemoteChance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WinningCandidate"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectoralCandidate"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Person who won the Election"
    },
    "subLabel": {
      "type": "literal",
      "value": "Winning Candidate"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ConcertTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntertainmentTicket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EntertainmentTicket where the Event is a concert"
    },
    "subLabel": {
      "type": "literal",
      "value": "Concert Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CinemaTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntertainmentTicket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EntertainmentTicket that permits attendance at a cinema"
    },
    "subLabel": {
      "type": "literal",
      "value": "Cinema Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FootballMatchTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntertainmentTicket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EntertainmentTicket for a football match"
    },
    "subLabel": {
      "type": "literal",
      "value": "Football Match Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TheatreTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntertainmentTicket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EntertainmentTicket for a theatre show"
    },
    "subLabel": {
      "type": "literal",
      "value": "Theatre Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Caller"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyInCommunication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An PartyInCommunication where the communicating party is the caller in an InteractiveCommunication"
    },
    "subLabel": {
      "type": "literal",
      "value": "Caller"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Recipient"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyInCommunication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An PartyInCommunication where the communicating party is the recipient of a message"
    },
    "subLabel": {
      "type": "literal",
      "value": "Recipient"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Sender"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyInCommunication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An PartyInCommunication where the communicating party is the sender of a message"
    },
    "subLabel": {
      "type": "literal",
      "value": "Sender"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ConferenceParticipant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyInCommunication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An PartyInCommunication that is a participant in a TeleConference"
    },
    "subLabel": {
      "type": "literal",
      "value": "Conference Participant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Callee"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyInCommunication"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An PartyInCommunication where the communicating party is called in an InteractiveCommunication"
    },
    "subLabel": {
      "type": "literal",
      "value": "Callee"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationalRole"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Role"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Role that a ResponsibleActor can have in an Organisation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisational Role"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Account"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SimilarEntities"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfEntity whose instances are considered similar"
    },
    "subLabel": {
      "type": "literal",
      "value": "Similar Entities"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Asset- i.e. a ClassOfEntity whose instances are classes of AssetExamples:* Vauxhall Insignia, VW Golf* Smartphone* Apple iPhone 6S"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Asset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Asset- i.e. a ClassOfEntity whose instances are classes of Asset\n\nExamples:\n\n* Vauxhall Insignia, VW Golf\n* Smartphone\n* Apple iPhone 6S"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Asset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfWebResource"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of WebResource"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Web Resource"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfResponsibleActor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of ResponsibleActor "
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Responsible Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfLocation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfEntity whose instances are representations of things in the real world\n\nExamples:\n* an identifier used for a Person\n* a document (though not an individual copy of a document)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Representation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfEntity whose instances are representations of things in the real worldExamples:* an identifier used for a Person* a document (though not an individual copy of a document)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Representation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonInTransit"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntityInTransit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EntityInTransit where the Entity is a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Person In Transit"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Identifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name that is unique within the specified context"
    },
    "subLabel": {
      "type": "literal",
      "value": "Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Title"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The title of the respective document."
    },
    "subLabel": {
      "type": "literal",
      "value": "Title"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ObjectName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name given to a DataObject."
    },
    "subLabel": {
      "type": "literal",
      "value": "Object Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ServiceName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Name of the OnlineService\n\nThis should not be confused with a webpage (see the Webpage entity type). The Online Service may be provided via a webpage."
    },
    "subLabel": {
      "type": "literal",
      "value": "Service Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ServiceName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Name of the OnlineServiceThis should not be confused with a webpage (see the Webpage entity type). The Online Service may be provided via a webpage."
    },
    "subLabel": {
      "type": "literal",
      "value": "Service Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name used to identify an Organisation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisation Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PlaceName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name that is used to refer to a Location.\n\nNote:  the naming pattern is used here as different parties (even standards bodies !) may have different names for the same Location"
    },
    "subLabel": {
      "type": "literal",
      "value": "Place Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PlaceName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name that is used to refer to a Location.Note:  the naming pattern is used here as different parties (even standards bodies !) may have different names for the same Location"
    },
    "subLabel": {
      "type": "literal",
      "value": "Place Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PassengerName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Name of the Person being used for Travel - it may not be known if this is the actual Name the Person travelling, as someone else may be using their ticket."
    },
    "subLabel": {
      "type": "literal",
      "value": "Passenger Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ScreenName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A display Name used by the account which may be non-unique, and may not be the same as the username"
    },
    "subLabel": {
      "type": "literal",
      "value": "Screen Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AgreementName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name that is used to refer to an EndToEndAgreement."
    },
    "subLabel": {
      "type": "literal",
      "value": "Agreement Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name used to identify / refer to a PersonNote: this is the full name as known to the organisation managing the NamingScheme. For first names, surnames, etc. use a subtype of PersonNameA PersonName may be composed of Surname, GivenName, etc. using the inRepresentation relationship"
    },
    "subLabel": {
      "type": "literal",
      "value": "Person Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Name used to identify / refer to a Person\n\nNote: this is the full name as known to the organisation managing the NamingScheme. For first names, surnames, etc. use a subtype of PersonName\n\nA PersonName may be composed of Surname, GivenName, etc. using the inRepresentation relationship"
    },
    "subLabel": {
      "type": "literal",
      "value": "Person Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an Account"
    },
    "subLabel": {
      "type": "literal",
      "value": "Account State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssetState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an Asset"
    },
    "subLabel": {
      "type": "literal",
      "value": "Asset State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActorState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an Actor"
    },
    "subLabel": {
      "type": "literal",
      "value": "Actor State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SystemState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a System"
    },
    "subLabel": {
      "type": "literal",
      "value": "System State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ContinuousState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State that is temporally continuous - i.e. it is not a DiscontinuousState"
    },
    "subLabel": {
      "type": "literal",
      "value": "Continuous State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DiscontinuousState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State that is temporally dissected - i.e. it is not a continuous state, but in fact a fusion of states (which may or may not be specified)This is used for managing situations where something happens from time to time, and we dont always know when it happens. For example, if a vehicle is usually parked in a street, we would use a DiscontinuousState of the vehicle that would be inLocation."
    },
    "subLabel": {
      "type": "literal",
      "value": "Discontinuous State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DiscontinuousState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State that is temporally dissected - i.e. it is not a continuous state, but in fact a fusion of states (which may or may not be specified)\n\nThis is used for managing situations where something happens from time to time, and we don't always know when it happens. For example, if a vehicle is usually parked in a street, we would use a DiscontinuousState of the vehicle that would be inLocation."
    },
    "subLabel": {
      "type": "literal",
      "value": "Discontinuous State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WebResourceState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an WebResource"
    },
    "subLabel": {
      "type": "literal",
      "value": "Web Resource State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SubjectOfInterest"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State during which an Element is of interest to an investigation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Subject Of Interest"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LocationState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a Location"
    },
    "subLabel": {
      "type": "literal",
      "value": "Location State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an EventNote: care must be taken with using this in a 4D, extensional model such as IES. States such as Ended would not be appropriate, for example - in such a case, the temporal extent of the Event or the presence of a BoundingState to end it would be correct. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Event State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an Event"
    },
    "subLabel": {
      "type": "literal",
      "value": "Event State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ReligionState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an Religion"
    },
    "subLabel": {
      "type": "literal",
      "value": "Religion State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State which is the participating role of an Entity in an Event.Note: this includes inactive participation (e.g. something that is being repaired). If the participation is known to be active then ActiveEventPartipant (or one of its subtypes) should be used. In BORO, EventParticipant would be Involvement and ActiveEventParticipant would be Participation."
    },
    "subLabel": {
      "type": "literal",
      "value": "Event Participant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State which is the participating role of an Entity in an Event.\n\nNote: this includes inactive participation (e.g. something that is being repaired). If the participation is known to be active then ActiveEventPartipant (or one of its subtypes) should be used. In BORO, EventParticipant would be \"Involvement\" and ActiveEventParticipant would be \"Participation\"."
    },
    "subLabel": {
      "type": "literal",
      "value": "Event Participant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Gender"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPerson"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfPerson whose members all share the same gender"
    },
    "subLabel": {
      "type": "literal",
      "value": "Gender"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Ethnicity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPerson"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfPerson whose members all share the same ethnicity"
    },
    "subLabel": {
      "type": "literal",
      "value": "Ethnicity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResidentialBuilding"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RealEstate"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RealEstate"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is man-made, but is typically larger than an Address (i.e. it may have more than one postal address)\n\nExamples:\n\nMilitary camps, factories, sports facilities, airports, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Facility"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Facility"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RealEstate"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is man-made, but is typically larger than an Address (i.e. it may have more than one postal address)Examples:Military camps, factories, sports facilities, airports, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Facility"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartOfFacility"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RealEstate"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is contained within a Facility - e.g. a room, laboratory, floor, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Part Of Facility"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Address"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RealEstate"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that can be specified by a postal address"
    },
    "subLabel": {
      "type": "literal",
      "value": "Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#InternationalCoalition"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation formed of Nations who have agreed to pursue a particular course (e.g. a war)"
    },
    "subLabel": {
      "type": "literal",
      "value": "International Coalition"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Department"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation that is part of another Organisation - usually part of a CommercialOrganisation, though other Organisations have departments"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommercialOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation that is run for profit"
    },
    "subLabel": {
      "type": "literal",
      "value": "Commercial Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Alliance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation made up of allies - these could be people or organisations, and the alliance may be quite loose."
    },
    "subLabel": {
      "type": "literal",
      "value": "Alliance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Government"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation that is (usually) elected to run a governedRegion"
    },
    "subLabel": {
      "type": "literal",
      "value": "Government"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NotForProfitOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation where all income is reinvested, or distributed - i.e. no profit is made."
    },
    "subLabel": {
      "type": "literal",
      "value": "Not For Profit Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ReligiousOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation formed around a particular religious belief"
    },
    "subLabel": {
      "type": "literal",
      "value": "Religious Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BankBranch"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An operating division of a Bank, usually a high street branch, but might also be the online arm of a Bank"
    },
    "subLabel": {
      "type": "literal",
      "value": "Bank Branch"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegionalConstituency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The people residing (or entitled to reside / vote in) a particular Location."
    },
    "subLabel": {
      "type": "literal",
      "value": "Regional Constituency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Team"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation formed around a particular pursuit or task"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EducationalOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation that provides education"
    },
    "subLabel": {
      "type": "literal",
      "value": "Educational Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Bank"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation that holds a banking license and can conduct financial transactions on behalf of customers"
    },
    "subLabel": {
      "type": "literal",
      "value": "Bank"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GovernmentOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisation that is part of, or controlled by a national or local Government"
    },
    "subLabel": {
      "type": "literal",
      "value": "Government Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RadioCoverageArea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location whose area is that in which a RadioMast hast viable communications coverage.Note: The RadioMast itself may not be part of this area, as often the immediate area around the base of a RadioMast is a deadspot. Note: Most radio area coverage is complex in shape, and the preferred representation in IES4 is GeoJSON. No attempt is made here to differentiate between signal strength zones. To do this, create multople RadioCoverAreas for the same RadioMast and label them appropriately. "
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IndividualDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is a written, photographed or drawn representation of thoughts. This might include, but not limited to, formal reports, books, legal instruments. Such documents might exist in a wide variety of forms, both printed and in electronic form.\n\nNote: this is an individual document  - i.e. physical or (rarely) a specific electronic copy (e.g. on a specific hard disk...told you it was rare). In most cases, we refer to the document in general - WorkOfDocumentation "
    },
    "subLabel": {
      "type": "literal",
      "value": "Individual Document"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IndividualDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is a written, photographed or drawn representation of thoughts. This might include, but not limited to, formal reports, books, legal instruments. Such documents might exist in a wide variety of forms, both printed and in electronic form.Note: this is an individual document  - i.e. physical or (rarely) a specific electronic copy (e.g. on a specific hard disk...told you it was rare). In most cases, we refer to the document in general - WorkOfDocumentation "
    },
    "subLabel": {
      "type": "literal",
      "value": "Individual Document"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RealEstate"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location (and an Asset) that has been defined or constructed for the purpose of ownership"
    },
    "subLabel": {
      "type": "literal",
      "value": "Real Estate"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is man-made and performs one or more functions - i.e. it is also an Actor"
    },
    "subLabel": {
      "type": "literal",
      "value": "Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PaymentArtefact"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is means of payment"
    },
    "subLabel": {
      "type": "literal",
      "value": "Payment Artefact"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AmountOfMoney"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A specific amount of a given currency"
    },
    "subLabel": {
      "type": "literal",
      "value": "Amount Of Money"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Rights"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset which encompasses the legal rights to an Element Strictly speaking, all property (therefore most Assets) are a question of rights. No-one actually owns something, they have a legal right of that thing. In most cases, we can deal with this just using Asset. However in more complex cases, rights can be bought and sold (and of course owned) to things which arent generally viewed as assets - e.g. paying a delivery cost, owning the leasehold to a property, etc. Examples:* The performance rights to a Song* The rights to purchase currency at a pre-agreed rate in the future"
    },
    "subLabel": {
      "type": "literal",
      "value": "Rights"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Rights"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset which encompasses the legal rights to an Element \n\nStrictly speaking, all property (therefore most Assets) are a question of rights. No-one actually owns something, they have a legal right of that thing. In most cases, we can deal with this just using Asset. However in more complex cases, rights can be bought and sold (and of course owned) to things which aren't generally viewed as assets - e.g. paying a delivery cost, owning the leasehold to a property, etc. \n\nExamples:\n\n* The performance rights to a Song\n* The rights to purchase currency at a pre-agreed rate in the future"
    },
    "subLabel": {
      "type": "literal",
      "value": "Rights"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MapGridArea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Asset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location whose area is specified by a grid on a map.Note this is the actual area, not the map grid. "
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Altitude"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Length"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Length that is the distance above (or below in the case of negative numbers) the surface of the WGS84 spheroid of the respective Location "
    },
    "subLabel": {
      "type": "literal",
      "value": "Altitude"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonHeight"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Length"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Length that is the height of a PersonState"
    },
    "subLabel": {
      "type": "literal",
      "value": "Person Height"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Role"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfState that is the role an Entity has in context (as part of) an Element\n\n- e.g. Manager, "
    },
    "subLabel": {
      "type": "literal",
      "value": "Role"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Role"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfState that is the role an Entity has in context (as part of) an Element- e.g. Manager, "
    },
    "subLabel": {
      "type": "literal",
      "value": "Role"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfResponsibleActorState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfState that is the powertype of ResponsibleActorState "
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Responsible Actor State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Create"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LifecycleEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LifecycleEvent where an Entity is brought into existence."
    },
    "subLabel": {
      "type": "literal",
      "value": "Create"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Modify"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LifecycleEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LifecycleEvent where something is changed"
    },
    "subLabel": {
      "type": "literal",
      "value": "Modify"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Destroy"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LifecycleEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LifecycleEvent where an Entity is destroyed"
    },
    "subLabel": {
      "type": "literal",
      "value": "Destroy"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent that is also an EndToEndAgreementNote: was called Agreement in IES 3.x, but that was confusing for business agreements, personal agreements, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Political Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent that is also an EndToEndAgreement\n\nNote: was called Agreement in IES 3.x, but that was confusing for business agreements, personal agreements, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Political Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ChangeOfGovernment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent where one Government is replaced by another."
    },
    "subLabel": {
      "type": "literal",
      "value": "Change Of Government"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAnnouncement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent where information is released to the publicNote: was called Announcement in IES 3.x, but that was confusing for business announcements , personal announcements , etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Political Announcement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAnnouncement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent where information is released to the public\n\nNote: was called Announcement in IES 3.x, but that was confusing for business announcements , personal announcements , etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Political Announcement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Summit"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent where senior leaders assemble to discuss and agree policy or treaties"
    },
    "subLabel": {
      "type": "literal",
      "value": "Summit"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Election"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent where the population vote for their preferred ElectoralCandidate to become their representative. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Election"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor that is a group of people formed for one or more of purposes � e.g. government organisations, educational organisations, terrorists organisations, religious organisations, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Organisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor that is a group of people formed for one or more of purposes – e.g. government organisations, educational organisations, terrorists organisations, religious organisations, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Post"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A part of an Organisation that has particular responsibilities"
    },
    "subLabel": {
      "type": "literal",
      "value": "Post"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Person"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A human being, living or dead. This also includes what may appear to be a person, but is in fact an Alias"
    },
    "subLabel": {
      "type": "literal",
      "value": "Person"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Dog"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Animal"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Bird"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Animal"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VideoConference"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TeleConference"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TeleConference where parties communicate over video (with audio)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Video Conference"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPaymentArtefact"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of PaymentArtefact\n\nExamples:\n\n* Visa\n* Oyster\n* Selfridges Store Card"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Payment Artefact"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPaymentArtefact"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of PaymentArtefactExamples:* Visa* Oyster* Selfridges Store Card"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Payment Artefact"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAmountOfMoney"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of AmountOfMoney"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Amount Of Money"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfDevice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Device- i.e. a ClassOfEntity whose instances are classes of Device\n\nExamples:\n\n* Smartphone\n* Apple iPhone 6S"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfDevice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Device- i.e. a ClassOfEntity whose instances are classes of DeviceExamples:* Smartphone* Apple iPhone 6S"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Software"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfAsset that is programmatic instructions that control or affect the behaviour of an Asset (usually a Device). Note that Software is a class, as the same Software may be installed in multiple locations."
    },
    "subLabel": {
      "type": "literal",
      "value": "Software"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Software"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfAsset that is programmatic instructions that control or affect the behaviour of an Asset (usually a Device). \n\nNote that Software is a class, as the same Software may be installed in multiple locations."
    },
    "subLabel": {
      "type": "literal",
      "value": "Software"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GrantOfAuthority"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationStage"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AuthorisationStage where a ResponsibleActor grants another ResponsibleActor authority to act."
    },
    "subLabel": {
      "type": "literal",
      "value": "Grant Of Authority"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationRequest"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationStage"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AuthorisationStage where a ResponsibleActor requests authorisation to act from another ResponsibleActor"
    },
    "subLabel": {
      "type": "literal",
      "value": "Authorisation Request"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EmailAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsIdentifier that uniquely identifiers an email account.\n\nFormat: local-part@domain"
    },
    "subLabel": {
      "type": "literal",
      "value": "Email Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EmailAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsIdentifier that uniquely identifiers an email account.Format: local-part@domain"
    },
    "subLabel": {
      "type": "literal",
      "value": "Email Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelephoneNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsIdentifier that enables calls to be directed to particular handset"
    },
    "subLabel": {
      "type": "literal",
      "value": "Telephone Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MACAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsIdentifier that is used to identify network interface controllersVarious forms of the MAC address can be used:(a) six groups of two hexadecimal digits, separated by hyphens (-) or colons (:), in transmission order(b) three groups of four hexadecimal digits separated by dots (.) again in transmission order.2. The make &amp; model of the network interface is encoded within the MAC address."
    },
    "subLabel": {
      "type": "literal",
      "value": "MACAddress"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MACAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsIdentifier that is used to identify network interface controllers\n\nVarious forms of the MAC address can be used:\n(a) six groups of two hexadecimal digits, separated by hyphens (-) or colons (:), in transmission order\n(b) three groups of four hexadecimal digits separated by dots (.) again in transmission order.\n2. The make & model of the network interface is encoded within the MAC address."
    },
    "subLabel": {
      "type": "literal",
      "value": "MACAddress"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Identifier that is an Internet Protocol address."
    },
    "subLabel": {
      "type": "literal",
      "value": "IPAddress"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IMEI"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The International Mobile Equipment Identity used to identify GSM, WCDMA and iDEN mobile phone handsets, as well as some satellite phones.\n\nUsually a 15-digit number (14 digits plus a check digit)\n\nExample Value:\n\n123456789012345"
    },
    "subLabel": {
      "type": "literal",
      "value": "IMEI"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IMEI"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The International Mobile Equipment Identity used to identify GSM, WCDMA and iDEN mobile phone handsets, as well as some satellite phones.Usually a 15-digit number (14 digits plus a check digit)Example Value:123456789012345"
    },
    "subLabel": {
      "type": "literal",
      "value": "IMEI"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifierRange"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A specified range of identifiers for the end-points of a communication."
    },
    "subLabel": {
      "type": "literal",
      "value": "Communications Identifier Range"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelephoneCountryCode"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The dialing code for a country as specified by the ITU"
    },
    "subLabel": {
      "type": "literal",
      "value": "Telephone Country Code"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IMSI"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The International Mobile Subscriber NumberHistorically, this is stored as a 64-bit number on the SIM Card (it is NOT identity of the SIM Card itself), but now can be a software assigned identifier to any mobile subscriber interface. An IMSI is usually presented as a 15-digit number, but it can be shorter.The first three digits are the Mobile Country Code (MCC), followed by a 2 or 3 digit Mobile Network Code (MNC) and the remaining digits are the Mobile Subscription Identification Number (MSIN).For the example shown this would be:- 404=India,- 68=MTNL Delhi- 1234567890=Subscriber ID"
    },
    "subLabel": {
      "type": "literal",
      "value": "IMSI"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IMSI"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The International Mobile Subscriber Number – this is stored as a 64-bit number on the SIM Card (it is NOT identity of the SIM Card itself)\n\nAn IMSI is usually presented as a 15-digit number, but it can be shorter.\n\nThe first three digits are the Mobile Country Code (MCC), followed by a 2 or 3 digit Mobile Network Code (MNC) and the remaining digits are the Mobile Subscription Identification Number (MSIN).\n\nFor the example shown this would be:\n- 404=India,\n- 68=MTNL Delhi\n- 1234567890=Subscriber ID"
    },
    "subLabel": {
      "type": "literal",
      "value": "IMSI"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Callsign"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "In broadcasting and radio communications, a call sign (also known as a call name or call letters – and historically as a call signal) is a unique designation for a transmitting station."
    },
    "subLabel": {
      "type": "literal",
      "value": "Callsign"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Callsign"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifier"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "In broadcasting and radio communications, a call sign (also known as a call name or call letters � and historically as a call signal) is a unique designation for a transmitting station."
    },
    "subLabel": {
      "type": "literal",
      "value": "Callsign"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#DataRange"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Datatype"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead."
    },
    "subLabel": {
      "type": "literal",
      "value": "DataRange"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Nation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegionalConstituency"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The people of a Country (or group of Countries recognised as a Nation).\n\nNote: this is distinct to a Country which is the land mass under control by the Nation, though ISO Country codes are regularly used to also identify Nations. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Nation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Nation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegionalConstituency"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The people of a Country (or group of Countries recognised as a Nation).Note: this is distinct to a Country which is the land mass under control by the Nation, though ISO Country codes are regularly used to also identify Nations. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Nation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelBooking"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Purchase"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Purchase of planned travel arrangements.3. Travel Bookings may include bookings for Flights, Ferry Crossings, Train Journeys (i.e Travel Services), and also Hotels, Hire Cars etc. when these have been modelled. These will be included on the booking as relationships to the appropriate other entities."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Booking"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelBooking"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Purchase"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Purchase of planned travel arrangements.\n\n3. Travel Bookings may include bookings for Flights, Ferry Crossings, Train Journeys (i.e Travel Services), and also Hotels, Hire Cars etc. when these have been modelled. These will be included on the booking as relationships to the appropriate other entities."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Booking"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent that is also an EndToEndAgreementNote: was called Agreement in IES 3.x, but that was confusing for business agreements, personal agreements, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Political Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalEvent that is also an EndToEndAgreement\n\nNote: was called Agreement in IES 3.x, but that was confusing for business agreements, personal agreements, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Political Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NonDisclosureAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndAgreement where parties agree not to disclose certain information"
    },
    "subLabel": {
      "type": "literal",
      "value": "Non Disclosure Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RentalAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndAgreement where one Party rents an Entity to another"
    },
    "subLabel": {
      "type": "literal",
      "value": "Rental Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WebResource"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WebResourceState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Any http presence on the web"
    },
    "subLabel": {
      "type": "literal",
      "value": "Web Resource"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleController"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonInTransit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonInTransit where the Person is in control of the Transite.g. driver of a car, pilot of plane, captain of a ship"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle Controller"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleController"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonInTransit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonInTransit where the Person is in control of the Transit\n\ne.g. driver of a car, pilot of plane, captain of a ship"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle Controller"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Passenger"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonInTransit"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonInTransit where the Person travelling is a Passenger on a Transit"
    },
    "subLabel": {
      "type": "literal",
      "value": "Passenger"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#UsuallyParked"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a Vehicle which is the fusion of all its Parked statesExamples:* A car that is usually parked in Acacia Avenue* A ship that regularly docks at Dover* An aircraft that regularly resides in a private hangar"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is a means of transportation – e.g. car, aircraft, ship."
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is a means of transportation � e.g. car, aircraft, ship."
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Parked"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of a Vehicle where it is not moving. Examples:* A car parked on the roadside* A ship in dock or at anchor* An aircraft parked on the tarmac or in a hangar"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VesselState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPv4Address"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPAddress"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IPAddress conforming to v4 of the standard"
    },
    "subLabel": {
      "type": "literal",
      "value": "IPv4Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPv6Address"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPAddress"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IPAddress conforming to v6 of the standard"
    },
    "subLabel": {
      "type": "literal",
      "value": "IPv6Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OrganisationalRole"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Role that a ResponsibleActor can have in an Organisation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Organisational Role"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPersonState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfResponsibleActorState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of PersonState"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Person State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DatabaseRow"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DatabaseItem"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is an entire row of a table in a database (note this is still a class, as there may be many copies of the database)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Database Row"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DatabaseTable"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DatabaseItem"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DataObject that is the entire contents of a table in a database (note this is still a class, as there may be many copies of the database)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Database Table"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Warrant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation that provides legal permission, usually for something that would be considered illegal or intrusive otherwise"
    },
    "subLabel": {
      "type": "literal",
      "value": "Warrant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Warrant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AuthorisationDocument that provides legal permission, usually for something that would be considered illegal or intrusive otherwise"
    },
    "subLabel": {
      "type": "literal",
      "value": "Warrant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Ratification"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AgreementStage"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AgreementStage where parties have arrived at a consensus and approve the agreement"
    },
    "subLabel": {
      "type": "literal",
      "value": "Ratification"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AgreementExecution"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AgreementStage"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AgreementStage which includes all the ongoing activities that conform to the agreement reached"
    },
    "subLabel": {
      "type": "literal",
      "value": "Agreement Execution"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Negotiation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AgreementStage"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AgreementStage where parties are trying to find agreement"
    },
    "subLabel": {
      "type": "literal",
      "value": "Negotiation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MoneyTransfer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BusinessEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BusinessEvent where an AmountOfMoney is moved from one FinancialAccount to another.\n\nUsually a Money Transfer event will involve two accounts but we might not know both, or it might be a cash transfer – in which case only one of the participants might be specified."
    },
    "subLabel": {
      "type": "literal",
      "value": "Money Transfer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MoneyTransfer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BusinessEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BusinessEvent where an AmountOfMoney is moved from one FinancialAccount to another.Usually a Money Transfer event will involve two accounts but we might not know both, or it might be a cash transfer � in which case only one of the participants might be specified."
    },
    "subLabel": {
      "type": "literal",
      "value": "Money Transfer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountAdminEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BusinessEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BusinessEvent that an Account participates in"
    },
    "subLabel": {
      "type": "literal",
      "value": "Account Admin Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VersionOfDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TimeBoundedClass"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A WorkOfDocumentation and a TimeBoundedClass that is a versionOf a WorkOfDocumentation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Ship"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vessel"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Vehicle that travels on water"
    },
    "subLabel": {
      "type": "literal",
      "value": "Ship"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineContentEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineEvent where content (text, images, video, etc.) is uploaded, downloaded or viewed"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Content Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Logon"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A OnlineEvent where an OnlineAccount logs onto an OnlineService"
    },
    "subLabel": {
      "type": "literal",
      "value": "Logon"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Logoff"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A OnlineEvent where an OnlineAccount logs out of an OnlineService"
    },
    "subLabel": {
      "type": "literal",
      "value": "Logoff"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LocationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is a geographic place which specifies a point or an area on the Earths surface or elsewhere."
    },
    "subLabel": {
      "type": "literal",
      "value": "Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LocationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity that is a geographic place which specifies a point or an area on the Earth's surface or elsewhere."
    },
    "subLabel": {
      "type": "literal",
      "value": "Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Flooded"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LocationState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MobileTelephoneAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelephoneAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TelephoneAccount where the telephones in use connects using a cellular network"
    },
    "subLabel": {
      "type": "literal",
      "value": "Mobile Telephone Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LandlineTelephoneAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelephoneAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TelephoneAccount where the telephones in use connect using a wired network and operate only in a specific location"
    },
    "subLabel": {
      "type": "literal",
      "value": "Landline Telephone Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VoipAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelephoneAccount"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TelephoneAccount where the voice communication is over IP. This may also include video communication, screen sharing, etc. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Voip Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Warrantry"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndAuthorisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndAuthorisation where the process involves legal warrants. "
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Creator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a Create event as a creator"
    },
    "subLabel": {
      "type": "literal",
      "value": "Creator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IncarceratingOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisations's role in incarcerating a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incarcerating Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IncarceratingOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Organisationss role in incarcerating a Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incarcerating Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Witness"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons role as a witness in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Witness"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Witness"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's role as a witness in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Witness"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Accused"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActors role as the accused in a Prosecution"
    },
    "subLabel": {
      "type": "literal",
      "value": "Accused"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Accused"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor's role as the accused in a Prosecution"
    },
    "subLabel": {
      "type": "literal",
      "value": "Accused"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArrestingOfficer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons role as arresting officer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arresting Officer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArrestingOfficer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's role as arresting officer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arresting Officer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Negotiator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor negotiates an agreement"
    },
    "subLabel": {
      "type": "literal",
      "value": "Negotiator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Observer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity observes another Entity or Event"
    },
    "subLabel": {
      "type": "literal",
      "value": "Observer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisedActor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ActiveEventParticipant where a ResponsibleActor is granted authority to act in a GrantOfAuthority "
    },
    "subLabel": {
      "type": "literal",
      "value": "Authorised Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Operator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActors role in an OperationalEvent where they are one of the operators "
    },
    "subLabel": {
      "type": "literal",
      "value": "Operator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Operator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor's role in an OperationalEvent where they are one of the operators "
    },
    "subLabel": {
      "type": "literal",
      "value": "Operator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CooperingAtSea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveFollower"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Authoriser"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ActiveEventParticipant where a ResponsibleActor acts as the authoriser (sign off) in a GrantOfAuthority "
    },
    "subLabel": {
      "type": "literal",
      "value": "Authoriser"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attendance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Presence where the Person is presentNote - we may not know the identity of the person, so would just create only the Attendance (EventParticipant). This allows the model to grow as more information is discovered without recourse to using sameAs relationships."
    },
    "subLabel": {
      "type": "literal",
      "value": "Attendance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attendance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Presence where the Person is present\n\nNote - we may not know the identity of the person, so would just create only the Attendance (EventParticipant). This allows the model to grow as more information is discovered without recourse to using sameAs relationships."
    },
    "subLabel": {
      "type": "literal",
      "value": "Attendance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Signatory"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor ratifies an agreement"
    },
    "subLabel": {
      "type": "literal",
      "value": "Signatory"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Modifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a Modify event as a modifier"
    },
    "subLabel": {
      "type": "literal",
      "value": "Modifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveApproacher"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Customer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is the customer for the Event - i.e. the Event has been conducted as a service to them, or in production of goods for them."
    },
    "subLabel": {
      "type": "literal",
      "value": "Customer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assessor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Actor assesses something to be true."
    },
    "subLabel": {
      "type": "literal",
      "value": "Assessor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationRequester"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ActiveEventParticipant where a ResponsibleActor requests authority to act "
    },
    "subLabel": {
      "type": "literal",
      "value": "Authorisation Requester"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#InDisagreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is in disagreement"
    },
    "subLabel": {
      "type": "literal",
      "value": "In Disagreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccountInUse"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an OnlineAccount participates in an OnlineEvent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Account In Use"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationReviewer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ActiveEventParticipant where a ResponsibleActor reviews an AuthorisationRequest"
    },
    "subLabel": {
      "type": "literal",
      "value": "Authorisation Reviewer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrested"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons role when arrested"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrested"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrested"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's role when arrested"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrested"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prosecutor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A persons role as a prosecutor in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prosecutor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prosecutor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A person's role as a prosecutor in a trial"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prosecutor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyToAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is party to an EndToEndAgreement\n\nNote:  this includes EndToEndAgreements that were never ratified - i.e. they got to the negotiation stage but were never put into force"
    },
    "subLabel": {
      "type": "literal",
      "value": "Party To Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyToAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is party to an EndToEndAgreementNote:  this includes EndToEndAgreements that were never ratified - i.e. they got to the negotiation stage but were never put into force"
    },
    "subLabel": {
      "type": "literal",
      "value": "Party To Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Destroyer"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a Destroy event as a destroyer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Destroyer"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Perpetrator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Actor where the ResponsibleActor conducts a CriminalActivity"
    },
    "subLabel": {
      "type": "literal",
      "value": "Perpetrator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RadioCoverageArea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location whose area is that in which a RadioMast hast viable communications coverage.Note: The RadioMast itself may not be part of this area, as often the immediate area around the base of a RadioMast is a deadspot. Note: Most radio area coverage is complex in shape, and the preferred representation in IES4 is GeoJSON. No attempt is made here to differentiate between signal strength zones. To do this, create multople RadioCoverAreas for the same RadioMast and label them appropriately. "
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeographicFeature"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is a naturally occurring feature on the earth."
    },
    "subLabel": {
      "type": "literal",
      "value": "Geographic Feature"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoPoint"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is a point (mathematically speaking, of vanishing volume) on, below or above the surface of the WGS84 spheroid. The distance from the spheroid surface is given by the altitudeInMetres attribute."
    },
    "subLabel": {
      "type": "literal",
      "value": "Geo Point"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FloodArea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RealEstate"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location (and an Asset) that has been defined or constructed for the purpose of ownership"
    },
    "subLabel": {
      "type": "literal",
      "value": "Real Estate"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegionOfCountry"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is a general subdivision of a Country\n\ne.g. cities, towns, counties, states, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Region Of Country"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegionOfCountry"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is a general subdivision of a Countrye.g. cities, towns, counties, states, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Region Of Country"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegionOfWorld"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is a general subdivision of the world - e.g. continents, sub-continents, economic areas, etc.\n\nRegions of the world may sometimes be spatially separated (e.g. economic areas)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Region Of World"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RegionOfWorld"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location that is a general subdivision of the world - e.g. continents, sub-continents, economic areas, etc.Regions of the world may sometimes be spatially separated (e.g. economic areas)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Region Of World"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FloodWatchArea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Country"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location whose land extent / borders are recognised as a Country by the International Standards Organisation (ISO)Note: this is simply the land, any buildings on it, and the airspace and ground beneath as recognised by the ISO definition. It does not include the nationals of the Country, its Government, etc. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Country"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Country"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location whose land extent / borders are recognised as a Country by the International Standards Organisation (ISO)\n\nNote: this is simply the land, any buildings on it, and the airspace and ground beneath as recognised by the ISO definition. It does not include the nationals of the Country, its Government, etc. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Country"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Crossing"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location and an ArbitraryOverlap whose extent is defined by the shared overlap of two or more Locations"
    },
    "subLabel": {
      "type": "literal",
      "value": "Crossing"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MapGridArea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Location"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location whose area is specified by a grid on a map.Note this is the actual area, not the map grid. "
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ISO3166_1Alpha_3"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "ISO 3166-1 alpha 3 (3-Letter Country Code)"
    },
    "subLabel": {
      "type": "literal",
      "value": "ISO3166_1Alpha_3"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Longitude"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The GeoIdentity that is a decimal representation of an angle of longitude of a PointOnEarthSurface (WGS84)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Longitude"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Northing"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The GeoIdentity that is a representation of the northward componrnent of cartesian point on a map - i.e. on a 2D projection of the globe such as a mercator projection."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LineOfAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A line in an Address. There may be any number of these."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OSGridReference"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity that is an Ordnance Survey Grid Reference - i.e. pertaining to Great Britain."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PostalCode"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity used to (partially) identify and address"
    },
    "subLabel": {
      "type": "literal",
      "value": "Postal Code"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RoomNumber"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity used to identify a PartOfFacility"
    },
    "subLabel": {
      "type": "literal",
      "value": "Room Number"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#UN_LOCODE"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity that is a United Nations Code for Trade and Transport Locations"
    },
    "subLabel": {
      "type": "literal",
      "value": "UN_LOCODE"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Latitude"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity that is a decimal representation of an angle of latitude of a PointOnEarthSurface (WGS84)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Latitude"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ICAOCode"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity that is administered by the International Civil Aviation Organisation for identifying airports"
    },
    "subLabel": {
      "type": "literal",
      "value": "ICAOCode"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#What3words"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity that is a what3words Location specifier\n\n(see what3words.com)"
    },
    "subLabel": {
      "type": "literal",
      "value": "What3words"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#What3words"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity that is a what3words Location specifier(see what3words.com)"
    },
    "subLabel": {
      "type": "literal",
      "value": "What3words"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Easting"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The GeoIdentity that is a representation of the eastward componrnent of cartesian point on a map - i.e. on a 2D projection of the globe such as a mercator projection."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IATACode"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GeoIdentity that is administered by the International Air Transport Associate for airport identification"
    },
    "subLabel": {
      "type": "literal",
      "value": "IATACode"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TOID"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "TOIDs (TOpographic IDentifiers) are unique and persistent identifiers created and managed by Ordnance Survey Great Britain to identify topographic objects in OS datasets. \n\nExample: the TOID for the Tower of London is osgb1000006032892."
    },
    "subLabel": {
      "type": "literal",
      "value": "TOID"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TOID"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "TOIDs (TOpographic IDentifiers) are unique and persistent identifiers created and managed by Ordnance Survey Great Britain to identify topographic objects in OS datasets. Example: the TOID for the Tower of London is osgb1000006032892."
    },
    "subLabel": {
      "type": "literal",
      "value": "TOID"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FirstLineOfAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoIdentity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The first line of the Address including the number of the dwelling and the street name."
    },
    "subLabel": {
      "type": "literal",
      "value": "First Line Of Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfOnlineService"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfWebResource"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of OnlineService"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Online Service"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ObservedLocation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Observed"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ObservedTarget"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Observed"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Restriction"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Class"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of property restrictions."
    },
    "subLabel": {
      "type": "literal",
      "value": "Restriction"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPerson"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfResponsibleActor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Person"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfResponsibleActor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of OrganisationNote: care should be exercised when using ClassOfOrganisation - it should only be used for classifications that apply to the whole life of the organisation."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#War"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Disagreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Disagreement where at least one party has declared war"
    },
    "subLabel": {
      "type": "literal",
      "value": "War"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPAddressRange"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifierRange"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationIdentifierRange between two IPAddress instances\n\nIn these examples the IPv4 address range is specified using the following format:\n<lower address> - <upper address> using one of a number of different IPv4 address notations.\n\nThe IPv4 address range is all the IPv4 addresses between the <lower address> and the <upper address> (inclusive).\n\nBoth examples here represent the same address range (but in different notations).\n\nThe Dot Decimal Range notation specifies the <lower address> and the <upper address> in Dot Decimal form – where\neach of these 32-bit IPv4 addresses are expressed as four octets expressed individually in decimal and separated by periods.\n\nThe Dot Hexadecimal Range notation specifies the <lower address> and the <upper address> in Dot Hexadecimal form – where each of these 32-bit IPv4 addresses are expressed as four octets where each octet is prefixed with 0x, expressed individually in hexadecimal and separated by periods."
    },
    "subLabel": {
      "type": "literal",
      "value": "IPAddress Range"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IPAddressRange"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifierRange"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationIdentifierRange between two IPAddress instancesIn these examples the IPv4 address range is specified using the following format:&lt;lower address&gt; - &lt;upper address&gt; using one of a number of different IPv4 address notations.The IPv4 address range is all the IPv4 addresses between the &lt;lower address&gt; and the &lt;upper address&gt; (inclusive).Both examples here represent the same address range (but in different notations).The Dot Decimal Range notation specifies the &lt;lower address&gt; and the &lt;upper address&gt; in Dot Decimal form � whereeach of these 32-bit IPv4 addresses are expressed as four octets expressed individually in decimal and separated by periods.The Dot Hexadecimal Range notation specifies the &lt;lower address&gt; and the &lt;upper address&gt; in Dot Hexadecimal form � where each of these 32-bit IPv4 addresses are expressed as four octets where each octet is prefixed with 0x, expressed individually in hexadecimal and separated by periods."
    },
    "subLabel": {
      "type": "literal",
      "value": "IPAddress Range"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelephoneNumberRange"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifierRange"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsIdentifierRange of TelehoneNumbers"
    },
    "subLabel": {
      "type": "literal",
      "value": "Telephone Number Range"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DomainName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsIdentifierRange"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A CommunicationsIdentifierRange that defines a realm of administrative autonomy, authority or control within the internet.  [from wikipedia]"
    },
    "subLabel": {
      "type": "literal",
      "value": "Domain Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Investigation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IntelligenceOperation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IntelligenceOperation that researches a particular threat, or theme. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Investigation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Reconnaisance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IntelligenceOperation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IntelligenceOperation where an Entity or Event is observed for the purposes of planning"
    },
    "subLabel": {
      "type": "literal",
      "value": "Reconnaisance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndTransaction"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IntelligenceOperation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity covering the lifecycle of the trade"
    },
    "subLabel": {
      "type": "literal",
      "value": "End To End Transaction"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Surveillance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IntelligenceOperation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IntelligenceOperation that involves the continued observation of a Person or Location"
    },
    "subLabel": {
      "type": "literal",
      "value": "Surveillance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Entity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity typically represents a tangible thing like a Person, a Communications Device, or a Location."
    },
    "subLabel": {
      "type": "literal",
      "value": "Entity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PossibleWorld"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Element that encompasses a number of Events, Entities and States that may occur / have occurred. A PossibleWorld is used for scenario planning and forensics.  This is a very simple placeholder for an area of IES that is likely to grow in the future. For now, it can be used to group together a number of elements (using isPartOf relationship) to assert that they share the same truth - i.e. in one possible scenario, all of them were true. The same Element may exist in more than one PossibleWorld - i.e. scenarios may share elements. For version 4.1.0 of IES, PossibleWorld is to be used with AssessToBeTrue in order to specify a level of confidence or probability. More work is needed on this in later IES versions. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Possible World"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PossibleWorld"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Element that encompasses a number of Events, Entities and States that may occur / have occurred. A PossibleWorld is used for scenario planning and forensics.  \n\nThis is a very simple placeholder for an area of IES that is likely to grow in the future. For now, it can be used to group together a number of elements (using isPartOf relationship) to assert that they share the same truth - i.e. in one possible scenario, all of them were true. The same Element may exist in more than one PossibleWorld - i.e. scenarios may share elements. For version 4.1.0 of IES, PossibleWorld is to be used with AssessToBeTrue in order to specify a level of confidence or probability. More work is needed on this in later IES versions. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Possible World"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an Element\n\nNote: IES requires that any State must be related to its whole-life Element. In some cases, the identity of the whole-life element may be unknown (or of unknown type) but a whole-life element must still be created and related to the State.\n\nNote: When Events are decomposed into temporal parts, those parts are often Events themselves. The exception is when the temporal part is arbitrary (e.g. the 11th second of a meeting) when a State should be used. These are rare though."
    },
    "subLabel": {
      "type": "literal",
      "value": "State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#State"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A temporal state of an ElementNote: IES requires that any State must be related to its whole-life Element. In some cases, the identity of the whole-life element may be unknown (or of unknown type) but a whole-life element must still be created and related to the State.Note: When Events are decomposed into temporal parts, those parts are often Events themselves. The exception is when the temporal part is arbitrary (e.g. the 11th second of a meeting) when a State should be used. These are rare though."
    },
    "subLabel": {
      "type": "literal",
      "value": "State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PeriodOfTime"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PeriodOfTime is an Element whose spatial extent is everywhere, but whose temporal extent is limited. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Period Of Time"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArbitraryOverlap"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Element whose extent is defined by being the shared overlap of two or more Elements"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arbitrary Overlap"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event represents an activity or incident, involving one or more participating entities, that occurred/started at a specific point in time � e.g. a meeting, or a telephone call."
    },
    "subLabel": {
      "type": "literal",
      "value": "Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Element"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event represents an activity or incident, involving one or more participating entities, that occurred/started at a specific point in time – e.g. a meeting, or a telephone call."
    },
    "subLabel": {
      "type": "literal",
      "value": "Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Device that provides an endpoint for communications � e.g. mobile telephone, landline, satellite phone, CB Radio, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Communications Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsDevice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Device that provides an endpoint for communications – e.g. mobile telephone, landline, satellite phone, CB Radio, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Communications Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is a means of transportation – e.g. car, aircraft, ship."
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vehicle"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is a means of transportation � e.g. car, aircraft, ship."
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#System"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device (usually comprising software and hardware) that is generally a collection of other Devices brought together for a purpose. The Devices may or may not be removable / replaceable"
    },
    "subLabel": {
      "type": "literal",
      "value": "System"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#System"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device  comprising software and hardware brought together for a purpose. The Devices may or may not be removable / replaceable"
    },
    "subLabel": {
      "type": "literal",
      "value": "System"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NetworkInterface"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device (usually part of another Device) that provides wired or wireless access to a network.Network interfaces can often be removable. To model this, create DeviceStates of the NetworkInterface and make them part of the Device which hosts the interface for that period of time. "
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RadioMast"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Device that is placed in a Location to provide either a link from a wired to wireless connection, or to relay between two wireless endpoints."
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Container"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of ordered containers."
    },
    "subLabel": {
      "type": "literal",
      "value": "Seq"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Container"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of containers of alternatives."
    },
    "subLabel": {
      "type": "literal",
      "value": "Alt"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Container"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of unordered containers."
    },
    "subLabel": {
      "type": "literal",
      "value": "Bag"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TelecommunicationsExchange"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArbitraryPeriod"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PeriodOfTime"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PeriodOfTime for which is not delineated by a particular clock period - e.g. not a year, not a month, not a day, not an hour, etc. Instead it is one which is most clearly specified in terms of start and end that are ParticularPeriods."
    },
    "subLabel": {
      "type": "literal",
      "value": "Arbitrary Period"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ParticularPeriod"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PeriodOfTime"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PeriodOfTime that is a specific, contiguous extent of time.\n\nIMPORTANT NOTE: The URI of a ParticularPeriod shall be encoded as follows:\n\nhttp://iso8601.iso.org/2007-01-18T15%3A00%3A00\n\nWhere the content after the / is % encoded (e.g. encodeURIComponent in javascript). In the example above, the unencoded content would be \"2007-01-18T15:00:00\"\n\nThe reason behind using a URI is that receiving systems can resolve the periods of time and de-duplicate. \n\nExamples:\n\nTuesday 28th August 2018\n2016\nDecember 1944"
    },
    "subLabel": {
      "type": "literal",
      "value": "Particular Period"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ParticularPeriod"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PeriodOfTime"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PeriodOfTime that is a specific, contiguous extent of time.IMPORTANT NOTE: The URI of a ParticularPeriod shall be encoded as follows:http://iso8601.iso.org/2007-01-18T15%3A00%3A00Where the content after the / is % encoded (e.g. encodeURIComponent in javascript). In the example above, the unencoded content would be 2007-01-18T15:00:00The reason behind using a URI is that receiving systems can resolve the periods of time and de-duplicate. Examples:Tuesday 28th August 20182016December 1944"
    },
    "subLabel": {
      "type": "literal",
      "value": "Particular Period"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Ticket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Ticket that permits travel on a particular route or set of routes"
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntertainmentTicket"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Ticket"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Ticket to an EntertainmentEvent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Entertainment Ticket"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Religion"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ReligionState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity whose extent is all the people (PersonState) who share the same belief.Religions may be part of other religions - e.g. Christianity being made up of Catholic, Protestant, Orthodox, etc. 1. The religion �practiced� by the respective Person..2. The religion may be qualified to identity a particular sect.3. The Metropolitan Police standard [F] shall be used as the reference data standard"
    },
    "subLabel": {
      "type": "literal",
      "value": "Religion"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Religion"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ReligionState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Entity whose extent is all the people (PersonState) who share the same belief.\n\nReligions may be part of other religions - e.g. Christianity being made up of Catholic, Protestant, Orthodox, etc. \n\n1. The religion ‘practiced’ by the respective Person..\n2. The religion may be qualified to identity a particular sect.\n3. The Metropolitan Police standard [F] shall be used as the reference data standard"
    },
    "subLabel": {
      "type": "literal",
      "value": "Religion"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Post"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PostState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A part of an Organisation that has particular responsibilities"
    },
    "subLabel": {
      "type": "literal",
      "value": "Post"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Crossing"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ArbitraryOverlap"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Location and an ArbitraryOverlap whose extent is defined by the shared overlap of two or more Locations"
    },
    "subLabel": {
      "type": "literal",
      "value": "Crossing"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NamingScheme"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfClassOfEntity whose instances collect together all Names that belong to a particular scheme - i.e. an organisational identity scheme, a systems primary key format, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Naming Scheme"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfRepresentation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfEntity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Representation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Representation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfElement"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An rdfs:Class and an ExchangedItem whose instances are classes of classes of Element"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Class Of Element"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Datatype"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of RDF datatypes."
    },
    "subLabel": {
      "type": "literal",
      "value": "Datatype"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#Class"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of OWL classes."
    },
    "subLabel": {
      "type": "literal",
      "value": "Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#DeprecatedClass"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of deprecated classes."
    },
    "subLabel": {
      "type": "literal",
      "value": "DeprecatedClass"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An rdfs:Class and an ExchangedItem whose instances are classes of Element\n\nExamples:\n\n\nHuman groupings (e.g. Nigerian Women, British Men, Righthanded people, English Speakers);\nPolitical Ideologies\nWeapons\nDays of the week\nStandard procedures\netc.\n"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Element"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An rdfs:Class and an ExchangedItem whose instances are classes of ElementExamples:\tHuman groupings (e.g. Nigerian Women, British Men, Righthanded people, English Speakers);\tPolitical Ideologies\tWeapons\tDays of the week\tStandard procedures\tetc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Element"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfMeasureValue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfRepresentation that is the powertype of MeasureValue"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Measure Value"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Language"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfRepresentation that is a spoken or written form of human communication"
    },
    "subLabel": {
      "type": "literal",
      "value": "Language"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ContentCategory"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfClassOfEntity whose instances collect together all Representations that have similar content.Examples:* Fiction* Non-Fiction* Financial Information* Extremist Media"
    },
    "subLabel": {
      "type": "literal",
      "value": "Content Category"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ContentCategory"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfRepresentation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfClassOfEntity whose instances collect together all Representations that have similar content.\n\nExamples:\n\n* Fiction\n* Non-Fiction\n* Financial Information\n* Extremist Media"
    },
    "subLabel": {
      "type": "literal",
      "value": "Content Category"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Actor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Actor that can be held legally responsible for their actions - generally a Person or an Organisation. This also includes Posts which may be filled by people or organisations.Note: there are many situations (mostly due to the law) where a Person or Organisation can be the subject of a relationship or Event interchangeably. Hence the need for a parent class in the IES ontology. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Responsible Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ResponsibleActor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Actor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Actor that can be held legally responsible for their actions - generally a Person or an Organisation. This also includes Posts which may be filled by people or organisations.\n\nNote: there are many situations (mostly due to the law) where a Person or Organisation can be the subject of a relationship or Event interchangeably. Hence the need for a parent class in the IES ontology. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Responsible Actor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Animal"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Actor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Device"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Actor"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Asset that is man-made and performs one or more functions - i.e. it is also an Actor"
    },
    "subLabel": {
      "type": "literal",
      "value": "Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AtWar"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#InDisagreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An InDisagreement where the parties have declared war"
    },
    "subLabel": {
      "type": "literal",
      "value": "At War"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NumericRepresentation"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Currency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAmountOfMoney"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfAmountOfMoney that is the denomination as currency.The identifier should be specified as an ISO4217 three-letter code (e.g. USD, GBP, EUR, etc.)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Currency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Currency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfAmountOfMoney"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfAmountOfMoney that is the denomination as currency.\n\nThe identifier should be specified as an ISO4217 three-letter code (e.g. USD, GBP, EUR, etc.)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Currency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CreatedContent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Created"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Create EventParticipant where online content is created"
    },
    "subLabel": {
      "type": "literal",
      "value": "Created Content"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MaliciousAccountUse"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccountInUse"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineAccountInUse where the account is used to conduct a CriminalActivity online"
    },
    "subLabel": {
      "type": "literal",
      "value": "Malicious Account Use"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StoreCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PaymentArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PaymentArtefact issued by a retail Organisation that can only be used to pay for items supplied by that Organisation. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Store Card"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PaymentArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PaymentArtefact that permits travel on public transport"
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Card"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BankCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PaymentArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PaymentArtefact that is a physical card used for making financial transactions.Note: when used online, the accompanying Fan"
    },
    "subLabel": {
      "type": "literal",
      "value": "Bank Card"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BankCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PaymentArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PaymentArtefact that is a physical card used for making financial transactions.\n\nNote: when used online, the accompanying Fan"
    },
    "subLabel": {
      "type": "literal",
      "value": "Bank Card"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FurtherEducationalCollege"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EducationalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PrimarySchool"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EducationalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfTravelVisa"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfIndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of TravelVisa"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Travel Visa"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfIndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation that is the general case of a document - i.e. War and Peace as opposed to My copy of War and Peace"
    },
    "subLabel": {
      "type": "literal",
      "value": "Work Of Documentation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WorkOfDocumentation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfIndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation that is the general case of a document - i.e. \"War and Peace\" as opposed to \"My copy of War and Peace\""
    },
    "subLabel": {
      "type": "literal",
      "value": "Work Of Documentation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DocumentFormat"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfIndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfIndividualDocument whose members are all of the same document format - e.g.PDFMS Word"
    },
    "subLabel": {
      "type": "literal",
      "value": "Document Format"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DocumentFormat"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfIndividualDocument"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfIndividualDocument whose members are all of the same document format - e.g.\n\nPDF\nMS Word"
    },
    "subLabel": {
      "type": "literal",
      "value": "Document Format"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DemocraticChangeOfGovernment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ChangeOfGovernment"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ChangeOfGovernment that comes about by democratic means"
    },
    "subLabel": {
      "type": "literal",
      "value": "Democratic Change Of Government"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Transit"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Movement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Movement that is an individual transportation - e.g. an individual flight, sailing, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Transit"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Journey"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Movement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Movement which is made up of two or more TravelLegsNote:  this may include a number of legs to the journey (i.e. instances of TravelLeg that are part of the Journey)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Journey"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Journey"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Movement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Movement which is made up of two or more TravelLegs\n\nNote:  this may include a number of legs to the journey (i.e. instances of TravelLeg that are part of the Journey)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Journey"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveApproacher"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Approacher"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SetOfGeoMarginsOfError"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfLocation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ModelOfDevice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A type of Device - i.e. a ClassOfDevice \n\nExamples:\n\n* Smartphone\n* Apple iPhone 6S"
    },
    "subLabel": {
      "type": "literal",
      "value": "Model Of Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Model"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfDevice"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An rdf:type relationship asserting the Model of a DeviceExamples:* Smartphone* Apple iPhone 6S* Ford Focus"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccountState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Account of the communications transactions provided to a customer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Communications Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccountState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AccountState (and an EventParticipant) when an Account is involved in communicating. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Account In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Tendency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DispositionalClass"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DispositionalClass where all the instances share the same tendencyExample: People who tend to violence"
    },
    "subLabel": {
      "type": "literal",
      "value": "Tendency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Tendency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DispositionalClass"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DispositionalClass where all the instances share the same tendency\n\nExample: People who tend to violence"
    },
    "subLabel": {
      "type": "literal",
      "value": "Tendency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Capability"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DispositionalClass"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DispositionalClass where all the instances share the same capability\n\nExample: Vehicles capable of Mach 2"
    },
    "subLabel": {
      "type": "literal",
      "value": "Capability"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Capability"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DispositionalClass"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DispositionalClass where all the instances share the same capabilityExample: Vehicles capable of Mach 2"
    },
    "subLabel": {
      "type": "literal",
      "value": "Capability"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MilitaryAttack"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MilitaryEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A MilitaryEvent where force is used\n\nNote: was called \"Attack\" in v3.x - now called \"MilitaryAttack\" to distinguish from domestic attacks, terrorist attacks, hacking attacks, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Military Attack"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MilitaryAttack"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MilitaryEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A MilitaryEvent where force is usedNote: was called Attack in v3.x - now called MilitaryAttack to distinguish from domestic attacks, terrorist attacks, hacking attacks, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Military Attack"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrest"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LawEnforcement Event where a Person is arrested"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrest"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Marriage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity covering the entire extent of a two people's marriage (from the ceremony to either divorce or death)\n\nNote: As IES4 does not increase the scope of IES3, Marriage also includes common-law partners and civil partnerships"
    },
    "subLabel": {
      "type": "literal",
      "value": "Marriage"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Marriage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity covering the entire extent of a two peoples marriage (from the ceremony to either divorce or death)Note: As IES4 does not increase the scope of IES3, Marriage also includes common-law partners and civil partnerships"
    },
    "subLabel": {
      "type": "literal",
      "value": "Marriage"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prosecution"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LawEnforcement Event that is the trial of a suspect"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prosecution"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Incarceration"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LawEnforcement EndToEndActivity where a Person is incarcerated"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incarceration"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Investigation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OperationalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IntelligenceOperation that researches a particular threat, or theme. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Investigation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Arrest"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OperationalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LawEnforcement Event where a Person is arrested"
    },
    "subLabel": {
      "type": "literal",
      "value": "Arrest"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IntelligenceOperation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OperationalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OperationalEvent that involves the gathering, analysis or dissemination of intelligence"
    },
    "subLabel": {
      "type": "literal",
      "value": "Intelligence Operation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MilitaryEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OperationalEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OperationalEvent that involves military staff"
    },
    "subLabel": {
      "type": "literal",
      "value": "Military Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Communication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where two or more parties interact and exchange information"
    },
    "subLabel": {
      "type": "literal",
      "value": "Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntertainmentEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where entertainment (sporting, music, theatre, etc.) is provided"
    },
    "subLabel": {
      "type": "literal",
      "value": "Entertainment Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CoLocation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where the activity is uncertain, but it is known that some Entities were presentNote: whilst colocation can be easily inferred from data, sometimes its important to call out specific instances where entities of interest were in the same place at the same time."
    },
    "subLabel": {
      "type": "literal",
      "value": "Co Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CoLocation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where the activity is uncertain, but it is known that some Entities were present\n\nNote: whilst colocation can be easily inferred from data, sometimes it's important to call out specific instances where entities of interest were in the same place at the same time."
    },
    "subLabel": {
      "type": "literal",
      "value": "Co Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CooperAtSea"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradeEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where something is offered, bought or exchanged"
    },
    "subLabel": {
      "type": "literal",
      "value": "Trade Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalActivity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event which is illegal within the laws of the jurisdiction in which it takes place.\n\nNote: If the CriminalActivity falls into one of the Home Office Offence Classification Index codes, then this should be provided using the offenceCode attribute."
    },
    "subLabel": {
      "type": "literal",
      "value": "Criminal Activity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CriminalActivity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event which is illegal within the laws of the jurisdiction in which it takes place.Note: If the CriminalActivity falls into one of the Home Office Offence Classification Index codes, then this should be provided using the offenceCode attribute."
    },
    "subLabel": {
      "type": "literal",
      "value": "Criminal Activity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Observation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where an Element (Event or Entity) is observed by an Entity (i.e. a Person or Device)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Observation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Assess"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelService"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A transportation service, often provided as a public service � e.g. a scheduled flight, rail journey, ferry crossing, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Service"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelService"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A transportation service, often provided as a public service – e.g. a scheduled flight, rail journey, ferry crossing, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Service"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event that is part of (usually one end of) a Communication Event.Sometimes, all we know about a PartyInCommunication is their CommunicationsIdentifier (phone number, e-mail address, maybe even just an IP address) so the isIdentifiedBy relationship may be applied to PartyInCommunication"
    },
    "subLabel": {
      "type": "literal",
      "value": "Party In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event that is part of (usually one end of) a Communication Event.\n\nSometimes, all we know about a PartyInCommunication is their CommunicationsIdentifier (phone number, e-mail address, maybe even just an IP address) so the isIdentifiedBy relationship may be applied to PartyInCommunication"
    },
    "subLabel": {
      "type": "literal",
      "value": "Party In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LifecycleEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event that brings about change to its environment or another Element - e.g. creation, destruction or modification"
    },
    "subLabel": {
      "type": "literal",
      "value": "Lifecycle Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event related to democratic processes or party politics"
    },
    "subLabel": {
      "type": "literal",
      "value": "Political Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Approach"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AuthorisationStage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event which is part of an EndToEndAuthorisation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Authorisation Stage"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CheckIn"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where a Person checks in to a hotel or Transit. This also includes swiping tickets to use public transportThe location of the CheckIn is specified using a happensIn relationship.The CheckIn may be part of another Event - e.g. an EntertainmentEvent or Transit event. Simply use the isPartOf relationship to specify this."
    },
    "subLabel": {
      "type": "literal",
      "value": "Check In"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CheckIn"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where a Person checks in to a hotel or Transit. This also includes swiping tickets to use public transport\n\nThe location of the CheckIn is specified using a happensIn relationship.\n\nThe CheckIn may be part of another Event - e.g. an EntertainmentEvent or Transit event. Simply use the isPartOf relationship to specify this."
    },
    "subLabel": {
      "type": "literal",
      "value": "Check In"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeTrue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where a fact is assessed to be true by a Actor (i.e. a Person or Device)An AssessToBeTrue shall have one and only one hmlConfidence attribute (i.e. this is mandatory)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Assess To Be True"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AssessToBeTrue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where a fact is assessed to be true by a Actor (i.e. a Person or Device)\n\nAn AssessToBeTrue shall have one and only one hmlConfidence attribute (i.e. this is mandatory)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Assess To Be True"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AgreementStage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event which is part of an EndToEndAgreement"
    },
    "subLabel": {
      "type": "literal",
      "value": "Agreement Stage"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BusinessEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event that is commercial or administrative in nature"
    },
    "subLabel": {
      "type": "literal",
      "value": "Business Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event on the internet"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Competition"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where the participants are competing with each other"
    },
    "subLabel": {
      "type": "literal",
      "value": "Competition"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Disagreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event that covers the end-to-end disagreement between parties"
    },
    "subLabel": {
      "type": "literal",
      "value": "Disagreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Follow"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Movement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where an Entity moves from one place to another."
    },
    "subLabel": {
      "type": "literal",
      "value": "Movement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Cooperation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event where the participants are cooperating with each other"
    },
    "subLabel": {
      "type": "literal",
      "value": "Cooperation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event that involves the application of criminal law"
    },
    "subLabel": {
      "type": "literal",
      "value": "Law Enforcement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OperationalEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event conducted by military or national security actors"
    },
    "subLabel": {
      "type": "literal",
      "value": "Operational Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Event"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Event (usually of long duration) that is composed of a number of other Events."
    },
    "subLabel": {
      "type": "literal",
      "value": "End To End Activity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcementOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GovernmentOrganisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GovernmentOrganisation that investigates crimes and brings the perpetrators to justice. \nWikipedia definition: Law enforcement is any system by which some members of society act in an organized manner to enforce the law by discovering, deterring, rehabilitating, or punishing people who violate the rules and norms governing that society."
    },
    "subLabel": {
      "type": "literal",
      "value": "Law Enforcement Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LawEnforcementOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GovernmentOrganisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GovernmentOrganisation that investigates crimes and brings the perpetrators to justice. Wikipedia definition: Law enforcement is any system by which some members of society act in an organized manner to enforce the law by discovering, deterring, rehabilitating, or punishing people who violate the rules and norms governing that society."
    },
    "subLabel": {
      "type": "literal",
      "value": "Law Enforcement Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MilitaryOrganisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GovernmentOrganisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GovernmentOrganisation that conducts warfighting, peacekeeping and emergency civil support functions"
    },
    "subLabel": {
      "type": "literal",
      "value": "Military Organisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IntelligenceAgency"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GovernmentOrganisation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A GovernmentOrganisation that collects, analyses or disseminates intelligence"
    },
    "subLabel": {
      "type": "literal",
      "value": "Intelligence Agency"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DebitCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BankCard"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BankCard where transactions debit from a bank account"
    },
    "subLabel": {
      "type": "literal",
      "value": "Debit Card"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CreditCard"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BankCard"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A BankCard that allows the customer to carry a line of credit"
    },
    "subLabel": {
      "type": "literal",
      "value": "Credit Card"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfMeasure"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfCharacteristic"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Surname"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonName that is their inherited or married nameNote:A surname will often be applied to a State of the Person, as names tend to change over time"
    },
    "subLabel": {
      "type": "literal",
      "value": "Surname"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Surname"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonName that is their inherited or married name\n\nNote:\nA surname will often be applied to a State of the Person, as names tend to change over time"
    },
    "subLabel": {
      "type": "literal",
      "value": "Surname"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonTitle"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The title associated with the name of the person."
    },
    "subLabel": {
      "type": "literal",
      "value": "Person Title"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GivenName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonName that is one of the given names of a PersonNote:A GivenName will often be applied to a State of the Person, as names tend to change over time"
    },
    "subLabel": {
      "type": "literal",
      "value": "Given Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GivenName"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonName that is one of the given names of a Person\n\nNote:\nA GivenName will often be applied to a State of the Person, as names tend to change over time"
    },
    "subLabel": {
      "type": "literal",
      "value": "Given Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Nickname"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonName that is an unofficial or casual name\n\nNote:\nAn nickname will often be applied to a State of the Person, as these tend to be non-permanent names"
    },
    "subLabel": {
      "type": "literal",
      "value": "Nickname"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Nickname"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonName"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonName that is an unofficial or casual nameNote:An nickname will often be applied to a State of the Person, as these tend to be non-permanent names"
    },
    "subLabel": {
      "type": "literal",
      "value": "Nickname"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TherapyRoom"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MedicalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OccupationalTherapyRoom"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MedicalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DentalPracticeOffice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MedicalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PharmaceuticalDispensary"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MedicalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PhysiotherapyRoom"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MedicalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ConsultingRoom"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MedicalFacility"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PolicyAnnouncement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAnnouncement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalAnnouncement about policy"
    },
    "subLabel": {
      "type": "literal",
      "value": "Policy Announcement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeclarationOfWar"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PoliticalAnnouncement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PoliticalAnnouncement marking the start of a War"
    },
    "subLabel": {
      "type": "literal",
      "value": "Declaration Of War"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EntityInTransit"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelLeg"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TravelLeg where an Entity is moving in Transit"
    },
    "subLabel": {
      "type": "literal",
      "value": "Entity In Transit"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Literal"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Datatype"
    },
    "subComment": {
      "type": "literal",
      "value": "The datatype of XML literal values."
    },
    "subLabel": {
      "type": "literal",
      "value": "XMLLiteral"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Literal"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Datatype"
    },
    "subComment": {
      "type": "literal",
      "value": "The datatype of RDF literals storing JSON content."
    },
    "subLabel": {
      "type": "literal",
      "value": "JSON"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Literal"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Datatype"
    },
    "subComment": {
      "type": "literal",
      "value": "The datatype of language-tagged string values"
    },
    "subLabel": {
      "type": "literal",
      "value": "langString"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Literal"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Datatype"
    },
    "subComment": {
      "type": "literal",
      "value": "The datatype of RDF literals storing fragments of HTML content"
    },
    "subLabel": {
      "type": "literal",
      "value": "HTML"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Literal"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Datatype"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2"
    },
    "subLabel": {
      "type": "literal",
      "value": "PlainLiteral"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#IrreflexiveProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of irreflexive properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "IrreflexiveProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#SymmetricProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of symmetric properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "SymmetricProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#AsymmetricProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of asymmetric properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "AsymmetricProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#InverseFunctionalProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of inverse-functional properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "InverseFunctionalProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#TransitiveProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of transitive properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "TransitiveProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ReflexiveProperty"
    },
    "super": {
      "type": "uri",
      "value": "http://www.w3.org/2002/07/owl#ObjectProperty"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The class of reflexive properties."
    },
    "subLabel": {
      "type": "literal",
      "value": "ReflexiveProperty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Reservation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Rights"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Rights where the rights holder has reserved some future event - e.g. hotel reservation, travel reservation, delivery, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Reservation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Renter"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyToAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PartyToAgreement where a ResponsibleActor rents an Entity from another party"
    },
    "subLabel": {
      "type": "literal",
      "value": "Renter"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RentalProvider"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PartyToAgreement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PartyToAgreement where a ResponsibleActor provides an Entity to rent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Rental Provider"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Webpage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is a page on the web."
    },
    "subLabel": {
      "type": "literal",
      "value": "Webpage"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LiveCast"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is video or audio streamed online in real time.\n\nNote: the begin and end dates for a LiveCast instance mark its life online rather than the duration of the actual recording. The recording itself should be tracked using an OnlineContentCreation Event."
    },
    "subLabel": {
      "type": "literal",
      "value": "Live Cast"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#LiveCast"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is video or audio streamed online in real time.Note: the begin and end dates for a LiveCast instance mark its life online rather than the duration of the actual recording. The recording itself should be tracked using an OnlineContentCreation Event."
    },
    "subLabel": {
      "type": "literal",
      "value": "Live Cast"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineComment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is a comment on an existing OnlineArtefact instance"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Comment"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SocialMediaPost"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is part of a SocialMediaPage\n\nNote: the content may be created by a different account to the one which created the SocialMediaPage"
    },
    "subLabel": {
      "type": "literal",
      "value": "Social Media Post"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SocialMediaPost"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is part of a SocialMediaPageNote: the content may be created by a different account to the one which created the SocialMediaPage"
    },
    "subLabel": {
      "type": "literal",
      "value": "Social Media Post"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineLike"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "OnlineArtefact that is a \"like\" of an existing OnlineArtefact instance"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Like"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineLike"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "OnlineArtefact that is a like of an existing OnlineArtefact instance"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Like"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SocialMediaPage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is user-created - e.g. a facebook timeline, twitter feed, etc. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Social Media Page"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Cookie"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is stored on a Device to enable continuity of session, log-in, or simply to track activity online.Cookies tend to be ephemeral, an unique to a device, so no states are required. Simply use cookieOnDevice relationship mark the stand and end BoundingStates of the Cookie. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Cookie"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Cookie"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefact"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An OnlineArtefact that is stored on a Device to enable continuity of session, log-in, or simply to track activity online.\n\nCookies tend to be ephemeral, an unique to a device, so no states are required. Simply use cookieOnDevice relationship mark the stand and end BoundingStates of the Cookie. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Cookie"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attendance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Presence"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Presence where the Person is presentNote - we may not know the identity of the person, so would just create only the Attendance (EventParticipant). This allows the model to grow as more information is discovered without recourse to using sameAs relationships."
    },
    "subLabel": {
      "type": "literal",
      "value": "Attendance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attendance"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Presence"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Presence where the Person is present\n\nNote - we may not know the identity of the person, so would just create only the Attendance (EventParticipant). This allows the model to grow as more information is discovered without recourse to using sameAs relationships."
    },
    "subLabel": {
      "type": "literal",
      "value": "Attendance"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnJourney"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Moving"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant in which an Entity is on a Journey (i.e. a multi-part journey)"
    },
    "subLabel": {
      "type": "literal",
      "value": "On Journey"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelLeg"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Moving"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant in which a Entity travels. That travel may be part of a Journey.The TravelLeg may be part of a Journey (i.e. the Journey has one of more legs)."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Leg"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelLeg"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Moving"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant in which a Entity travels. That travel may be part of a Journey.\n\nThe TravelLeg may be part of a Journey (i.e. the Journey has one of more legs)."
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Leg"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SocialServicesIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NationalIdentityNumber"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An NationalIdentityNumber used for managing a citizens access to social servicesIn UK, this would be an NI number, in the US, it would be the social security number"
    },
    "subLabel": {
      "type": "literal",
      "value": "Social Services Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SocialServicesIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NationalIdentityNumber"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An NationalIdentityNumber used for managing a citizen's access to social services\n\nIn UK, this would be an NI number, in the US, it would be the social security number"
    },
    "subLabel": {
      "type": "literal",
      "value": "Social Services Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#HealthServiceIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NationalIdentityNumber"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A NationalIdentityNumber used for managing a citizens through-life healthcareIn UK, this would be an NHS number, apart from Scotland where it is called a CHI number"
    },
    "subLabel": {
      "type": "literal",
      "value": "Health Service Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#HealthServiceIdentifier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#NationalIdentityNumber"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A NationalIdentityNumber used for managing a citizen's through-life healthcare\n\nIn UK, this would be an NHS number, apart from Scotland where it is called a CHI number"
    },
    "subLabel": {
      "type": "literal",
      "value": "Health Service Identifier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TravelReservation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradedAsset"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A TradedAsset where the asset is a Reservation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Travel Reservation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IncomingGovernment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Government that took power after a ChangeOfGovernment"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incoming Government"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookedPassenger"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Persons involvement as a booked traveller in a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booked Passenger"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookedPassenger"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person's involvement as a booked traveller in a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booked Passenger"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingPayment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an AmountOfMoney in cash is used as payment in a TravelBooking.\n\nWhen neither card nor cash is used, there will be an accompanying MoneyTransfer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Payment"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingPayment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an AmountOfMoney in cash is used as payment in a TravelBooking.When neither card nor cash is used, there will be an accompanying MoneyTransfer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Payment"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prisoner"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A persons role when incarcerated"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prisoner"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Prisoner"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A person's role when incarcerated"
    },
    "subLabel": {
      "type": "literal",
      "value": "Prisoner"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CardUsed"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a PaymentArtefact is participant in a TradeEvent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Card Used"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Approached"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeclaringParty"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor makes an AnnouncementNote: this also covers GoverningParty from IES 3.2"
    },
    "subLabel": {
      "type": "literal",
      "value": "Declaring Party"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeclaringParty"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor makes an Announcement\n\nNote: this also covers GoverningParty from IES 3.2"
    },
    "subLabel": {
      "type": "literal",
      "value": "Declaring Party"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Casualty"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Relates a MilitaryAttack to a Person who was injured or killed in the attack"
    },
    "subLabel": {
      "type": "literal",
      "value": "Casualty"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#WeaponLocation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Relates an MilitaryAttack to the location of the attacking weapon system"
    },
    "subLabel": {
      "type": "literal",
      "value": "Weapon Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Carrier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a Delivery as a carrier"
    },
    "subLabel": {
      "type": "literal",
      "value": "Carrier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingAgent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActors involvement as the facilitator of a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Agent"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#BookingAgent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ResponsibleActor's involvement as the facilitator of a TravelBooking"
    },
    "subLabel": {
      "type": "literal",
      "value": "Booking Agent"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Follower"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Cooperator"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is in Cooperation"
    },
    "subLabel": {
      "type": "literal",
      "value": "Cooperator"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Supplier"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a TradeEvent as a supplier"
    },
    "subLabel": {
      "type": "literal",
      "value": "Supplier"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SendingAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a FinancialAccount sends money"
    },
    "subLabel": {
      "type": "literal",
      "value": "Sending Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OutgoingGovernment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Government that left power following a ChangeOfGovernment"
    },
    "subLabel": {
      "type": "literal",
      "value": "Outgoing Government"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Victim"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is the victim of a CriminalActivity"
    },
    "subLabel": {
      "type": "literal",
      "value": "Victim"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IncumbentRepresentative"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person in-office prior to the Election being decided"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incumbent Representative"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#PersonInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A PersonState (and an EventParticipant) when a Person is involved in communicating. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Person In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectoralCandidate"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Person standing for elected office"
    },
    "subLabel": {
      "type": "literal",
      "value": "Electoral Candidate"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AdministeredAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a FinancialAccount is administered"
    },
    "subLabel": {
      "type": "literal",
      "value": "Administered Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Attacker"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Relates a MilitaryAttack to the Organisation conducting the attack"
    },
    "subLabel": {
      "type": "literal",
      "value": "Attacker"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Destroyed"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is destroyed"
    },
    "subLabel": {
      "type": "literal",
      "value": "Destroyed"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ServiceProvider"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The role of an Organisation in providing a Service (e.g. a TeleConference)"
    },
    "subLabel": {
      "type": "literal",
      "value": "Service Provider"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Rented"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is rented"
    },
    "subLabel": {
      "type": "literal",
      "value": "Rented"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Purchaser"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a TradeEvent as a purchaserNote: in the case of a RequestForQuotation, the purchaser is the person or organisation issuing the RfQNote: in the case of an online purchase where the buyer is unknown, the participant may be an OnlineIdentifier"
    },
    "subLabel": {
      "type": "literal",
      "value": "Purchaser"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Purchaser"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a TradeEvent as a purchaser\n\nNote: in the case of a RequestForQuotation, the purchaser is the person or organisation issuing the RfQ\n\nNote: in the case of an online purchase where the buyer is unknown, the participant may be an OnlineIdentifier"
    },
    "subLabel": {
      "type": "literal",
      "value": "Purchaser"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeliveryRecipient"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor participates in a Delivery as a recipient"
    },
    "subLabel": {
      "type": "literal",
      "value": "Delivery Recipient"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VotingAttendee"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "When a Government has voting rights at a Summit"
    },
    "subLabel": {
      "type": "literal",
      "value": "Voting Attendee"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Competitor"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a ResponsibleActor is in competition"
    },
    "subLabel": {
      "type": "literal",
      "value": "Competitor"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TicketUsedInCheckIn"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a Ricket is used in a CheckIn event\n\ne.g. a London Underground ticket being used at a barrier, or a concert ticket being scanned on arrival at the venue"
    },
    "subLabel": {
      "type": "literal",
      "value": "Ticket Used In Check In"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TicketUsedInCheckIn"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a Ricket is used in a CheckIn evente.g. a London Underground ticket being used at a barrier, or a concert ticket being scanned on arrival at the venue"
    },
    "subLabel": {
      "type": "literal",
      "value": "Ticket Used In Check In"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where the participant is actively engaged in the Event.Note: In BORO, EventParticipant would be Involvement and ActiveEventParticipant would be Participation."
    },
    "subLabel": {
      "type": "literal",
      "value": "Active Event Participant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ActiveEventParticipant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where the participant is \"actively\" engaged in the Event.\n\nNote: In BORO, EventParticipant would be \"Involvement\" and ActiveEventParticipant would be \"Participation\"."
    },
    "subLabel": {
      "type": "literal",
      "value": "Active Event Participant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ReceivingAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a FinancialAccount receives money"
    },
    "subLabel": {
      "type": "literal",
      "value": "Receiving Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Observed"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Element is Observed"
    },
    "subLabel": {
      "type": "literal",
      "value": "Observed"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Followed"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeliveryAddress"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Address participates in a Delivery as a the location to which the delivery is made"
    },
    "subLabel": {
      "type": "literal",
      "value": "Delivery Address"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Married"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A State when a Person is married to another person"
    },
    "subLabel": {
      "type": "literal",
      "value": "Married"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Created"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is created\n\nThe date/time of the creation can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Created"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Created"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is createdThe date/time of the creation can be specified using the inPeriod relationship. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Created"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ObserverStatus"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "When a Government has observer rights at a Summit"
    },
    "subLabel": {
      "type": "literal",
      "value": "Observer Status"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CashPayment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an AmountOfMoney in cash is used as payment in a Purchase.When neither card nor cash is used, there will be an accompanying MoneyTransfer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Cash Payment"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CashPayment"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an AmountOfMoney in cash is used as payment in a Purchase.\n\nWhen neither card nor cash is used, there will be an accompanying MoneyTransfer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Cash Payment"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TargetLocation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Relates an MilitaryAttack to the location specified for the attack"
    },
    "subLabel": {
      "type": "literal",
      "value": "Target Location"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A DeviceState (and an EventParticipant) when a Device is communicating. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Device In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Approacher"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineArtefactInEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an OnlineArtefact participates in an OnlineEvent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Artefact In Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#IdUsedInCheckIn"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an IdentityDocument is used in a CheckIn event"
    },
    "subLabel": {
      "type": "literal",
      "value": "Id Used In Check In"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EvidentialPhotograph"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Relates a Surveillance Event to a Document that is the evidence resulting from the Surveillance"
    },
    "subLabel": {
      "type": "literal",
      "value": "Evidential Photograph"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VehicleUsed"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant in which a Vehicle is used to transport Entities"
    },
    "subLabel": {
      "type": "literal",
      "value": "Vehicle Used"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SubjectOfOperation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is the subject of an OperationalEvent\n\nExamples:\n\n* person / organisation under investigation\n* recon'd location\n* subject of surveillance"
    },
    "subLabel": {
      "type": "literal",
      "value": "Subject Of Operation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SubjectOfOperation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is the subject of an OperationalEventExamples:* person / organisation under investigation* recond location* subject of surveillance"
    },
    "subLabel": {
      "type": "literal",
      "value": "Subject Of Operation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#SurveillanceWarrant"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Relates a Surveillance Event to a Document that is the warrant for the Surveillance"
    },
    "subLabel": {
      "type": "literal",
      "value": "Surveillance Warrant"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountInCommunication"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AccountState (and an EventParticipant) when an Account is involved in communicating. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Account In Communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeviceOnline"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where a Device participates in an OnlineEvent"
    },
    "subLabel": {
      "type": "literal",
      "value": "Device Online"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Presence"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Entity is CoLocated with other Entities of interest"
    },
    "subLabel": {
      "type": "literal",
      "value": "Presence"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Moving"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant in which an Entity moves from one Location to another"
    },
    "subLabel": {
      "type": "literal",
      "value": "Moving"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradedAsset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Asset is participant in a TradeEventThis could be a specific Asset (e.g. serial numbered item) being offered for sale (as opposed to a type of Asset) or an Asset being delivered, withdrawn from sale, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Traded Asset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TradedAsset"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EventParticipant where an Asset is participant in a TradeEvent\n\nThis could be a specific Asset (e.g. serial numbered item) being offered for sale (as opposed to a type of Asset) or an Asset being delivered, withdrawn from sale, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Traded Asset"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DeclaredTarget"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The Organisation against which War has been declared"
    },
    "subLabel": {
      "type": "literal",
      "value": "Declared Target"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ElectoralRegion"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EventParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The RegionalConstituency being decided in an Election"
    },
    "subLabel": {
      "type": "literal",
      "value": "Electoral Region"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPaymentArtefact"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of PaymentArtefact\n\nExamples:\n\n* Visa\n* Oyster\n* Selfridges Store Card"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Payment Artefact"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfPaymentArtefact"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of PaymentArtefactExamples:* Visa* Oyster* Selfridges Store Card"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Payment Artefact"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfElement whose instances are classes of Event. This is the powertype of Event.\n\nExamples:\n\n* Conference\n* Football Match\n* Annual General Meeting"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEvent"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An ClassOfElement whose instances are classes of Event. This is the powertype of Event.Examples:* Conference* Football Match* Annual General Meeting"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Event"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Characteristic"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfElement whose instances all share a common property - e.g. they are all the same colour, mass, etc. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Characteristic"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Entity - i.e. a ClassOfElement whose instances are classes of EntityExamples:� Human groupings (e.g. Nigerian Women, British Men, Righthanded people, English Speakers);� Weapons� Etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Entity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfEntity"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Entity - i.e. a ClassOfElement whose instances are classes of Entity\n\nExamples:\n\n· Human groupings (e.g. Nigerian Women, British Men, Righthanded people, English Speakers);\n· Weapons\n· Etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Entity"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfElement whose instances are classes of States. This is the powertype of State.\n\nExamples:\n\n* Roles"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfState"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfElement whose instances are classes of States. This is the powertype of State.Examples:* Roles"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of State"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TimeBoundedClass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfElement whose instances all begin and end within the bounds specified for the Class. In other words, a class that is defined by the temporal extent of its members. Note, if either the begin or end bound are missing, it is taken to be indeterminate. For example, if the begin bound is 1st Jan 2018, the class has instances that all started after that date, and their end is irrelevant. Example:Everything that began and ended in the year 1900 - this would include all activities that took place within that year (but did not extend beyond it), everything created and destroyed within that time, and everything that was born and died during the period. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Time Bounded Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#TimeBoundedClass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfElement whose instances all begin and end within the bounds specified for the Class. In other words, a class that is defined by the temporal extent of its members. \n\nNote, if either the begin or end bound are missing, it is taken to be indeterminate. For example, if the begin bound is 1st Jan 2018, the class has instances that all started after that date, and their end is irrelevant. \n\nExample:\nEverything that began and ended in the year 1900 - this would include all activities that took place within that year (but did not extend beyond it), everything created and destroyed within that time, and everything that was born and died during the period. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Time Bounded Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfDevice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Device- i.e. a ClassOfEntity whose instances are classes of Device\n\nExamples:\n\n* Smartphone\n* Apple iPhone 6S"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfDevice"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of Device- i.e. a ClassOfEntity whose instances are classes of DeviceExamples:* Smartphone* Apple iPhone 6S"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Device"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DispositionalClass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfElement whose instances all share the same disposition - e.g. capability or tendency\n\nExample: Vehicles capable of Mach 2"
    },
    "subLabel": {
      "type": "literal",
      "value": "Dispositional Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DispositionalClass"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfElement"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ClassOfElement whose instances all share the same disposition - e.g. capability or tendencyExample: Vehicles capable of Mach 2"
    },
    "subLabel": {
      "type": "literal",
      "value": "Dispositional Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Investigation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An IntelligenceOperation that researches a particular threat, or theme. "
    },
    "subLabel": {
      "type": "literal",
      "value": "Investigation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndTransaction"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity covering the lifecycle of the trade"
    },
    "subLabel": {
      "type": "literal",
      "value": "End To End Transaction"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Marriage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity covering the entire extent of a two people's marriage (from the ceremony to either divorce or death)\n\nNote: As IES4 does not increase the scope of IES3, Marriage also includes common-law partners and civil partnerships"
    },
    "subLabel": {
      "type": "literal",
      "value": "Marriage"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Marriage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity covering the entire extent of a two peoples marriage (from the ceremony to either divorce or death)Note: As IES4 does not increase the scope of IES3, Marriage also includes common-law partners and civil partnerships"
    },
    "subLabel": {
      "type": "literal",
      "value": "Marriage"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#War"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Disagreement where at least one party has declared war"
    },
    "subLabel": {
      "type": "literal",
      "value": "War"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndAgreement"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity which is the overall process of agreeing something, including all the events that take place under that agreement, such as the negotiation, signing, delivery of service, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "End To End Agreement"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndAuthorisation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An EndToEndActivity which is the overall process of requesting, receiving authority to act, and the conduct of activities under that authorisation until the period of authorisation ends. "
    },
    "subLabel": {
      "type": "literal",
      "value": "End To End Authorisation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Incarceration"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EndToEndActivity"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A LawEnforcement EndToEndActivity where a Person is incarcerated"
    },
    "subLabel": {
      "type": "literal",
      "value": "Incarceration"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EnvironmentAgencyFloodWarningMessage"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#DataObject"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation which might contain internal structure that can be exploited using bespoke tools and/or applications. Data objects might be geoobjects, video files, audio files, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Data Object"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#GeoRepresentation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation for a Location - e.g. a point, a polyline, etc."
    },
    "subLabel": {
      "type": "literal",
      "value": "Geo Representation"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation that is used to refer to something, usually in context of a NamingSchemeExamples:GBR - the ISO Trigram for the United KingdomGB - the FIPS two-letter code for the United KingdomMichael Caine  - stage name for Maurice Micklewhite"
    },
    "subLabel": {
      "type": "literal",
      "value": "Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Name"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation that is used to refer to something, usually in context of a NamingScheme\n\nExamples:\n\nGBR - the ISO Trigram for the United Kingdom\nGB - the FIPS two-letter code for the United Kingdom\n\"Michael Caine\"  - stage name for Maurice Micklewhite"
    },
    "subLabel": {
      "type": "literal",
      "value": "Name"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ClassOfIndividualDocument"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "The powertype of IndividualDocument"
    },
    "subLabel": {
      "type": "literal",
      "value": "Class Of Individual Document"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#EnvironmentAgencyFloodSeverityLevel"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MeasureValue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation of the value of a Measure\n\nNote: A UnitOfMeasure is almost always required. The reason it is not mandatory is that in some cases (due to partial reporting) we do not have complete information - e.g. we know the value was stated to be 10 but we don't know if that's metres or feet"
    },
    "subLabel": {
      "type": "literal",
      "value": "Measure Value"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MeasureValue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Representation"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A Representation of the value of a MeasureNote: A UnitOfMeasure is almost always required. The reason it is not mandatory is that in some cases (due to partial reporting) we do not have complete information - e.g. we know the value was stated to be 10 but we dont know if thats metres or feet"
    },
    "subLabel": {
      "type": "literal",
      "value": "Measure Value"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CommunicationsAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Account"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Account of the communications transactions provided to a customer"
    },
    "subLabel": {
      "type": "literal",
      "value": "Communications Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#FinancialAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Account"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Account held for financial management purposes."
    },
    "subLabel": {
      "type": "literal",
      "value": "Financial Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Account"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Account that enables a person, organisation or other entity to participate within a particular online domain.\n\nNote: was called \"OnlineIdentifier\" in previous versions of IES"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OnlineAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Account"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An Account that enables a person, organisation or other entity to participate within a particular online domain.Note: was called OnlineIdentifier in previous versions of IES"
    },
    "subLabel": {
      "type": "literal",
      "value": "Online Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#UnderFlagOfConvenience"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VesselState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Vessel"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#VesselState"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OpenAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountAdminEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AccountAdminEvent where a new Account is opened"
    },
    "subLabel": {
      "type": "literal",
      "value": "Open Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CloseAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountAdminEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AccountAdminEvent where an Account is shut down."
    },
    "subLabel": {
      "type": "literal",
      "value": "Close Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#UpdateAccount"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#AccountAdminEvent"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "An AccountAdminEvent where an Account is modified"
    },
    "subLabel": {
      "type": "literal",
      "value": "Update Account"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ConferenceHost"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#ConferenceParticipant"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A ConferenceParticipant that is in the role of host"
    },
    "subLabel": {
      "type": "literal",
      "value": "Conference Host"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#OperatingSystem"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#Software"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "Software that provides the basic access layer to hardware"
    },
    "subLabel": {
      "type": "literal",
      "value": "Operating System"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#CellularBaseStation"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#RadioMast"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A RadioMast that is used for cellular communication"
    }
  },
  {
    "sub": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#StandardMeasureValue"
    },
    "super": {
      "type": "uri",
      "value": "http://ies.data.gov.uk/ontology/ies4#MeasureValue"
    },
    "subType": {
      "type": "uri",
      "value": "http://www.w3.org/2000/01/rdf-schema#Class"
    },
    "subComment": {
      "type": "literal",
      "value": "A MeasureValue that is expressed in SI units"
    },
    "subLabel": {
      "type": "literal",
      "value": "Standard Measure Value"
    }
  }
]
