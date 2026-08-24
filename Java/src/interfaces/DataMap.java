package interfaces;

import classes.dto.KeyValuePair;
import classes.exceptions.DataMapException;

public  interface DataMap<K,V> {
     boolean reInit();
     DataMap<K,V> put(K key,V Value);
     DataMap<K,V> put(KeyValuePair<K,V> keyValuePair);
     KeyValuePair<K,V>[] get();
     KeyValuePair<K,V> get(int index) throws DataMapException;
     int getSize();
}