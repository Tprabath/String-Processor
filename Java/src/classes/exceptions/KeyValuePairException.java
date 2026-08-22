package classes.exceptions;

public class KeyValuePairException extends Exception{
    public KeyValuePairException(String message){
        super("KeyValuePair Exception : " + message);
    }
}
