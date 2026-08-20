import { PLACEHOLDERS } from "../enums/Placeholders";
import { PLACEHOLDERS_VALUE } from "../enums/PlaceholderValues";
import { TemplateDataMap } from "./TemplateDataMap";

/** Replaces configured placeholders in a template with dynamic values. */
export class TemplateProcessor<K_Type, V_Type> {
    private template: string;
    private placeholderWrapperFormat: PLACEHOLDERS;
    private placeholder_valueFormat: PLACEHOLDERS_VALUE;
    private templateData: TemplateDataMap<K_Type, V_Type>;
    private finalResult: String = '';

    /**
     * Creates a processor for a template.
     *
     * @param template Template text containing placeholders.
     * @param wrapperFomrat_value Token used to identify placeholder keys.
     * @param wrapperFormat Wrapper pattern used to locate placeholders.
     */
    constructor(
        template: string,
        wrapperFomrat_value: PLACEHOLDERS_VALUE = PLACEHOLDERS_VALUE.DEFAULT,
        wrapperFormat: PLACEHOLDERS = PLACEHOLDERS.DEFAULT) {

        this.template = template;
        this.placeholderWrapperFormat = wrapperFormat;
        this.placeholder_valueFormat = wrapperFomrat_value;
        this.templateData = new TemplateDataMap<K_Type, V_Type>();
    }

    /**
     * Replaces the processor's current data map.
     *
     * @param templateMap Map containing placeholder keys and replacement values.
     * @returns This processor for method chaining.
     */
    public setTemplateData(
        templateMap: TemplateDataMap<K_Type, V_Type>): this {
        this.templateData = templateMap;

        return this;
    }

    /** Changes the wrapper pattern used during the next template formatting operation. */
    public switchPlaceholderWrapper(newWrapper: PLACEHOLDERS): void {
        this.placeholderWrapperFormat = newWrapper;
    }

    /** Builds the formatted result by replacing each matching placeholder. */
    private injectDataToTemplate(): void {
        const dataMapSize = this.templateData.getSize();
        if (!dataMapSize) throw new Error("Template Data map must have one or more values");

        this.templateData.formatToRegex(
            this.placeholderWrapperFormat,
            this.placeholder_valueFormat
        );

        const dataMap = this.templateData.get();
        this.finalResult = '';

        let temp = this.template;

        for (let i = 0;
            i < dataMapSize; i++) {

            temp = temp.replace(
                dataMap.formatedPlaceholders[i],
                new String(dataMap.values[i]).toString()
            )
        }

        this.finalResult = temp;
    }

    /**
     * Formats the template using the current placeholder data.
     *
     * @throws Error when no placeholder/value pairs have been configured.
     * @returns The template after placeholder replacement.
     */
    public getFormatedTemplate(): String {
        this.injectDataToTemplate();
        return this.finalResult;
    }

    /**
     * Adds one placeholder/value pair to the processor's data map.
     *
     * @param placeholder Placeholder key to match.
     * @param value Replacement value.
     * @returns This processor for method chaining.
     */
    public putData(
        placeholder: K_Type,
        value: V_Type): this {
        this.templateData.put(placeholder, value);
        return this;
    }

    /** Clears all placeholder/value pairs from the processor. */
    public reInitData(): this {
        this.templateData.reInit();
        return this;
    }

}