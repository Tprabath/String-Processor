package classes.dto;

import static classes.utils.GenaralUtils.isNull;
import static classes.utils.GenaralUtils.convertToString;

public class KeyValuePair<K,V> {
    private K key;
    private V value;

    public KeyValuePair(){}
    public KeyValuePair(K key,V value){
        this.setKey(key);
        this.setValue(value);
    }

    public void setKey(K key){
        this.key = key;
    }
    public void setValue(V value){
        this.value = value;
    }
    public K getKey(){
        return  this.key;
    }
    public V getValue(){
        return this.value;
    }
    public String toString(){
        try{
            return convertToString(this.key) + "=" + convertToString(this.value);
        }catch(ClassCastException e){
            return "null";
        }
    }

    public static boolean isNullPair(KeyValuePair<?,?> pair){
        return isNullPair(pair,false);
    }

    public static boolean isNullPair(KeyValuePair<?,?> pair, boolean valueCanNull){
        return isNull(pair.getKey()) || (valueCanNull ? false : isNull(pair.getValue()));
    }
}
