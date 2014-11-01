/**
 *
 * jesses.co.tt
 *
 */


var jianBegone = {

  /**
   *
   */
  requestMentions: function() {
    console.log('Requesting...');

    //document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Jian", "g"), "nobody");

    //var replaced = $("body").html().replace(/Jian/g,'replace');
    //$("body").html(replaced);

    var textNodes = [], stack = [document.getElementsByTagName("body")[0]], c;
      while(c = stack.pop()) {
        console.log('inside');
        console.log('there are ' + c.childNodes.length + ' child nodes');
        for(var i = 0; i < c.childNodes.length; i++) {
          var n = c.childNodes[i];
          if(n.nodeType === 1) {
            stack.push(n);
          }
          else if(n.nodeType === 3) {
            textNodes.push(n);
          }
        }
      }

    for(var i = 0; i < textNodes.length; i++) {
      console.log('there are ' + textNodes.length + ' text nodes');
      textNodes[i].parentNode.replaceChild(document.createTextNode(textNodes[i].nodeValue.replace(/Jian/g, 'Peter')), textNodes[i]);
    }
  },


};

// Run When The DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  console.log('BACKGROUND.JS');
  jianBegone.requestMentions();
});
