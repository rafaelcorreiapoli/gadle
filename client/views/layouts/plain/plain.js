Template.plainLayout.onRendered(function() {
    // Add gray color for background in blank layout
    $('body').addClass('colored-bg');
});

Template.plainLayout.onDestroyed(function() {
    // Remove special color for blank layout
    $('body').removeClass('colored-bg');
});
