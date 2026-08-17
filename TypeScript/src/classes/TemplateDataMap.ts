import { PLACEHOLDERS } from "../enums/placeholders";
import { PLACEHOLDERS_VALUE } from "../enums/PlaceholderValues";


export class TemplateDataMap<K_Type, V_Type> {
    private placeholders: K_Type[] = [];
    private formatedRegexPlaceholders: RegExp[] = [];
    private data: V_Type[] = [];

    constructor() { }

    public reInit() {
        this.placeholders = [];
        this.formatedRegexPlaceholders = [];
        this.data = [];
    }

    public put(placeholder: K_Type,
        data: V_Type): this {
        this.placeholders.push(placeholder);
        this.data.push(data);

        return this;
    }

    public get(): { 
        formatedPlaceholders: RegExp[], 
        values: V_Type[] } {

        return {
            formatedPlaceholders: this.formatedRegexPlaceholders,
            values: this.data
        }
    }

    public formatToRegex(
        placeholderFormat: PLACEHOLDERS,
        placeholderFormat_Value: PLACEHOLDERS_VALUE) {

        const regexPlaceholders: RegExp[] = []
        this.placeholders.forEach(
            e => regexPlaceholders.push(
                new RegExp(
                    new String(placeholderFormat)
                        .toString()
                        .replace(
                            new String(placeholderFormat_Value).toString(),
                            new String(e).toString()
                        ), "g"
                )
            )

        )

        this.formatedRegexPlaceholders = regexPlaceholders;
    }

    public getSize() {
        return (this.data.length + this.placeholders.length) / 2;
    }
}
