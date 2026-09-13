import { PLACEHOLDERS } from "../enums/Placeholders";
import { PLACEHOLDERS_VALUE } from "../enums/PlaceholderValues";
import { TemplateDataMap } from "./TemplateDataMap";
/** Replaces configured placeholders in a template with dynamic values. */
export declare class TemplateProcessor<K_Type, V_Type> {
    private template;
    private placeholderWrapperFormat;
    private placeholder_valueFormat;
    private templateData;
    private finalResult;
    /**
     * Creates a processor for a template.
     *
     * @param template Template text containing placeholders.
     * @param wrapperFomrat_value Token used to identify placeholder keys.
     * @param wrapperFormat Wrapper pattern used to locate placeholders.
     */
    constructor(template: string, wrapperFomrat_value?: PLACEHOLDERS_VALUE, wrapperFormat?: PLACEHOLDERS);
    /**
     * Replaces the processor's current data map.
     *
     * @param templateMap Map containing placeholder keys and replacement values.
     * @returns This processor for method chaining.
     */
    setTemplateData(templateMap: TemplateDataMap<K_Type, V_Type>): this;
    /** Changes the wrapper pattern used during the next template formatting operation. */
    switchPlaceholderWrapper(newWrapper: PLACEHOLDERS): void;
    /** Builds the formatted result by replacing each matching placeholder. */
    private injectDataToTemplate;
    /**
     * Formats the template using the current placeholder data.
     *
     * @throws Error when no placeholder/value pairs have been configured.
     * @returns The template after placeholder replacement.
     */
    getFormatedTemplate(): String;
    /**
     * Adds one placeholder/value pair to the processor's data map.
     *
     * @param placeholder Placeholder key to match.
     * @param value Replacement value.
     * @returns This processor for method chaining.
     */
    putData(placeholder: K_Type, value: V_Type): this;
    /** Clears all placeholder/value pairs from the processor. */
    reInitData(): this;
}
//# sourceMappingURL=TemplateProcessor.d.ts.map