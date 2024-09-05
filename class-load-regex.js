Java.perform(function() {
    // Dapatkan semua kelas yang dimuat
    var allClasses = Java.enumerateLoadedClassesSync();
    console.log("[*] Listing classes in com.xxx.*:");

    // Filter kelas yang termasuk dalam package com.show.*
    allClasses.forEach(function(className) {
        if (className.startsWith('com.xxx.')) {
            console.log(className);
        }
    });
});
