package com.enw.plugins.nativehash;

import com.getcapacitor.Logger;

public class NativeHash {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
