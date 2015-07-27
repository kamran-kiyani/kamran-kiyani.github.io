function convexHull(labelMap) {
    var convexHull = new ConvexHullGrahamScan();
    // console.log(labelMap[20].length);
    var x, y;
    for(var i = 0; i < labelMap.length; i++) {
        var label = labelMap[i];
        for(var j = 0; j < label.length; j++) {

            if ( label[j] != 0) {
            // console.log(labelMap[i] + ":" + i);
                //add points (needs to be done for each point, a foreach loop on the input array can be used.)
                // x = getXY(i, width)[0];
                // y = getXY(i, width)[1];
                convexHull.addPoint(j, i);
            }
        }
    }    

    //getHull() returns the array of points that make up the convex hull.
    var hullPoints = convexHull.getHull();
    // console.log(hullPoints);


// Add points (needs to be done for each point, a foreach loop on the input array can be used.)
// This is necessary to bring the x and y coordinate data in a format that can be read by the polyline function

    var XYObject = [];

    // hullPoints.forEach( function (arrayItem) {
    //   var x = arrayItem.prop1;
    //   var y = arrayItem.prop2;
    //   XYObject.push(x + " " + y);
    // });

    for (var i in hullPoints) {
       if (hullPoints.hasOwnProperty(i)) {
           var obj = hullPoints[i];
            for (var prop in obj) {
              // important check that this is objects own property 
              // not from prototype prop inherited
              if(obj.hasOwnProperty(prop)){
                // alert(prop + " = " + obj[prop]);
                XYObject.push(obj[prop]);

              }
           }
        }
    }
    console.log(XYObject);
    return XYObject;
}
