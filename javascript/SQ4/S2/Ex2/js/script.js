$('input').change(function() {
    width = $("#long").val();
    width = parseInt(width);
    height = $("#larg").val();
    height = parseInt(height);
    //if inputs aren't enmpty
    if ($("#long").val() != "" && $("#larg").val() != "") {
        let rectangle = new Rectangle(width, height);
        $("#result").html("Rectangle Surface: " + rectangle.surface + " Perimeter: " + rectangle.perimeter);
    }
    if ($("#radius").val() != "") {
        let circle = new Circle(width);
        $("#result2").html("Circle Surface: " + circle.getArea() + " Perimeter: " + circle.getPerimeter());
    }
});