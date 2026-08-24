package classes.exceptions;

public class DataMapException extends RuntimeException{
    public DataMapException(String message){
        super("DataMap Exception : " + message);
    }

    public static class IndexOutOfBoundException extends DataMapException{
        public IndexOutOfBoundException() {
            super("Index out of bound");
        }
    }

}
