package enums;

import java.util.Arrays;

public enum Placeholder_wrapper {

    DEFAULT(Placeholders_signs.CURLY_BRACKETS_START,
            Placeholders_signs.CURLY_BRACKETS_END),

    PERCENT_SIGN(Placeholders_signs.PERCENT),
    HASH_SIGN(Placeholders_signs.HASH),
    AMPERSAND_SIGN(Placeholders_signs.AMPERSAND),
    AT_SIGN(Placeholders_signs.AT),
    QUESTION_MARK(Placeholders_signs.QUESTION_MARK),
    EXCLAMATION_MARK(Placeholders_signs.EXCLAMATION_MARK),
    SEMICOLON(Placeholders_signs.SEMICOLON),
    COLON(Placeholders_signs.COLON),
    ASTERISK(Placeholders_signs.ASTERISK);
    

    static final private int DEFAULT_LENGTH = 2;

    final char[][] value;
    Placeholder_wrapper(Placeholders_signs sign){this(sign,sign);}
    Placeholder_wrapper(Placeholders_signs start, Placeholders_signs end){
        this(start,end,DEFAULT_LENGTH);
    }
    Placeholder_wrapper(Placeholders_signs start, Placeholders_signs end, int count){
        this.value = new char[][]{
                cloneCharToArray(start.getSign(),count),
                cloneCharToArray(end.getSign(),count)};
    }

    static private char[] cloneCharToArray(char value, int count){
            char[] c = new char[count];
            Arrays.fill(c,value);
        return c;
    }

    public char[][] getValue(){
        return this.value;
    }
}
