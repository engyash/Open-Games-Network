function makeid(length)
{
    var text = "";
    var possible = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789";

    for( var i=0; i < length; i++ ) {
        var c = possible.charAt(Math.floor(Math.random() * possible.length));
        text += c;
    }

    return text;
}

function setCookie(c_name,value,exdays)
{
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}
angular.module ('hydraTools', [
])

.service ('$hydraTools', function(supplementalApiUri) {
  var device_id = getCookie('device_id');
  if (device_id) {
  } else {
    device_id = makeid(3);
    setCookie('device_id', device_id, 1000);
  }

  var _country = 'US';
  var _language = 'en';
  var _transactionID = 0;
  var _liveDomainRegex = /.*myjosephs\.com/;
  
  return {
    envUrls: function() {
      var urls = {
        'exigoapi': 'http://sandboxapi1.exigo.com/4.0/josephs/'
      };
      if (location.hostname.match(_liveDomainRegex)) {
        urls = {
            'exigoapi': 'https://api.exigo.com/4.0/josephs/'
        };
      }
      return urls;
    },
cdnUrls: function() {
    var urls = 'http://2ff76b84e8d090c3b7dd-e1a94ed7ec03f5b7528349a000919b71.r13.cf1.rackcdn.com';//Test
      if (location.hostname.match(_liveDomainRegex)) {
        urls = 'https://786fba6745a42a1b587f-3bea20f8b8424a1ec74f1f5caab290e5.ssl.cf1.rackcdn.com';//Live
      }
      return urls;
    },
    requestFactory: function(params) {
          var type = params.type;
          var data = params;
          var requestType = params.post ? '.post.json' : '.jsonp';
          var env = 'test';

          if (location.hostname.match(_liveDomainRegex)) {
            env = 'live';
          }

          _transactionID += 1;
          var cacheKey = type;
          var request = {
              "url": 'https://hydra.josephs.net:8123/5.0/ClientApi' + requestType,              
              'data': params.data,
              'env': env
          };

      return request;
    },
    validateHydraResult: function(result) {
      if (result.data === undefined ||
          result.data.responses === undefined ||
          result.data.responses[0] === undefined
      ) {
        return 'INVALID_RESPONSE';
      }
  
      if (result.data === undefined ||
          result.data.responses === undefined ||
          result.data.responses[0] === undefined ||
          result.data.responses[0].errorCode !== undefined
      ) {
        return result.data.responses[0].errorCode;
      }
  
      return null;
    },

    setLocale: function(locale) {
      var parts = locale.split('_');
  
       _language = parts[0].substring(0,2).toLowerCase();
       _country = parts[1].substring(0,2).toUpperCase();
    },

    setCountryLanguage: function(country_new, language_new) {
      _country = country_new.substring(0,2).toUpperCase();
      _language = language_new.substring(0,2).toLowerCase();
    },

    setCountry: function(country_new) {
      _country = country_new.substring(0,2).toUpperCase();
    },

    setLanguage: function(language_new) {
      _language = language_new.substring(0,2).toLowerCase();
    },

    getLocale: function() {
      return _language + '_' + _country;
    },

    getCountry: function() {
      return _country;
    },

    getLanguage: function() {
      return _language;
    },

    getDeviceID: function() {
      return device_id;
    },
    nodeRequestFactory: function(params) {
          var type = params.type;
          var data = params;
          var env = 'test';
          if (location.hostname.match(/.*myjosephs\.com/)) {
            env = 'live';
          }

          _transactionID += 1;
          var cacheKey = type;
          var request = {
              "url": supplementalApiUri,              
              'data': params.data,
              'env': env
      };
      return request;
    }
  };
});
