package enums;

public enum Placeholders_signs {
    CURLY_BRACKETS_START('{'),
    CURLY_BRACKETS_END('}'),

    PERCENT('%'),
    HASH('#'),
    AMPERSAND('&'),
    AT('@'),
    QUESTION_MARK('?'),
    EXCLAMATION_MARK('!'),
    SEMICOLON(';'),
    COLON(':'),
    ASTERISK('*');


    final char sign;
    Placeholders_signs(char sign){
        this.sign = sign;
    }
    public char getSign(){
        return this.sign;
    }

    @Override
    public String toString(){
        return String.valueOf(this.sign);
    }
}
