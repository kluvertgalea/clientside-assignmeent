export class Drone {

  private _id: number;
  private _serialNumber: string;
  private _modelNumber: string;
  private _brand: string;
  private _model: string;
  private _ownerIdNumber: number;
  private _ownerFirstName: string;
  private _ownerLastName: string;
  private _ownerContactNumberCountryCode: number;
  private _ownerContactNumber: number;
  private _ownerEmail: string;

  constructor(
    id : number,
    serialNumber : string,
    modelNumber : string,
    brand : string,
    model : string,
    ownerIdNumber : number,
    ownerFirstName : string,
    ownerLastName : string,
    ownerContactNumberCountryCode : number,
    ownerContactNumber : number,
    ownerEmail : string
  ){
    this._id = id;
    this._serialNumber = serialNumber;
    this._modelNumber = modelNumber;
    this._brand = brand;
    this._model = model;
    this._ownerIdNumber = ownerIdNumber;
    this._ownerFirstName = ownerFirstName;
    this._ownerLastName = ownerLastName;
    this._ownerContactNumberCountryCode = ownerContactNumberCountryCode;
    this._ownerContactNumber = ownerContactNumber;
    this._ownerEmail = ownerEmail;
  }

  //Id
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  //Serial Number
  public get serialNumber(): string {
    return this._serialNumber;
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }

  //Model Number
  public get modelNumber(): string {
    return this._modelNumber;
  }
  public set modelNumber(value: string) {
    this._modelNumber = value;
  }

  //Brand
  public get brand(): string {
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }

  //Model
  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    this._model = value;
  }

  //Owner Id Number
  public get ownerIdNumber(): number {
    return this._ownerIdNumber;
  }
  public set ownerIdNumber(value: number) {
    this._ownerIdNumber = value;
  }

  //Owner First Name
  public get ownerFirstName(): string {
    return this._ownerFirstName;
  }
  public set ownerFirstName(value: string) {
    this._ownerFirstName = value;
  }

  //Owner Last Name
  public get ownerLastName(): string {
    return this._ownerLastName;
  }
  public set ownerLastName(value: string) {
    this._ownerLastName = value;
  }

  //Owner Contact Number Country CodeS
  public get ownerContactNumberCountryCode(): number {
    return this._ownerContactNumberCountryCode;
  }
  public set ownerContactNumberCountryCode(value: number) {
    this._ownerContactNumberCountryCode = value;
  }

  //Owner Contact Number
  public get ownerContactNumber(): number {
    return this._ownerContactNumber;
  }
  public set ownerContactNumber(value: number) {
    this._ownerContactNumber = value;
  }

  //Owner Email
  public get ownerEmail(): string {
    return this._ownerEmail;
  }
  public set ownerEmail(value: string) {
    this._ownerEmail = value;
  }

}
