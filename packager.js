'use strict';
var packager = require('electron-packager');
var options = {
    'arch': 'x64',
    'platform': 'win32',
    'dir': './',
    'app-copyright': 'Perseus',
    'app-version': '1.0',
    'asar': true,
    'icon': './images/logo.ico',
    'name': 'RedisHealthCheck',
    'out': './releases',
    'overwrite': true,
    'prune': true,
    'version': '11.2.0',
    'version-string': {
        'CompanyName': '',
        'FileDescription': 'Checking Redis memory usage through Webdis',
        'OriginalFilename': 'RedisHealthCheck',
        'ProductName': 'RedisHealthCheck',
        'InternalName': 'RedisHealthCheck'
    }
};
packager(options, function done_callback(err, appPaths) {
    console.log("Error: ", err);
    console.log("appPaths: ", appPaths);
});