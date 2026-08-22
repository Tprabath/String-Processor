package classes;

import enums.Placeholder_wrapper;

import java.util.Arrays;

public class Placeholder {

    static final char literalChar = '\\';

    final Placeholder_wrapper wrapper;
    final String value;

    String placeholder;

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
        char[] c = {literalChar,value[0],literalChar, value[1]};
        return new String(c);
    }

}
