"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateDataMap = void 0;
/** Stores placeholder keys, their values, and the formatted regular expressions used for replacement. */
class TemplateDataMap {
    /** Creates an empty template data map. */
    constructor() {
        this.placeholders = [];
        this.formatedRegexPlaceholders = [];
        this.data = [];
    }
    /** Removes all placeholders, formatted patterns, and values from the map. */
    reInit() {
        this.placeholders = [];
        this.formatedRegexPlaceholders = [];
        this.data = [];
        return this.placeholders.length === 0
            && this.formatedRegexPlaceholders.length === 0
            && this.data.length === 0;
    }
    /**
     * Adds a placeholder and its replacement value.
     *
     * Empty values and entries whose key and value are already present are ignored.
     *
     * @param placeholder Placeholder key to match in a template.
     * @param data Value to use for the replacement.
     * @returns This map for method chaining.
     */
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
    /** Returns the formatted placeholder expressions and their replacement values. */
    get() {
        return {
            formatedPlaceholders: this.formatedRegexPlaceholders,
            values: this.data
        };
    }
    /**
     * Converts stored placeholder keys into regular expressions for the selected wrapper.
     *
     * @param placeholderFormat Wrapper pattern containing the placeholder value token.
     * @param placeholderFormat_Value Token replaced with each stored placeholder key.
     */
    formatToRegex(placeholderFormat, placeholderFormat_Value) {
        const regexPlaceholders = [];
        this.placeholders.forEach(e => regexPlaceholders.push(new RegExp(new String(placeholderFormat)
            .toString()
            .replace(new String(placeholderFormat_Value).toString(), new String(e).toString()), "g")));
        this.formatedRegexPlaceholders = regexPlaceholders;
    }
    /** Returns the number of placeholder/value pairs currently stored. */
    getSize() {
        return (this.data.length + this.placeholders.length) / 2;
    }
}
exports.TemplateDataMap = TemplateDataMap;
