package classes.maps;

import static classes.utils.GenaralUtils.isNull;
import static classes.exceptions.DataMapException.IndexOutOfBoundException;

import classes.abstractClasses.AbsractDataMap;
import classes.dto.KeyValuePair;
import classes.strategy.GrowStrategy;
import interfaces.DataMap;

public final class TemplateDataMap<K_type extends String, V_type>
    extends AbsractDataMap<K_type,V_type> {

    private static final GrowStrategy DEFAULT_GROW_STRATEGY = new GrowStrategy();
    private GrowStrategy growStrategy;

    private final boolean valuesCanNull;

    public TemplateDataMap(){
        this(false);
    }

    /**
     * default : this data map all KeyValue pair's values can not null (reject every null value KeyValue Pairs).
     * can override that using valuesCanNull parameter (side effects - after replace placeholders on template, it's shows raw placeholder)
     *
     * @param valuesCanNull if true, all KeyValue pair's values can null
     *                      (side effects - after replace placeholders on template, it's shows null)
     */
    public TemplateDataMap(boolean valuesCanNull){
        this(TemplateDataMap.DEFAULT_GROW_STRATEGY, valuesCanNull);
    }

    public TemplateDataMap(GrowStrategy growStrategy){
        this(growStrategy,false);
    }

    public TemplateDataMap(GrowStrategy growStrategy, boolean valuesCanNull){
        this.growStrategy = growStrategy;
        this.valuesCanNull = valuesCanNull;
        this.init();
    }

    protected boolean init(){
        this.keyValuePairs = new KeyValuePair[0];
        return this.isFresh();
    }

    /**
     * @return boolean
     */
    @Override
    public boolean reInit() {
        return this.init();
    }

    /**
     * @return boolean
     * */
    public boolean isFresh(){
        return this.keyValuePairs != null && this.keyValuePairs.length == 0;
    }

    /**
     * @param key
     * @param value
     * @return DataMap
     */
    @Override
    public DataMap<K_type,V_type> put(K_type key, V_type value) {
        if((!isNull(key) || (!isNull(value) || valuesCanNull))
            && !isDuplicate(key)) { // Reject null values && duplicate key
            this.grow(
                    this.keyValuePairs,
                    new KeyValuePair<>(key, value));
        }

        return this;
    }

    @Override
    public DataMap<K_type,V_type> put(KeyValuePair<K_type,V_type> keyValuePair){
        if(!isNull(keyValuePair) && !KeyValuePair.isNullPair(keyValuePair, valuesCanNull)){
            this.grow(
                this.keyValuePairs,
                keyValuePair);
        }

        return this;
    }

    @Override
    protected boolean isDuplicate(K_type key){
        for(int i = 0; i < this.getSize();){
            if(this.get(i++).getKey().equals(key)) return true;
        }

        return false;
    }

    /**
     *
     */
    @Override
    public KeyValuePair<K_type,V_type>[] get() {
        return this.keyValuePairs;
    }

    @Override
    public KeyValuePair<K_type,V_type> get(int index) throws IndexOutOfBoundException {
        if(index > this.getSize() - 1) throw new IndexOutOfBoundException();
        return this.keyValuePairs[index];
    }

    /**
     * @return int
     */
    @Override
    public int getSize() {
        return this.keyValuePairs.length;
    }

    @Override
    protected void grow(KeyValuePair<K_type, V_type>[] old_values,
              KeyValuePair<K_type,V_type> new_KeyValue_pair){

        KeyValuePair[] new_pairs = {new_KeyValue_pair};
        this.grow(old_values,new_pairs);
    }

    @Override
    protected void grow(KeyValuePair<K_type,V_type>[] old_values,
              KeyValuePair<K_type,V_type>[] new_KeyValue_pairs) {

        int i = 0,
        old_value_len = old_values.length;
        KeyValuePair<K_type,V_type>[] temp_array;

        switch (this.growStrategy.getGrowMethod()){
            case ADDING:
                temp_array = new KeyValuePair[
                        old_value_len + this.growStrategy.getGrowRate()];
                break;

            case MULTIPLYING:
                temp_array = new KeyValuePair[
                        old_value_len * this.growStrategy.getGrowRate()];
                break;

            default:
                temp_array = new KeyValuePair[
                        old_value_len + new_KeyValue_pairs.length];
                break;
        }

        while(i < temp_array.length){
            temp_array[i] = (i < old_value_len)
                    ? old_values[i] : new_KeyValue_pairs[i - old_value_len];
            i++;
        }

        this.keyValuePairs = temp_array;
        System.gc();
    }

    @Override
    public void setGrowStrategy(GrowStrategy strategy){
        this.growStrategy = strategy;
    }
}
