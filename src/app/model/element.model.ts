export class Element{
   
    constructor(
        private nom :string="",private id : number = null){}
    

private defaut : string = "";
    


    /**
     * Getter $defaut
     * @return {string }
     */
	public get $defaut(): string  {
		return this.defaut;
	}

    /**
     * Setter $defaut
     * @param {string } value
     */
	public set $defaut(value: string ) {
		this.defaut = value;
	}
    /**
     * Getter $nom
     * @return {string}
     */
	public get $nom(): string {
		return this.nom;
	}

   

    /**
     * Setter $nom
     * @param {string} value
     */
	public set $nom(value: string) {
		this.nom = value;
	}
/**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

   

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}
   


}