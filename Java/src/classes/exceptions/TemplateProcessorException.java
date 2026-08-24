package classes.exceptions;

public class TemplateProcessorException extends RuntimeException {
    public TemplateProcessorException(String message){
        super("Template processor Exception : " + message);
    }

    public static class NullFieldException extends TemplateProcessorException{

        public NullFieldException(){
            this(null);
        }

        public NullFieldException(String message){
            super("Null Field Exception" + message != null ? " = " + message : "");
        }
    }
}