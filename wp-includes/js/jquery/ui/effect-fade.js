/*!
* jQuery UI Effects Fade 1.13.1
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery","./effect"],factory);}else{factory(jQuery);}})(function($){"use strict";return $.effects.define("fade","toggle",function(options,done){var show=options.mode==="show";$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:false,duration:options.duration,easing:options.easing,complete:done});});});