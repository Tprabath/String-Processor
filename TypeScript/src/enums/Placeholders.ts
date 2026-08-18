/**
*
*
 * @author Tharusha prabhath
 * @date 2026-08-17
 */

import { PLACEHOLDERS_VALUE } from "./PlaceholderValues";

export enum PLACEHOLDERS {
    DEFAULT = `\\{\\{${PLACEHOLDERS_VALUE.DEFAULT}\\}\\}`,

    PERCENT_SIGN = `\\%\\%${PLACEHOLDERS_VALUE.DEFAULT}\\%\\%`,
    HASH_SIGN = `\\#\\#${PLACEHOLDERS_VALUE.DEFAULT}\\#\\#`,
    AMPERSAND_SIGN = `\\&\\&${PLACEHOLDERS_VALUE.DEFAULT}\\&\\&`,
    AT_SIGN = `\\@\\@${PLACEHOLDERS_VALUE.DEFAULT}\\@\\@`,
    QUESTION_MARK = `\\?\\?${PLACEHOLDERS_VALUE.DEFAULT}\\?\\?`,
    EXCLAMATION_MARK = `\\!\\!${PLACEHOLDERS_VALUE.DEFAULT}\\!\\!`,
    SEMICOLON = `\\;\\;${PLACEHOLDERS_VALUE.DEFAULT}\\;\\;`,
    COLON = `\\:\\:${PLACEHOLDERS_VALUE.DEFAULT}\\:\\:`,
    ASTERISK = `*\\*\\${PLACEHOLDERS_VALUE.DEFAULT}\\*\\*`
}
