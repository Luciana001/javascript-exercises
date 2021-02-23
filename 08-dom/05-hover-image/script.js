/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    $("#image").mouseover(function () {
        $(this).attr('src', $(this).attr("src").replace('../../_shared/img/kiss.svg', 'src', '../../_shared/img/kiss-wink-heart.svg'));
    }).mouseout(function () {
        $(this).attr('src', $(this).attr("src").replace('../../_shared/img/kiss-wink-heart.svg', '../../_shared/img/kiss.svg', 'src'));
    });

    $("#image").mouseover(function () {
        $(this).attr('src', $(this).data("hover"));
    }).mouseout(function () {
        $(this).attr('src', $(this).data("src"));
    });

})();
