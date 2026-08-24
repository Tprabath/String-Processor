package classes.strategy;

import enums.GrowMethods;

public class GrowStrategy extends Strategy{
    private final int growRate;
    private final GrowMethods growMethod;

    public GrowStrategy(){
        this(0);
    }
    public GrowStrategy(int growRate){
        this(growRate,GrowMethods.DEFAULT);
    }

    public GrowStrategy(int growRate, GrowMethods growMethod){
        this.growRate = growRate;
        this.growMethod = growMethod;
    }

    public int getGrowRate(){
        return this.growRate;
    }
    public GrowMethods getGrowMethod(){
        return this.growMethod;
    }
}
