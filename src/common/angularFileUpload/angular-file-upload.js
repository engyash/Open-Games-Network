
(function() {
	
var angularFileUpload = angular.module('angularFileUpload', []);

angularFileUpload.service('$upload', function($http, $rootScope, $timeout) {
	this.upload = function(config) {
		config.method = config.method || 'POST';
		config.headers = config.headers || {};
		config.headers['Content-Type'] = undefined;
		//config.headers['Access-Control-Allow-Origin'] = '*';
		config.transformRequest = config.transformRequest || $http.defaults.transformRequest;
		var formData = new FormData();
		if (config.data) {
			for (var key in config.data) {
				var val = config.data[key];
				if (!config.formDataAppender) {
					if (typeof config.transformRequest == 'function') {
						val = config.transformRequest(val);
					} else {
						for (var i = 0; i < config.transformRequest.length; i++) {
							var fn = config.transformRequest[i];
							if (typeof fn == 'function') {
								val = fn(val);
							}
						}
					}
					formData.append(key, val);
				} else {
					config.formDataAppender(formData, key, val);
				}
			}
		}
		config.transformRequest =  angular.identity;
		formData.append(config.fileFormDataName || 'file', config.file, config.file.name);

		formData['__setXHR_'] = function(xhr) {
			config.__XHR = xhr;
			xhr.upload.addEventListener('progress', function(e) {
				if (config.progress) {
					$timeout(function() {
						config.progress(e);
					});
				}
			}, false);
			//fix for firefox not firing upload progress end
			xhr.upload.addEventListener('load', function(e) {
				if (e.lengthComputable) {
					$timeout(function() {
						config.progress(e);
					});
				}
			}, false);
		};

		config.data = formData;
		
		var promise = $http(config);
		
		promise.progress = function(fn) {
			config.progress = fn;
			return promise;
		};
		
		promise.abort = function() {
			if (config.__XHR) {
				$timeout(function() {
					config.__XHR.abort();
				});
			}
			return promise;
		};		
		promise.then = (function(promise, origThen) {
			return function(s, e, p) {
				config.progress = p || config.progress;
				origThen.apply(promise, [s, e, p]);
				return promise;
			};
		})(promise, promise.then);
		
		return promise;
	};
});

angularFileUpload.directive('ngFileSelect', function($parse, $http, $timeout) {
	return function(scope, elem, attr) {
		var fn = $parse(attr['ngFileSelect']);
		elem.bind('change', function(evt) {
			var files = [], fileList, i;
			fileList = evt.target.files;
			if (fileList != null) {
				for (i = 0; i < fileList.length; i++) {
					files.push(fileList.item(i));
				}
			}
			$timeout(function() {
				fn(scope, {
					$files : files,
					$event : evt
				});
			});
		});
		elem.bind('click', function(){
			this.value = null;
		});
	};
} );

})();
