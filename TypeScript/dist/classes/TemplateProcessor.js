"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateProcessor = void 0;
const Placeholders_1 = require("../enums/Placeholders");
const PlaceholderValues_1 = require("../enums/PlaceholderValues");
const TemplateDataMap_1 = require("./TemplateDataMap");
/** Replaces configured placeholders in a template with dynamic values. */
class TemplateProcessor {
    /**
     * Creates a processor for a template.
     *
     * @param template Template text containing placeholders.
     * @param wrapperFomrat_value Token used to identify placeholder keys.
     * @param wrapperFormat Wrapper pattern used to locate placeholders.
     */
    constructor(template, wrapperFomrat_value = PlaceholderValues_1.PLACEHOLDERS_VALUE.DEFAULT, wrapperFormat = Placeholders_1.PLACEHOLDERS.DEFAULT) {
        this.finalResult = '';
        this.template = template;
        this.placeholderWrapperFormat = wrapperFormat;
        this.placeholder_valueFormat = wrapperFomrat_value;
        this.templateData = new TemplateDataMap_1.TemplateDataMap();
    }
    /**
     * Replaces the processor's current data map.
     *
     * @param templateMap Map containing placeholder keys and replacement values.
     * @returns This processor for method chaining.
     */
    setTemplateData(templateMap) {
        this.templateData = templateMap;
        return this;
    }
    /** Changes the wrapper pattern used during the next template formatting operation. */
    switchPlaceholderWrapper(newWrapper) {
        this.placeholderWrapperFormat = newWrapper;
    }
    /** Builds the formatted result by replacing each matching placeholder. */
    injectDataToTemplate() {
        const dataMapSize = this.templateData.getSize();
        if (!dataMapSize)
            throw new Error("Template Data map must have one or more values");
        this.templateData.formatToRegex(this.placeholderWrapperFormat, this.placeholder_valueFormat);
        const dataMap = this.templateData.get();
        this.finalResult = '';
        let temp = this.template;
        for (let i = 0; i < dataMapSize; i++) {
            temp = temp.replace(dataMap.formatedPlaceholders[i], new String(dataMap.values[i]).toString());
        }
        this.finalResult = temp;
    }
    /**
     * Formats the template using the current placeholder data.
     *
     * @throws Error when no placeholder/value pairs have been configured.
     * @returns The template after placeholder replacement.
     */
    getFormatedTemplate() {
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
    putData(placeholder, value) {
        this.templateData.put(placeholder, value);
        return this;
    }
    /** Clears all placeholder/value pairs from the processor. */
    reInitData() {
        this.templateData.reInit();
        return this;
    }
}
exports.TemplateProcessor = TemplateProcessor;
