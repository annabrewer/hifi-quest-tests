//Window.location = "hifi://localhost/-1.5,-0.1,-0.5/0,-0.6,0,-0.8";
Window.location = "hifi://engine-dev/21.9769,-9.70012,-21.5019/0,0.891658,0,0.45271";

var startTime = 5;
var endTime = startTime + 30;
var outputFile = "/sdcard/Documents/trace-all.json.gz";

Script.setTimeout(function () {
    var loggingRules = ""
        + "trace.*=true\n"
        /*
        + "trace.render.debug=true\n"
        + "trace.render=true\n"
        + "trace.render.detail=true\n"
        + "trace.baker=true\n"
        //+ "trace.app.debug=true\n"
        + "trace.app=true\n"
        + "trace.simulation.physics=true\n"
        + "";*/
    Test.startTracing(loggingRules);
}, startTime * 1000);

Script.setTimeout(function () {
    Test.stopTracing(outputFile);
    Test.quit();
}, endTime * 1000);