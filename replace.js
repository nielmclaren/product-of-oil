
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
    this.data = this.data.replace('Jian Ghomeshi', '[SERIOUSLY, GET ON WITH YOUR LIFE.]');
    this.data = this.data.replace('Jian', '[STOP READING THIS.]');
    this.data = this.data.replace('Ghomeshi', '[PLEASE. STOP.]');
});
