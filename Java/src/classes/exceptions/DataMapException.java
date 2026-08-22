package classes.exceptions;

public class DataMapException extends Exception {
    public DataMapException(String message){
        super("DataMap Exception : " + message);
    }
}
