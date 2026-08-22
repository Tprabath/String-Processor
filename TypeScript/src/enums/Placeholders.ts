import { PLACEHOLDERS_VALUE } from "./PlaceholderValues";

/** Regular-expression wrapper patterns supported for template placeholders. */
export enum PLACEHOLDERS {
    /** Matches the default `{{placeholder}}` syntax. */
    DEFAULT = `\\{\\{${PLACEHOLDERS_VALUE.DEFAULT}\\}\\}`,

    /** Matches the `%%placeholder%%` syntax. */
    PERCENT_SIGN = `\\%\\%${PLACEHOLDERS_VALUE.DEFAULT}\\%\\%`,
    /** Matches the `##placeholder##` syntax. */
    HASH_SIGN = `\\#\\#${PLACEHOLDERS_VALUE.DEFAULT}\\#\\#`,
    /** Matches the `&&placeholder&&` syntax. */
    AMPERSAND_SIGN = `\\&\\&${PLACEHOLDERS_VALUE.DEFAULT}\\&\\&`,
    /** Matches the `@@placeholder@@` syntax. */
    AT_SIGN = `\\@\\@${PLACEHOLDERS_VALUE.DEFAULT}\\@\\@`,
    /** Matches the `??placeholder??` syntax. */
    QUESTION_MARK = `\\?\\?${PLACEHOLDERS_VALUE.DEFAULT}\\?\\?`,
    /** Matches the `!!placeholder!!` syntax. */
    EXCLAMATION_MARK = `\\!\\!${PLACEHOLDERS_VALUE.DEFAULT}\\!\\!`,
    /** Matches the `;;placeholder;;` syntax. */
    SEMICOLON = `\\;\\;${PLACEHOLDERS_VALUE.DEFAULT}\\;\\;`,
    /** Matches the `::placeholder::` syntax. */
    COLON = `\\:\\:${PLACEHOLDERS_VALUE.DEFAULT}\\:\\:`,
    /** Matches the `**placeholder**` syntax. */
    ASTERISK = `\\*\\*${PLACEHOLDERS_VALUE.DEFAULT}\\*\\*`
}
