/**
 * Testsuite für PrimeFactoredInteger.
 *
 * @author see git history
 * @version 1.0, 2021-12-01
 * @since 1.0, 2021-12-01
 */

class PrimeFactoredIntegerTestSuite {
    
    /**
     * Testfallmappe. Keys: Testfall-IDs; Values: Testfälle.
     */
    static TEST_CASES_MAP = this.#createTestCasesMap();
    
    /**
     * Fügt einer Testfallmappe einen Testfall hinzu.
     *
     * @param pvMap Map Testfallmappe
     * @param pvId Test-ID
     * @param pvInput Ungeparste Eingabe
     * @param pvOutputExpectedSerialized Serialisierte Ausgabe
     * @param pvThrowableExpected Ausnahme/Fehler
     */
    static #addToMap(pvMap, pvId, pvInput, pvOutputExpectedSerialized, pvThrowableExpected = null) {
        const lcOutputExpected = PrimeFactoredInteger.forSerialized(pvOutputExpectedSerialized);
        TestCase.addToMap(pvMap, pvId, pvInput, lcOutputExpected, pvThrowableExpected);
    }
    
    /**
     * Erzeugt eine Testfallmappe.
     */
    static #createTestCasesMap() {
        const lcResult = new Map();
        this.#addToMap(lcResult, "Good: 0", "0", "0[[0,1]]");
        this.#addToMap(lcResult, "Good: 1", "1", "[[1,1]]");
        this.#addToMap(lcResult, "Good: -1", "-1", "-[[1,1]]");
        this.#addToMap(lcResult, "Bad #1: -", "-", null, 
            "Parse error #1: The string \"-\" is no valid number");
        this.#addToMap(lcResult, "Bad #2: 00", "00", null, 
            "Parse error #2: If the first digit is \"0\", this must be the one and only char.");
        this.#addToMap(lcResult, "Bad #2: 11", "11", null, 
            "Parse error #2: If the first digit is \"1\", this must be the one and only char.");
        this.#addToMap(lcResult, "Bad #3: -0", "-0", null,
            "Parse error #3: The digit \"0\" may only used as solely digit, not together with others");
        this.#addToMap(lcResult, "Bad #3: 20", "20", null,
            "Parse error #3: The digit \"0\" may only used as solely digit, not together with others");
        this.#addToMap(lcResult, "Bad #3: 21", "21", null,
            "Parse error #3: The digit \"1\" may only used as solely digit, not together with others");
        this.#addToMap(lcResult, "Bad #4: (", "(", null,
            "Parse error #4: Missing \")\" after \"(\"");
        this.#addToMap(lcResult, "Bad #5: ()", "()", null, 
            "Parse error #5: After \"(\" must follow \"#\", \"$\" or \"0\"");
        this.#addToMap(lcResult, "Bad #6: ?", "?", null,
            "Parse error #6: Unknown char \"?\" at offset 0");
        this.#addToMap(lcResult, "Bad #7: 22", "22", null,
            "Parse error #7: Base digit \"2\" used 2 or more times");
        this.#addToMap(lcResult, "Bad #8: 2^(", "2^(", null,
            "Parse error #8: Missing \")\" after \"^(\"");
        this.#addToMap(lcResult, "Bad #9: 2^(0)", "2^(0)", null,
            "Parse error #9: Exponent must be positive, neither negative nor 0");
        this.#addToMap(lcResult, "Bad #10: 2^2", "2^2", null,
            "Parse error #10: Missing \"(\" after \"^\"");
        this.#addToMap(lcResult, "Bad #11: 2^", "2^", null,
            "Parse error #11: Missing \"(\" after \"^\"");
        this.#addToMap(lcResult, "Bad #12: empty", "", null,
            "Parse error #12: Input string is empty");
        this.#addToMap(lcResult, "Bad #13: null", null, null,
            "Parse error #13: Input is null");
        
        return lcResult;
    }
    
}