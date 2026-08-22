package classes.abstractClasses;

import classes.KeyValuePair;
import classes.exceptions.DataMapException;
import classes.GrowStrategy;
import interfaces.DataMap;

public abstract class AbsractDataMap<K,V>
        implements DataMap<K,V> {

    protected KeyValuePair<K,V>[] keyValuePairs;

    protected abstract void grow(
            KeyValuePair<K,V>[] old_values,
            KeyValuePair<K,V> new_KeyValue_pair);

    protected abstract void grow(
            KeyValuePair<K,V>[] old_values,
            KeyValuePair<K,V>[] new_KeyValue_pairs
    ) throws DataMapException;

    public abstract boolean isFresh();
    public abstract void setGrowStrategy(GrowStrategy strategy);
}
