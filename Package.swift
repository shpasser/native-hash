// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "NativeHash",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "NativeHash",
            targets: ["NativeHashPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "NativeHashPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/NativeHashPlugin"),
        .testTarget(
            name: "NativeHashPluginTests",
            dependencies: ["NativeHashPlugin"],
            path: "ios/Tests/NativeHashPluginTests")
    ]
)