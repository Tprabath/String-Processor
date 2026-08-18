/**
*
*
 * @author Tharusha prabhath
 * @date 2026-08-17
 */
import { PLACEHOLDERS } from "../enums/Placeholders";
import { PLACEHOLDERS_VALUE } from "../enums/PlaceholderValues";
export declare class TemplateDataMap<K_Type, V_Type> {
    private placeholders;
    private formatedRegexPlaceholders;
    private data;
    constructor();
    reInit(): void;
    put(placeholder: K_Type, data: V_Type): this;
    get(): {
        formatedPlaceholders: RegExp[];
        values: V_Type[];
    };
    formatToRegex(placeholderFormat: PLACEHOLDERS, placeholderFormat_Value: PLACEHOLDERS_VALUE): void;
    getSize(): number;
}
//# sourceMappingURL=TemplateDataMap.d.ts.map