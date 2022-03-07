export type Asset = {
  asset: {	
    id:	number
    sensors: string[]
    model:	string
    status:	string
    healthscore:	number
    name:	string
    image:	string
    specifications: {
      maxTemp:	number
    }
    metrics: {
      totalCollectsUptime:	number
      totalUptime:	number
      lastUptimeAt:	Date
    }	
    unitId:	number
    companyId:	number
  };
};

export type AssetList = {
  assetList: Asset[],
  addAsset: (asset: Asset) => void;
};

export type User = {
  User: {	
    id:	number
    email: string
    name:	string
    unitId:	number
    companyId:	number
  };
};

export type UserList = {
  userList: User[],
  addUser: (user: User) => void;
};

export type Unit = {
  unit: {	
    id:	number
    name:	string
    companyId:	number
  };
};

export type UnitList = {
  unitList: Unit[],
  addUnit: (unit: Unit) => void;
};

export type Company = {
  company: {	
    id:	number
    name:	string
  };
};

export type CompanyList = {
  companyList: Company[],
  addCompany: (company: Company) => void;
};