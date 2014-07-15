$(document).ready(function () {

    var $select = $('<select></select>');
    var $option;

    $('nav ul a').each(function () {
        $option = $('<option></option>');
        $option.val($(this).attr('href'));
        $option.text($(this).text());
        $select.append($option);
    });

    $('nav').append($select);

});