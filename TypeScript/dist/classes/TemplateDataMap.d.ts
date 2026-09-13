import { PLACEHOLDERS } from "../enums/Placeholders";
import { PLACEHOLDERS_VALUE } from "../enums/PlaceholderValues";
/** Stores placeholder keys, their values, and the formatted regular expressions used for replacement. */
export declare class TemplateDataMap<K_Type, V_Type> {
    private placeholders;
    private formatedRegexPlaceholders;
    private data;
    /** Creates an empty template data map. */
    constructor();
    /** Removes all placeholders, formatted patterns, and values from the map. */
    reInit(): boolean;
    /**
     * Adds a placeholder and its replacement value.
     *
     * Empty values and entries whose key and value are already present are ignored.
     *
     * @param placeholder Placeholder key to match in a template.
     * @param data Value to use for the replacement.
     * @returns This map for method chaining.
     */
    put(placeholder: K_Type, data: V_Type): this;
    /** Returns the formatted placeholder expressions and their replacement values. */
    get(): {
        formatedPlaceholders: RegExp[];
        values: V_Type[];
    };
    /**
     * Converts stored placeholder keys into regular expressions for the selected wrapper.
     *
     * @param placeholderFormat Wrapper pattern containing the placeholder value token.
     * @param placeholderFormat_Value Token replaced with each stored placeholder key.
     */
    formatToRegex(placeholderFormat: PLACEHOLDERS, placeholderFormat_Value: PLACEHOLDERS_VALUE): void;
    /** Returns the number of placeholder/value pairs currently stored. */
    getSize(): number;
}
//# sourceMappingURL=TemplateDataMap.d.ts.map