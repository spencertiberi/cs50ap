$(document).ready(function() {

    // toggle sidebar
    $('#sidebar-toggler').click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });

    // enable dropdowns
    $('.ui.dropdown').dropdown();

    // dropdown linker: links to the option value on click
    $('.dropdown-linker').dropdown({
        onChange: function(val) {
            window.location = val;
        }
    });

    // sort tables
    $('table.sortable').tablesort()
    
    // close messages when x is clicked
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    
    // ensure that forms are only submitted once
    $('.me-form').attr('submitted', 'false');
    $('.me-form').on('submit', function() {
        if ($(this).attr('submitted') == 'true')
            return false;
        $(this).attr('submitted', 'true');
    });

});
