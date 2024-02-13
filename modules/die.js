export class BCdice extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "h";
     /** @override */
    getResultLabel(result) {
        return {
			      "1": '<img src="modules/broken-compass-csb-es/assets/Cara1_inCHAT2.webp" />',
            "2": '<img src="modules/broken-compass-csb-es/assets/Cara2_inCHAT2.webp" />',
            "3": '<img src="modules/broken-compass-csb-es/assets/Cara3_inCHAT2.webp" />',
            "4": '<img src="modules/broken-compass-csb-es/assets/Cara4_inCHAT2.webp" />',
			      "5": '<img src="modules/broken-compass-csb-es/assets/Cara5_inCHAT2.webp" />',			
            "6": '<img src="modules/broken-compass-csb-es/assets/Cara6_inCHAT2.webp" />'
        }[result.result];
    }
}