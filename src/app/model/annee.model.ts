export class Annee{
   
    constructor(
        private nom :string=""){}
    


    

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

   


}