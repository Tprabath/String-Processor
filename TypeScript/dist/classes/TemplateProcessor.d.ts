/**
*
*
 * @author Tharusha prabhath
 * @date 2026-08-17
 */
import { PLACEHOLDERS } from "../enums/Placeholders";
import { PLACEHOLDERS_VALUE } from "../enums/PlaceholderValues";
import { TemplateDataMap } from "./TemplateDataMap";
export declare class TemplateProcessor<K_Type, V_Type> {
    private template;
    private placeholderWrapperFormat;
    private placeholder_valueFormat;
    private templateData;
    private finalResult;
    constructor(template: string, wrapperFomrat_value?: PLACEHOLDERS_VALUE, wrapperFormat?: PLACEHOLDERS);
    setTemplateData(templateMap: TemplateDataMap<K_Type, V_Type>): this;
    private injectDataToTemplate;
    getFormatedTemplate(): String;
    putData(placeholder: K_Type, value: V_Type): this;
    reInitData(): this;
}
//# sourceMappingURL=TemplateProcessor.d.ts.map