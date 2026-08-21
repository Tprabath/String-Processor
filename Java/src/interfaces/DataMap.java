package interfaces;

import classes.KeyValuePair;

public  interface DataMap<K,V> {
     boolean reInit();
     DataMap<K,V> put(K key,V Value);
     KeyValuePair<K,V>[] get();
     KeyValuePair<K,V> get(int index);
     int getSize();
}