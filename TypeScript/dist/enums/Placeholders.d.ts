/** Regular-expression wrapper patterns supported for template placeholders. */
export declare enum PLACEHOLDERS {
    /** Matches the default `{{placeholder}}` syntax. */
    DEFAULT = "\\{\\{placeholder\\}\\}",
    /** Matches the `%%placeholder%%` syntax. */
    PERCENT_SIGN = "\\%\\%placeholder\\%\\%",
    /** Matches the `##placeholder##` syntax. */
    HASH_SIGN = "\\#\\#placeholder\\#\\#",
    /** Matches the `&&placeholder&&` syntax. */
    AMPERSAND_SIGN = "\\&\\&placeholder\\&\\&",
    /** Matches the `@@placeholder@@` syntax. */
    AT_SIGN = "\\@\\@placeholder\\@\\@",
    /** Matches the `??placeholder??` syntax. */
    QUESTION_MARK = "\\?\\?placeholder\\?\\?",
    /** Matches the `!!placeholder!!` syntax. */
    EXCLAMATION_MARK = "\\!\\!placeholder\\!\\!",
    /** Matches the `;;placeholder;;` syntax. */
    SEMICOLON = "\\;\\;placeholder\\;\\;",
    /** Matches the `::placeholder::` syntax. */
    COLON = "\\:\\:placeholder\\:\\:",
    /** Matches the `**placeholder**` syntax. */
    ASTERISK = "\\*\\*placeholder\\*\\*"
}
//# sourceMappingURL=Placeholders.d.ts.map