function drawSVG(poly) {
    
    var canvas=document.getElementById("viewport")
    var pctx = canvas.getContext('2d');

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
