//% weight=999 color=#00aced icon="\uf11b"
namespace joystick{
	/**
	 * P0 = joystick analogique axe X --
	 * P14 =  --
	 * P1 = joystick analogique axe Y --
	 * P15 =  --
	 * P2 =  gachette gauche --
	 * P16 = gachette droite --
	 * P12 =  -- 
	 * P13 =  --
	 * P8 =  --
	 */
    //% blockId=portail_descriptif
    //% block="Descriptif branchement joystick"
	//% weight=99 blockGap=24
    //% group="Descriptif du branchement du portail en commentaire du bloc ci-dessous"
    export function portail_descriptif(): void {
    }

    	/**
     * Etat du fin de course gachette gauche sur P2
     */
    //% blockId=GachetteG
    //% block="Gachette Gauche appuyée (vrai ou faux)"
	//% weight=78 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function GachetteG(): boolean {
		if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            return true;
        } else return false;
    }

    	/**
     * Etat du fin de course gachette droite sur P16
     */
    //% blockId=GachetteD
    //% block="Gachette Droite appuyée  (vrai ou faux)"
	//% weight=78 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function GachetteD(): boolean {
		if (pins.digitalReadPin(DigitalPin.P16) == 1) {
            return true;
        } else return false;
    }

/**
     * Retour de la valeur du joystick axe x
     */
    //% blockId=axex
    //% block="valeur numérisée de l'axe X du joystick (entre 0 et 1024)"
	//% weight=77 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function axex(): number {
		            return pins.analogReadPin(AnalogPin.P0);
        } 

/**
     * Retour de la valeur du joystick axe y
     */
    //% blockId=axey
    //% block="valeur numérisée de l'axe Y du joystick (entre 0 et 1024)"
	//% weight=77 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function axey(): number {
		            return pins.analogReadPin(AnalogPin.P1);
        } 

}
