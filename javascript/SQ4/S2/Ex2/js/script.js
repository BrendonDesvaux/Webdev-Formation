$('input').change(function() {
    width = $("#long").val();
    width = parseInt(width);
    height = $("#larg").val();
    height = parseInt(height);
    //if inputs aren't enmpty
    if ($("#long").val() != "" && $("#larg").val() != "") {
        let rectangle = new Rectangle(width, height);
        $("#result").html("Rectangle Surface: " + rectangle.surface + " Perimeter: " + rectangle.perimeter);
        let circle = new Circle(width);
        $("#result2").html("Circle Surface: " + circle.getArea() + " Perimeter: " + circle.getPerimeter());
    }

    if ($("#long").val() <= 0) {
        $("#long").val(1);
    }
    //if value of larg is negative, set it to 0
    if ($("#larg").val() <= 0) {
        $("#larg").val(1);
    }
    //if value of radius is negative, set it to 0
    if ($("#radius").val() <= 0) {
        $("#radius").val(1);
    }
});