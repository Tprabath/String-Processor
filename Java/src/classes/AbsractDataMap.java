package classes;

import interfaces.DataMap;

public abstract class AbsractDataMap<K,V>
        implements DataMap<K,V> {

    KeyValuePair<K,V>[] keyValuePairs;

    abstract void grow(
            KeyValuePair<K,V>[] old_values,
                       KeyValuePair<K,V> new_KeyValue_pair);
    abstract boolean isFresh();
}
