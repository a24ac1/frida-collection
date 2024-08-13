Java.perform(function() {
    // Mendapatkan referensi ke kelas LoggerWrapper
    var LoggerWrapper = Java.use('com.xx'); // Gantilah dengan nama paket yang benar

    // Hooking metode LoggerWrapper.v
    LoggerWrapper.v.overload('java.lang.String', 'java.lang.String').implementation = function(tag, message) {
        // Log informasi tentang panggilan metode
        console.log('[+] LoggerWrapper.v called');
        console.log('    Tag: ' + tag);
        console.log('    Message: ' + message);

        // Memanggil metode asli dengan parameter asli
        return this.v(tag, message);
    };
});
