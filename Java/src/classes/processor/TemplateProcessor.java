package classes.processor;

import static classes.utils.GenaralUtils.isNull;
import static classes.exceptions.TemplateProcessorException.NullFieldException;

import classes.dto.KeyValuePair;
import classes.dto.Placeholder;
import classes.maps.TemplateDataMap;
import enums.Placeholder_wrapper;

public class TemplateProcessor
        <K_type extends String,V_type> extends Processor {

    private String template;
    private Placeholder_wrapper wrapper;
    private TemplateDataMap<K_type,V_type> dataMap;
    private String finalResult;

    public TemplateProcessor(String template){
        this(template,Placeholder_wrapper.DEFAULT);
    }

    public TemplateProcessor(
            String template,
            Placeholder_wrapper wrapper){
        this(template,
                wrapper,
                new TemplateDataMap<>());
    }

    public TemplateProcessor(
            String template,
            Placeholder_wrapper wrapper,
            TemplateDataMap<K_type,V_type> dataMap){

        this.template = template;
        this.wrapper = wrapper;
        this.dataMap = dataMap;
    }

    public void setTemplate(String template){
        this.template = template;
    }

    public TemplateProcessor<K_type,V_type>
        setTemplateDataMap(
            TemplateDataMap<K_type,V_type> templateDataMap){
        this.dataMap = templateDataMap;
        return this;
    }

    public void switchPlaceholderWrapper(
            Placeholder_wrapper newWrapper){
        this.wrapper = newWrapper;
    }

    private void injectDataToTemplate() throws NullFieldException{
        if(this.isFieldsNull()){
            throw new NullFieldException(
                    isNull(this.template) ? "template" :
                            isNull(this.dataMap) ? "data map":
                            isNull(this.wrapper) ? "wrapper" : ""
                    + " is must");
        }

        String temp = this.template;

        //build placeholders from datamap placeholder wrapper + keys
        for(int k  = 0; k < this.dataMap.getSize();){
            KeyValuePair<K_type,V_type> pair = this.dataMap.get(k++);
            temp = temp.replaceAll(new Placeholder(
                    this.wrapper, pair.getKey()).toString(),
                    String.valueOf(pair.getValue()));

        }

        this.finalResult = temp;
    }

    private boolean isFieldsNull(){
        return isNull(this.template)
                || isNull(this.dataMap)
                || isNull(this.wrapper);
    }

    public String getFormatedTemplate() {
        this.injectDataToTemplate();
        return this.finalResult;
    }

    public TemplateProcessor<K_type,V_type>
        putData(K_type placeholder,
                V_type value){
        this.dataMap.put(placeholder,value);
        return this;
    }

    public TemplateProcessor<K_type,V_type>
        reInitData(){
            this.dataMap.reInit();
            return this;
    }
}
