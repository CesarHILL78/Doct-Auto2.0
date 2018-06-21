export class Annee{
   
    constructor(
        private id :number=null,private idVoiture : number = null){}
    
private isActive : boolean =false;

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


    /**
     * Getter $idVoiture
     * @return {number }
     */
	public get $idVoiture(): number  {
		return this.idVoiture;
	}

    /**
     * Setter $idVoiture
     * @param {number } value
     */
	public set $idVoiture(value: number ) {
		this.idVoiture = value;
	}
        
       

    

    /**
     * Getter $nom
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}


    /**
     * Setter $nom
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}


}