$(document).ready(function() {
    const amenities = {};
    $("li input[type=checkbox]").change(function() {
        if ($(this).prop("checked")) {
            amenities[$(this).data("name")] = $(this).data("id");
        } else {
            delete amenities[$(this).data("name")];
        }
        $(".amenities h4").text(Object.keys(amenities).sort().join(", "));
    });
});

