
(function ($) {
    $.fn.horizAlign = function (ref) {
        var prepare = function (elem, ref) {
            var c = elem, r = elem.parent ().find (ref);
            setTimeout (function () {
                c.css ({marginLeft: ((r.outerWidth (true) >> 1) - (c.outerWidth (true) >> 1)) + 'px'});
            }, 250);
        }; // prepare ();
        
        $(this).each (function () {prepare ($(this), ref);});
        
        return this;
    }; // horizAlign ();
})(jQuery);
