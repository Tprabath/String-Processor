package classes;

import interfaces.DataMap;

public abstract class AbsractDataMap<K,V>
        implements DataMap<K,V> {

    protected void grow(){}
}
