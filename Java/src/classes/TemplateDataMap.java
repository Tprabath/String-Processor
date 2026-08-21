package classes;

import interfaces.DataMap;

public class TemplateDataMap<K_type, V_type>
    extends AbsractDataMap<K_type,V_type>{

    public TemplateDataMap(){
        this.reInit();
    }

    /**
     * @return boolean
     */
    @Override
    public boolean reInit() {
       this.keyValuePairs = new KeyValuePair[0];
        return  this.isFresh();
    }

    /**
     * @return boolean
     * */
    boolean isFresh(){
        return this.keyValuePairs != null && this.keyValuePairs.length != 0;
    }

    /**
     * @param key
     * @param value
     * @return DataMap
     */
    @Override
    public DataMap<K_type,V_type> put(K_type key, V_type value) {
        this.grow(
                this.keyValuePairs,
                new KeyValuePair<>(key, value));
        return this;
    }

    /**
     *
     */
    @Override
    public KeyValuePair<K_type,V_type>[] get() {
        return this.keyValuePairs;
    }

    /**
     * @return int
     */
    @Override
    public int getSize() {
        return this.keyValuePairs.length;
    }

    @Override
    void grow(KeyValuePair<K_type, V_type>[] old_values,
              KeyValuePair<K_type,V_type> new_KeyValue_pair){

    }
}
