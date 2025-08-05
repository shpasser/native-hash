import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(NativeHashPlugin)
public class NativeHashPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NativeHashPlugin"
    public let jsName = "NativeHash"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]

    @objc func sha256(_ call: CAPPluginCall) {
        guard let text = call.getString("text") else {
            call.reject("Missing 'text'")
            return
        }

        let data = Data(text.utf8)
        let digest = SHA256.hash(data: data)
        let hashData = Data(digest)
        let base64Hash = hashData.base64EncodedString()

        call.resolve([
            "hash": base64Hash
        ])
    }
}
