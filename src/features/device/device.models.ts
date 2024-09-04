export interface IDevice {
  id: string;
  name: string;
  price: number;
  rating?: number;
  img?: string;
}

export interface IDevices {
  devices: IDevice[];
  selectedDevise: IDevices;
}

export interface IType {
  id: string;
  name: string;
}

export interface IBrand {
  id: string;
  name: string;
}

export interface IDeviceStore {
  isTypesFetching: boolean;
  types: IType[];
  isBrandsFetching: boolean;
  brands: IBrand[];
  isDevicesFetching: boolean;
  devices: IDevice[];
  selectedType: IType;
  selectedBrand: IBrand;
  isDeviceFetching: boolean;
  device: IDevice;
  page: number;
  totalCount: number;
  limitOnPage: number; // количество на странице
  error: string;
}
