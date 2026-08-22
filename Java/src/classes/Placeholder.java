package classes;

import enums.Placeholder_wrapper;

public class Placeholder {

    private static final char LITERAL = '\\';

    private final Placeholder_wrapper wrapper;
    private final String value;

    private String placeholder;

    Placeholder(Placeholder_wrapper wrapper, String value){
       this.wrapper = wrapper;
       this.value = value;

       this.buildPlaceholder();
    }

    private void buildPlaceholder(){
        this.placeholder = wrapPlaceholder(this.wrapper,this.value);
    }
    public String toString(){
        return this.placeholder;
    }

    static private String wrapPlaceholder(Placeholder_wrapper wrapper, String value){
        char[][] wrapper_value = wrapper.getValue();
        return wrapLiteralMatch(wrapper_value[0]) + value + wrapLiteralMatch(wrapper_value[1]);
    }

    static private String wrapLiteralMatch(char[] value){
        int val_index = 0,
                len = value.length == 1 ? value.length + 1 : value.length * 2;
        char[] c = new char[len];

        //char[] c = {LITERAL,value[0],LITERAL, value[1],...};
        for(int i = 0;
            i < len; i++){

            if((i % 2) != 0){
                c[i] = LITERAL;
                continue;
            }

            c[i] = value[val_index++];
        }

        return new String(c);
    }

}
