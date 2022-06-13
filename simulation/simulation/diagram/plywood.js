function plywood(heightofPly, widthOfPly){
	
	
	
	
	paper_x = 0;
	paper_y = 50;
	
	Ply_x = paper_x + 100;
	ply_y = paper_y + 200;
	
	//x_coOrdinate = 0;
	//y_coOrdinate = 0;
	
	paper.rect(Ply_x, ply_y, heightofPly, widthOfPly).attr({stroke: "black", 
	      'stroke-opacity':0.4,
	      'stroke-width':7,
	      'glow':1, 
	      "fill":"90-#B48D51 :20-#643D01:50-#B48D51 :80"})
	
	
	
	      
	drawmachine((paper_x + 15), (paper_y + 50));
	cuttingNiddle = drawCuttingTool(Ply_x, ply_y);	
	drawToolWire((paper_x + 30),(paper_y + 50) , 110, 100, 10, 90, X_coOrdinate, (Y_coOrdinate - 65), "hsb(0, .75, .75)");
	
}

function drawmachine(x,y){
	
	paper.rect(x,y, 1045, 10).attr({
        "stroke": "black",
        "stroke-width": 3,
        "glow":1, 
    		"fill":"#c5c0c0"
       
         })
	
	
}

function drawCuttingTool(x,y){
	
	X_coOrdinate = x ;
	Y_coOrdinate =  y;
	
	obj = paper.path("M "+X_coOrdinate+","+Y_coOrdinate+"  l 5 0  0 -20 8 0 0 -45 -21 0 0 45 8 0 0 20").attr({
        "stroke": "black ",
        "stroke-width": 1,
        "glow":1, 
    		"fill":"90-#c6c5c8 :20-#f0f0f1 :50-#c6c5c8 :80"
       
         });
	
	return obj;
         
      
}

function drawToolWire(x, y, ax, ay, bx, by, zx, zy, color){
	
	
	     var path = [["M", x, y], ["C", ax, ay, bx, by, zx, zy]]
       
	     discattr = {"fill": "black"};
         wireJoint1_ToMachine = paper.circle(x, y, 5).attr(discattr)
		 wireJoint2_ToNiddle = paper.circle(zx, zy, 5).attr(discattr)
         path2 = [ ["M", bx, by], ["L", zx, zy]]
         curve = paper.path(path).attr({stroke: color || Raphael.getColor(), "stroke-width": 4, "stroke-linecap": "round"})
}











