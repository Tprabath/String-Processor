package classes;

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
}
