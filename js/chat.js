$(function () {

    /**** Chat functions ****/

    $('#sendButton').click(function () {
        addMessage('Me', $('#textMessage').val());
        $('#textMessage').val('');
    });

    // Improve that using adapted list tags
    // Indicate that a part of the block has changed : use aria-live & aria-atomic (http://www.w3.org/TR/wai-aria/states_and_properties#aria-live)
    var addMessage = function (name, message) {
        $('#discussion').append('<p><span class="name ' + name + '">' + name + ' &gt;</span> ' + message + '</p>');
        $('#discussion').scrollTop($('#discussion')[0].scrollHeight);
    };

    // Indicate that this link is controlling another block : use aria-controls (http://www.w3.org/TR/wai-aria/states_and_properties#aria-controls)
    $('#friendsToggle').toggle(function () {
        $('#friendsList').hide();
        // Indicate that this block is expanded/collapsed : use aria-expanded (http://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded)
        $('#friendsWrapper').addClass('closed');
        // Indicate that this link text is changing : use aria-live (http://www.w3.org/TR/wai-aria/states_and_properties#aria-live)
        $(this).text('Unmute');
        clearInterval(timer);
    }, function () {
        $('#friendsList').show();
        $('#friendsWrapper').removeClass('closed');
        $(this).text('Mute');
        timer = setInterval(letThemTalk, 2000);
    });

    /**** Other utility methods ****/

    var others = $('.friends li span').map(function () {
        return $(this).text();
    });
    var pickUpRandomly = function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };
    var letThemTalk = function () {
        addMessage(pickUpRandomly(others), pickUpRandomly(SENTENCES));
    };
    var timer = setInterval(letThemTalk, 2000);

});

var SENTENCES = [
    'Gummies gummies sweet roll topping soufflé gingerbread jelly-o.',
    'Sugar plum pudding topping halvah.',
    'Muffin danish marshmallow jelly-o lollipop chocolate sweet roll brownie.',
    'Marshmallow liquorice carrot cake caramels tootsie roll.',
    'Tart bear claw chocolate cake wypas sweet. Soufflé chocolate brownie fruitcake liquorice powder croissant cookie.',
    'Candy brownie lemon drops sweet wafer sweet roll sweet roll pudding.',
    'Ice cream jelly beans candy canes cake icing gummi bears jelly beans bonbon.',
    'Pudding cheesecake gummi bears pudding gummies.',
    'Candy canes carrot cake macaroon soufflé danish jelly beans.',
    'Tiramisu lemon drops danish wafer topping jelly-o pie muffin ice cream.',
    'Donut tiramisu chocolate bar soufflé brownie pie.',
    'Cake macaroon brownie candy marshmallow.',
    'Chocolate pastry gingerbread jelly cupcake caramels.',
    'Soufflé applicake applicake danish applicake sweet roll toffee bear claw chocolate cake.',
    'Lemon drops fruitcake jelly-o chupa chups liquorice caramels sugar plum carrot cake.'
];