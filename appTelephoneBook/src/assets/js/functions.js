var Teste = function() {
        alert('Aqui');
};

var key = CryptoJS.enc.Utf8.parse('4668484848494273');
var iv = CryptoJS.enc.Utf8.parse('4668484848494273');

var encryptData = function (data) {
        try {
            var result = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
                    {
                        keySize: 128 / 8,
                        iv: iv,
                        mode: CryptoJS.mode.CBC,
                        padding: CryptoJS.pad.Pkcs7
                    });
            return result.toString();
        }
        catch (err) {
            alert(err);
        }
    };
    
var decrypt = function (data) {
        return CryptoJS.AES.decrypt(
          data,
          key,
          {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          }
        ).toString(CryptoJS.enc.Utf8);
    };
    
var hex2a = function(hex) {
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    };


var fingerprint = (function (window, screen, navigator) {

    // https://github.com/darkskyapp/string-hash
    function checksum(str) {
        var hash = 5381,
            i = str.length;

        while (i--) hash = (hash * 33) ^ str.charCodeAt(i);

        return hash >>> 0;
    }

    // http://stackoverflow.com/a/4167870/1250044
    function map(arr, fn) {
        var i = 0, len = arr.length, ret = [];
        while (i < len) {
            ret[i] = fn(arr[i++]);
        }
        return ret;
    }

    return checksum([
        navigator.userAgent,
        [screen.height, screen.width, screen.colorDepth].join('x'),
        new Date().getTimezoneOffset(),
        !!window.sessionStorage,
        !!window.localStorage,
        map(navigator.plugins, function (plugin) {
            return [
                plugin.name,
                plugin.description,
                map(plugin, function (mime) {
                    return [mime.type, mime.suffixes].join('~');
                }).join(',')
            ].join("::");
        }).join(';')
    ].join('###'));

} (this, screen, navigator));

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};