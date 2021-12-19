export class User { 
    private _email: string;
    
    private _role: string;

    constructor(email: string, role: string){
        this._email = email;
        this._role = role;
    }
 
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }
    
   
}