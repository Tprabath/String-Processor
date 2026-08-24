package classes.abstractClasses;

import classes.dto.KeyValuePair;
import classes.exceptions.DataMapException;
import classes.strategy.GrowStrategy;
import interfaces.DataMap;

public abstract class AbsractDataMap<K,V>
        implements DataMap<K,V> {

    protected KeyValuePair<K,V>[] keyValuePairs;

    protected abstract boolean init();
    protected abstract void grow(
            KeyValuePair<K,V>[] old_values,
            KeyValuePair<K,V> new_KeyValue_pair);

    protected abstract void grow(
            KeyValuePair<K,V>[] old_values,
            KeyValuePair<K,V>[] new_KeyValue_pairs
    ) throws DataMapException;

    protected abstract boolean isDuplicate(K key);

    public abstract boolean isFresh();
    public abstract void setGrowStrategy(GrowStrategy strategy);
}
