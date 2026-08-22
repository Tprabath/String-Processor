package classes;

import classes.abstractClasses.AbsractDataMap;
import classes.exceptions.DataMapException;
import interfaces.DataMap;

public final class TemplateDataMap<K_type extends String, V_type>
    extends AbsractDataMap<K_type,V_type> {
    private GrowStrategy growStrategy;

    public TemplateDataMap(){
        this.reInit();
    }

    {
        this.growStrategy = new GrowStrategy();
    }

    /**
     * @return boolean
     */
    @Override
    public boolean reInit() {
       this.keyValuePairs = new KeyValuePair[0];
       return this.isFresh();
    }

    /**
     * @return boolean
     * */
    public boolean isFresh(){
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

    @Override
    public KeyValuePair<K_type,V_type> get(int index) throws DataMapException {
        if(index > this.getSize()) throw new DataMapException("Index out of bound");
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

         try{
             KeyValuePair[] new_pairs = {new_KeyValue_pair};
             this.grow(old_values,new_pairs);

         }catch (DataMapException e){
             e.printStackTrace();
         }
    }

    @Override
    protected void grow(KeyValuePair<K_type,V_type>[] old_values,
              KeyValuePair<K_type,V_type>[] new_KeyValue_pairs) throws DataMapException{

        int i = 0;
        KeyValuePair<K_type,V_type>[] temp_array;

        switch (this.growStrategy.getGrowMethod()){
            case ADDING:
                temp_array = new KeyValuePair[
                        this.getSize() + this.growStrategy.getGrowRate()];
                break;

            case MULTIPLYING:
                temp_array = new KeyValuePair[
                        this.getSize() * this.growStrategy.getGrowRate()];
                break;

            default:
                temp_array = new KeyValuePair[
                        this.getSize() + new_KeyValue_pairs.length];
                break;
        }

        while(true){
            if(i > temp_array.length) break;
            temp_array[i] = (i < this.getSize())
                    ? this.get(i) : new_KeyValue_pairs[i];

            i ++;
        }

        this.keyValuePairs = temp_array;
        System.gc();
    }

    @Override
    public void setGrowStrategy(GrowStrategy strategy){
        this.growStrategy = strategy;
    }
}
