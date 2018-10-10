let auto = {
    toeter: function() {
        console.log("TOET!");
    },
    snelheid: 30 + " km/h",
    snelheidMeten: function() {
        console.log(this.snelheid);
    }
    
}

auto.toeter();
auto.snelheidMeten();