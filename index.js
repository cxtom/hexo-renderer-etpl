/**
 * @file ETPL renderer plugin for Hexo
 * @author cxtom (cxtom2008@gmail.com)
 */

var etpl = require('etpl');
var _    = require('underscore');

/* global hexo */

hexo.extend.renderer.register('etpl', 'html', function (data, locals) {
    return etpl.render(
                data.text,
                _.extend({
                    filename: data.path
                }, locals)
            );
}, true);
