function drawSVG(poly, height, width) {
    
    var canvas=document.getElementById("viewport")
    var pctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    
    pctx.strokeStyle = 'red';
    pctx.lineWidth = 5;

    pctx.beginPath();
    pctx.moveTo(poly[0], poly[1]);
    for( item = 2 ; item < poly.length - 1 ; item += 2 ) {
        pctx.lineTo( poly[item] , poly[item + 1] )
    }

    pctx.closePath(); 
    pctx.stroke();


}

function drawSecondSVG(poly) {
    var w = 200;
    var h = w;
    var s = Snap(w, h);
    var points = [];
    for (var i = 0; i < poly.length; i += 2) {
        var x = poly[i];
        var y = poly[i+1];
        points.push(x);
        points.push(y);
    }
    console.log(points);
    s.polyline(points);
}