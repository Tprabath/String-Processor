package classes;

import enums.Placeholder_wrapper;

public class TemplateProcessor
        <K_type extends String,V_type> {

    private String template;
    private Placeholder_wrapper wrapper;
    private TemplateDataMap<K_type,V_type> dataMap;
    private String finalResult = null;

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

    private void injectDataToTemplate(){
        //build placeholders from datamap placeholder wrapper + keys

    }


    public String getFormatedTemplate(){
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
