(function() {
    "use strict";

    kintone.events.on('app.record.index.show', function(event){
        var el = kintone.app.getHeaderSpaceElement();
        
        el.innerHTML = '<div class="kintoneplugin-alert"><p>Hello World!</p></div>';        
    });
})();
