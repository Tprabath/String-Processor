"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLACEHOLDERS = void 0;
const PlaceholderValues_1 = require("./PlaceholderValues");
/** Regular-expression wrapper patterns supported for template placeholders. */
var PLACEHOLDERS;
(function (PLACEHOLDERS) {
    /** Matches the default `{{placeholder}}` syntax. */
    PLACEHOLDERS["DEFAULT"] = "\\{\\{placeholder\\}\\}";
    /** Matches the `%%placeholder%%` syntax. */
    PLACEHOLDERS["PERCENT_SIGN"] = "\\%\\%placeholder\\%\\%";
    /** Matches the `##placeholder##` syntax. */
    PLACEHOLDERS["HASH_SIGN"] = "\\#\\#placeholder\\#\\#";
    /** Matches the `&&placeholder&&` syntax. */
    PLACEHOLDERS["AMPERSAND_SIGN"] = "\\&\\&placeholder\\&\\&";
    /** Matches the `@@placeholder@@` syntax. */
    PLACEHOLDERS["AT_SIGN"] = "\\@\\@placeholder\\@\\@";
    /** Matches the `??placeholder??` syntax. */
    PLACEHOLDERS["QUESTION_MARK"] = "\\?\\?placeholder\\?\\?";
    /** Matches the `!!placeholder!!` syntax. */
    PLACEHOLDERS["EXCLAMATION_MARK"] = "\\!\\!placeholder\\!\\!";
    /** Matches the `;;placeholder;;` syntax. */
    PLACEHOLDERS["SEMICOLON"] = "\\;\\;placeholder\\;\\;";
    /** Matches the `::placeholder::` syntax. */
    PLACEHOLDERS["COLON"] = "\\:\\:placeholder\\:\\:";
    /** Matches the `**placeholder**` syntax. */
    PLACEHOLDERS["ASTERISK"] = "\\*\\*placeholder\\*\\*";
})(PLACEHOLDERS || (exports.PLACEHOLDERS = PLACEHOLDERS = {}));
