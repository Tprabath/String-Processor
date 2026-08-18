"use strict";
/**
*
*
 * @author Tharusha prabhath
 * @date 2026-08-17
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateDataMap = void 0;
class TemplateDataMap {
    constructor() {
        this.placeholders = [];
        this.formatedRegexPlaceholders = [];
        this.data = [];
    }
    reInit() {
        this.placeholders = [];
        this.formatedRegexPlaceholders = [];
        this.data = [];
        return this.placeholders.length === 0
            && this.formatedRegexPlaceholders.length === 0
            && this.data.length === 0;
    }
    put(placeholder, data) {
        if (!placeholder || !data)
            return this;
        if (this.placeholders.some(e => e === placeholder)
            && this.data.some(e => e === data))
            return this;
        this.placeholders.push(placeholder);
        this.data.push(data);
        return this;
    }
    get() {
        return {
            formatedPlaceholders: this.formatedRegexPlaceholders,
            values: this.data
        };
    }
    formatToRegex(placeholderFormat, placeholderFormat_Value) {
        const regexPlaceholders = [];
        this.placeholders.forEach(e => regexPlaceholders.push(new RegExp(new String(placeholderFormat)
            .toString()
            .replace(new String(placeholderFormat_Value).toString(), new String(e).toString()), "g")));
        this.formatedRegexPlaceholders = regexPlaceholders;
    }
    getSize() {
        return (this.data.length + this.placeholders.length) / 2;
    }
}
exports.TemplateDataMap = TemplateDataMap;
