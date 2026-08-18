/**
*
*
 * @author Tharusha prabhath
 * @date 2026-08-17
 */

import { PLACEHOLDERS } from "../enums/Placeholders";
import { PLACEHOLDERS_VALUE } from "../enums/PlaceholderValues";
import { TemplateDataMap } from "./TemplateDataMap";

export class TemplateProcessor<K_Type, V_Type> {
    private template: string;
    private placeholderWrapperFormat: PLACEHOLDERS;
    private placeholder_valueFormat: PLACEHOLDERS_VALUE;
    private templateData: TemplateDataMap<K_Type, V_Type>;
    private finalResult: String = '';

    constructor(
        template: string,
        wrapperFomrat_value: PLACEHOLDERS_VALUE = PLACEHOLDERS_VALUE.DEFAULT,
        wrapperFormat: PLACEHOLDERS = PLACEHOLDERS.DEFAULT) {

        this.template = template;
        this.placeholderWrapperFormat = wrapperFormat;
        this.placeholder_valueFormat = wrapperFomrat_value;
        this.templateData = new TemplateDataMap<K_Type, V_Type>();
    }

    public setTemplateData(
        templateMap: TemplateDataMap<K_Type, V_Type>): this {
        this.templateData = templateMap;

        return this;
    }

    private injectDataToTemplate() {
        const dataMapSize = this.templateData.getSize();
        if (!dataMapSize) throw new Error("Template Data map have one or more values");

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

    public getFormatedTemplate(): String {
        this.injectDataToTemplate();
        return this.finalResult;
    }

    public putData(
        placeholder: K_Type,
        value: V_Type): this {
        this.templateData.put(placeholder, value);
        return this;
    }

    public reInitData() : this{
        this.templateData.reInit();
        return this;
    }

}