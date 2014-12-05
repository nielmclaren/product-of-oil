
jQuery.fn.textWalk = function( fn ) {
    this.contents().each( jwalk );

    function jwalk() {
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text') {
            fn.call( this );
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};

$('body').textWalk(function() {
    var self = this;
    var targets = [
        'Jian',
        'Ghomeshi',
        'Jian Ghomeshi'
    ];

    var phrases = [
        '[SERIOUSLY, GET ON WITH YOUR LIFE.]',
        '[STOP READING THIS.]',
        '[PLEASE. STOP.]'
    ];

    var getRandomPhrase = function() {
        return phrases[Math.floor(Math.random() * phrases.length)];
    };

    targets
        .sort(function(a, b) { return b.length - a.length; })
        .forEach(function(target) {
            self.data = self.data.replace(target, getRandomPhrase);
        });
});
