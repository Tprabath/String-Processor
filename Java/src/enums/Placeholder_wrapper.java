package enums;

import java.util.Arrays;

public enum Placeholder_wrapper {

    DEFAULT(Placeholders_signs.CURLY_BRACKETS_START,
            Placeholders_signs.CURLY_BRACKETS_END);



    static final private int DEFAULT_FILL = 2;

    final char[][] value;
    Placeholder_wrapper(Placeholders_signs start, Placeholders_signs end){
        this(start,end,DEFAULT_FILL);
    }

    Placeholder_wrapper(Placeholders_signs start, Placeholders_signs end, int count){
        this.value = new char[][]{
                charToCharArray(start.getSign(),count),
                charToCharArray(end.getSign(),count)};
    }

    static private char[] charToCharArray(char value, int length){
            char[] c = new char[length];
            Arrays.fill(c,value);
        return c;
    }

    public char[][] getValue(){
        return this.value;
    }
}
