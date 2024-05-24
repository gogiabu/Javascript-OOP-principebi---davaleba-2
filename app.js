class myclass {
    height = " ";

    set_height() {
        this.height = "300px";
    }
    get_height() {
        console.log(this.height);
    }

    width = " ";

    set_width() {
        this.width = "400px";
    }
    get_width() {
        console.log(this.width);
    }
}

var object = new myclass();
object.set_height();
object.set_width();
document.write(object.height + ("<br>"));
document.write(object.width + ("<br>"));
