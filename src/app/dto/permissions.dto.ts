export class Permissions { 
    private _hasViewAccess: boolean;
   
    private _hasAddAccess: boolean;
   
    private _hasEditAccess: boolean;
    
    private _hasDeleteAccess: boolean;
   

    constructor(viewAccess: boolean, addAccess: boolean, editAccess: boolean, deleteAccess: boolean){
        this._hasViewAccess = viewAccess;
        this._hasAddAccess = addAccess;
        this._hasEditAccess = editAccess;
        this._hasDeleteAccess = deleteAccess;
    }

    public get hasViewAccess(): boolean {
        return this._hasViewAccess;
    }
    public set hasViewAccess(value: boolean) {
        this._hasViewAccess = value;
    }

    public get hasAddAccess(): boolean {
        return this._hasAddAccess;
    }
    public set hasAddAccess(value: boolean) {
        this._hasAddAccess = value;
    }

    public get hasEditAccess(): boolean {
        return this._hasEditAccess;
    }
    public set hasEditAccess(value: boolean) {
        this._hasEditAccess = value;
    }

    public get hasDeleteAccess(): boolean {
        return this._hasDeleteAccess;
    }
    public set hasDeleteAccess(value: boolean) {
        this._hasDeleteAccess = value;
    }
}