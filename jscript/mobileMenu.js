$(document).ready(function () {

    var $select = $('<select></select>');
    var $option;

    $('nav ul a').each(function () {
        var $anchor = $(this);

        $option = $('<option></option>');

        if ($anchor.parent().hasClass("selected")) {
            $option.prop("selected", true);
        }

        $option.val($(this).attr('href'));
        $option.text($(this).text());
        $select.append($option);

    });

    $('nav').append($select);

    //will change to the selected page
    $select.change(function () {
        window.location = $select.val();
    });

});