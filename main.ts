//% weight=999 color=#00aced icon="\uf11b"
namespace joystick{
	/**
	 * P0 = joystick analogique axe X --
	 * P14 =  --
	 * P1 = joystick analogique axe Y --
	 * P15 =  --
	 * P2 =  --
	 * P16 =  --
	 * P12 = gachette gauche -- 
	 * P13 = gachette droite --
	 * P8 =  --
	 */
    //% blockId=portail_descriptif
    //% block="Descriptif branchement joystick"
	//% weight=99 blockGap=24
    //% group="Descriptif du branchement du portail en commentaire du bloc ci-dessous"
    export function portail_descriptif(): void {
    }

    	/**
     * Etat du fin de course gachette gauche sur P12
     */
    //% blockId=GachetteG
    //% block="Gachette Gauche appuyée (vrai ou faux)"
	//% weight=78 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function GachetteG(): boolean {
		if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            return true;
        } else return false;
    }

    	/**
     * Etat du fin de course gachette droite sur P13
     */
    //% blockId=GachetteD
    //% block="Gachette Droite appuyée  (vrai ou faux)"
	//% weight=78 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function GachetteD(): boolean {
		if (pins.digitalReadPin(DigitalPin.P13) == 1) {
            return true;
        } else return false;
    }

/**
     * Retour de la valeur du joystick axe x
     */
    //% blockId=axex
    //% block="valeur numérique de l'axe X du joystick (entre 0 et 1024)"
	//% weight=78 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function axex(): number {
		            return pins.analogReadPin(AnalogPin.P0);
        } 

/**
     * Retour de la valeur du joystick axe y
     */
    //% blockId=axey
    //% block="valeur numérique de l'axe Y du joystick (entre 0 et 1024)"
	//% weight=78 blockGap=2
    //% group="Chaîne d'information - acquérir"
    export function axey(): number {
		            return pins.analogReadPin(AnalogPin.P1);
        } 

}