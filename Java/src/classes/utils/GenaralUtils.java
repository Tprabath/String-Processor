package classes.utils;

import java.util.Arrays;

public final class GenaralUtils {
    static public boolean isNull(Object obj){
        return obj == null;
    }

    public static String convertToString(Object o){
        return ((o instanceof String) ? (String) o : String.valueOf(o));
    }



    /**
     * Clone values
     * @param v primitive types or Object
     * @param cloneCount count of clones
     * @return Array of v values
     */

    public static byte[] cloneToArray (byte v, int cloneCount){
        byte[] arr = new byte[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static short[] cloneToArray (short v, int cloneCount){
        short[] arr = new short[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static int[] cloneToArray (int v, int cloneCount){
        int[] arr = new int[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static long[] cloneToArray (long v, int cloneCount){
        long[] arr = new long[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static float[] cloneToArray (float v, int cloneCount){
        float[] arr = new float[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static double[] cloneToArray (double v, int cloneCount){
        double[] arr = new double[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static char[] cloneToArray (char v, int cloneCount){
        char[] arr = new char[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static boolean[] cloneToArray (boolean v, int cloneCount){
        boolean[] arr = new boolean[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }

    public static Object[] cloneToArray (Object v, int cloneCount){
        Object[] arr = new Object[cloneCount];
        Arrays.fill(arr,v);
        return arr;
    }
}
