// ==UserScript==
// @name         Octoprint Tweeks
// @namespace    https://octoprint.org/
// @version      0.1
// @description  This change a few things for my own comfort.
//               - Change the height of the webcam container
// @author       Pierre Hilson
// @match        http://*/octoprint/
// @grant        none
// ==/UserScript==

// To get something to match (and not expose my Octopi IP address on GitHub ;-) ),
// I changed my Octopi haproxy configuration to allow the /octoprint/ on my Octoprint URL.
// With this change:
// - http://x.x.x.x/ will open my Octoprint interface (but not fire this Userscript).
// - http://x.x.x.x/octoprint will open Octoprint and fire this script
//
// I added the first regrep in the /etc/haproxy/haproxy.cfg
// and restarted haproxy with 'sudo service haproxy restart'
// backend octoprint
//         acl needs_scheme req.hdr_cnt(X-Scheme) eq 0
//         reqrep ^([^\ :]*)\ /octoprint/(.*) \1\ /\2
//         reqrep ^([^\ :]*)\ /(.*) \1\ /\2
//         reqadd X-Scheme:\ https if needs_scheme { ssl_fc }
//         reqadd X-Scheme:\ http if needs_scheme !{ ssl_fc }
//         option forwardfor
//         server octoprint1 127.0.0.1:5000
//         errorfile 503 /etc/haproxy/errors/503-no-octoprint.http


(function() {
    'use strict';

    addGlobalStyle('#webcam_container { width: 85% !important; }');

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
})();
