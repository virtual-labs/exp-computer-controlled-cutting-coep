function cutPolygon(){
	
	
	numOfPolySides = WCJson.WC_PolySide;
	
	R = WCJson.WC_PolyRedius 
	   
    Poly_x = WCJson.WC_Origin_X + Ply_x;
    Poly_y = WCJson.WC_Origin_Y + ply_y; 
	
	  arr = [];
	 
	 NGon(Poly_x, Poly_y, numOfPolySides, R);
	 
	 if(numOfPolySides == 3 ){
		 
			 
			 balk1 = paper.path(arr[0])
		     balk1.animate({path: arr[0]+ arr[1]}, 3000, function() {
		            balk1 .animate({path: arr[0]+ arr[1] + arr[2]}, 3000, function(){
		            balk1 .animate({path: arr[0]+ arr[1] + arr[2] + arr[3]+ "z"}, 3000, function(){ 
		            	cutpart();
		            	});
		        });
		    }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));
			 
			
	 
	 }
	 
	 if(numOfPolySides == 4){
		 
		 
		 balk1 = paper.path(arr[0])
         balk1.animate({path: arr[0]+ arr[1]}, 3000, function() {
                balk1 .animate({path: arr[0]+ arr[1] + arr[2]}, 3000, function(){
                balk1 .animate({path: arr[0]+ arr[1] + arr[2] + arr[3]}, 3000, function(){
                   balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4]+ "z"}, 3000,function(){
                	   cutpart();
                   });
                });
            });
        }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));

 
 }
	 if(numOfPolySides == 5){
		 
		 
		 balk1 = paper.path(arr[0])
	     balk1.animate({path: arr[0]+ arr[1]}, 3000, function() {
	            balk1 .animate({path: arr[0]+ arr[1] + arr[2]}, 3000, function(){
	            balk1 .animate({path: arr[0]+ arr[1] + arr[2] + arr[3]}, 3000, function(){
	               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4]}, 3000, function(){
	               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5]+ "z"}, 3000,function(){
	            	   cutpart();
	               });
	                });
	            });
	        });
	    }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));

		 
		 
	 }
	
 if(numOfPolySides == 6){
		 
		 
	 balk1 = paper.path(arr[0])
     balk1.animate({path: arr[0]+ arr[1]}, 3000, function() {
            balk1 .animate({path: arr[0]+ arr[1] + arr[2]}, 3000, function(){
            balk1 .animate({path: arr[0]+ arr[1] + arr[2] + arr[3]}, 3000, function(){
               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4]}, 3000, function(){
               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5]}, 3000, function(){
               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6]+ "z"}, 3000,function(){
            	   cutpart();
               });
                });
                });
            });
        });
    }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));

		 
		 
	 }
 
 if(numOfPolySides == 7){
	 
	 
	 balk1 = paper.path(arr[0])
     balk1.animate({path: arr[0]+ arr[1]}, 3000, function() {
            balk1 .animate({path: arr[0]+ arr[1] + arr[2]}, 3000, function(){
            balk1 .animate({path: arr[0]+ arr[1] + arr[2] + arr[3]}, 3000, function(){
               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4]}, 3000, function(){
               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5]}, 3000, function(){
               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6]}, 3000, function(){
               balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7]+ "z"}, 3000,function(){
            	   cutpart();
               });
                });
                });
                });
            });
        });
    }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));

		 
		 
	 }
 
if(numOfPolySides == 8){
	 
    balk1 = paper.path(arr[0])
    balk1.animate({path: arr[0]+ arr[1]}, 3000, function() {
           balk1 .animate({path: arr[0]+ arr[1] + arr[2]}, 3000, function(){
           balk1 .animate({path: arr[0]+ arr[1] + arr[2] + arr[3]}, 3000, function(){
              balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4]}, 3000, function(){
              balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5]}, 3000, function(){
              balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6]}, 3000, function(){
              balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7]}, 3000, function(){
              balk1.animate({path: arr[0]+ arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8]+ "z"}, 3000,function(){
            	  cutpart();
              });
               });
               });
               });
               });
           });
       });
   }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));

		 
		 
	 }
	
	 
	 
	 
	 
	
}

cutPolygon();

function NGon(x, y, N, side, angle) {
 //   paper.circle(x, y, 80).attr("stroke", "black");
 //   paper.circle(x, y, 3).attr("fill", "black");
        
     path = "";
      var  c, temp_x, temp_y, theta;
    
    for (c = 0; c <= N; c += 1) {
        theta = (c + 0.5) / N * 2 * Math.PI;
        temp_x = x + Math.cos(theta) * side;
        temp_y = y + Math.sin(theta) * side;
        path_c = (c === 0 ? "M" : "L") + temp_x + "," + temp_y;
        
 //        console.log("path"+c +"  "+path_c);
         arr[c] = path_c;
         
       path += path_c;
       
      
       
    }
 //   console.log(path);
//    console.log(arr);
    return path;
}

var counter = 0;
var position;
function method_animasi_cutPolygon() {

	
	obj.remove();
	position = balk1.getPointAtLength(counter);

	x_path = position.x  
	y_path =  position.y 
	 
	     drawCuttingTool(x_path, y_path);  
	  
	wireJoint1_ToMachine.remove();
	wireJoint2_ToNiddle.remove();
	curve.remove();
		
	drawToolWire((paper_x + 30 + x_path ),(paper_y + 50) , 110, 100, 10, 90, X_coOrdinate, (Y_coOrdinate - 65), "hsb(0, .75, .75)");

	counter++;
	if ( counter == balk1.getTotalLength() )
	{
	    counter = 0;
	   
	}
} 


function cutpart(){
	

	
	paper.path(path).attr({
         
         "stroke": "white",
         "stroke-width": 1,
         "fill":"white"
        
        }); ;
	 
	
	 balk1.attr({stroke: "black", 
			'stroke-opacity':0.4,
				 'stroke-width':7,
			'glow':1, 
		 "fill":"90-#B48D51 :20-#643D01:50-#B48D51 :80"})

	balk1.animate({
	
	//   transform:'t '+(WCJson.WC_width + WCJson.WC_Redius)+' 100'      
	transform:'t 500 -20'
	
	}, 1000)

}