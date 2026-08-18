"use strict";
/**
*
*
 * @author Tharusha prabhath
 * @date 2026-08-17
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateProcessor = void 0;
const Placeholders_1 = require("../enums/Placeholders");
const PlaceholderValues_1 = require("../enums/PlaceholderValues");
const TemplateDataMap_1 = require("./TemplateDataMap");
class TemplateProcessor {
    constructor(template, wrapperFomrat_value = PlaceholderValues_1.PLACEHOLDERS_VALUE.DEFAULT, wrapperFormat = Placeholders_1.PLACEHOLDERS.DEFAULT) {
        this.finalResult = '';
        this.template = template;
        this.placeholderWrapperFormat = wrapperFormat;
        this.placeholder_valueFormat = wrapperFomrat_value;
        this.templateData = new TemplateDataMap_1.TemplateDataMap();
    }
    setTemplateData(templateMap) {
        this.templateData = templateMap;
        return this;
    }
    injectDataToTemplate() {
        const dataMapSize = this.templateData.getSize();
        if (!dataMapSize)
            throw new Error("Template Data map have one or more values");
        this.templateData.formatToRegex(this.placeholderWrapperFormat, this.placeholder_valueFormat);
        const dataMap = this.templateData.get();
        this.finalResult = '';
        let temp = this.template;
        for (let i = 0; i < dataMapSize; i++) {
            temp = temp.replace(dataMap.formatedPlaceholders[i], new String(dataMap.values[i]).toString());
        }
        this.finalResult = temp;
    }
    getFormatedTemplate() {
        this.injectDataToTemplate();
        return this.finalResult;
    }
    putData(placeholder, value) {
        this.templateData.put(placeholder, value);
        return this;
    }
    reInitData() {
        this.templateData.reInit();
        return this;
    }
}
exports.TemplateProcessor = TemplateProcessor;
