package com.enw.plugins.nativehash

import java.security.MessageDigest
import android.util.Base64
import com.getcapacitor.PluginCall
import com.getcapacitor.Plugin
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginMethod

@CapacitorPlugin(name = "NativeHash")
class NativeHashPlugin : Plugin() {
    @PluginMethod
    fun sha256(call: PluginCall) {
        val input = call.getString("text") ?: run {
            call.reject("Missing 'text'")
            return
        }

        val digest = MessageDigest.getInstance("SHA-256")
        val hash = digest.digest(input.toByteArray())
        val base64Hash = Base64.encodeToString(hash, Base64.NO_WRAP)

        val ret = JSObject().put("hash", base64Hash)
        call.resolve(ret)
    }
}
