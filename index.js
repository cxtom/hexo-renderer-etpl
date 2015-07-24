/**
 * @file ETPL renderer plugin for Hexo
 * @author cxtom (cxtom2008@gmail.com)
 */

var etpl = require('etpl');
var _    = require('underscore');

/* global hexo */

hexo.extend.renderer.register('etpl', 'html', function (data, locals) {
    var renderer = etpl.compile(data.text);
    return renderer(
                _.extend({
                    filename: data.path
                }, locals)
            );
}, true);
