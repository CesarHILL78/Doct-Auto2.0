export class Modele{

    /**
     * Getter $isActive
     * @return {boolean }
     */
	public get $isActive(): boolean  {
		return this.isActive;
	}

    /**
     * Setter $isActive
     * @param {boolean } value
     */
	public set $isActive(value: boolean ) {
		this.isActive = value;
	}
   private isActive:boolean = false;

   
  
  
    constructor(private id : number=null,
        private nom :string="", ){}
    


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $nom
     * @return {string}
     */
	public get $nom(): string {
		return this.nom;
	}

   

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $nom
     * @param {string} value
     */
	public set $nom(value: string) {
		this.nom = value;
	}

   


}