function cutEllipse_AnticlockWise(){
	
	  
		 
	      R = WCJson.EllipseX;
	      R1 = WCJson.EllipseY;
	   
	      x = WCJson.WC_Origin_X + Ply_x;
	      y = WCJson.WC_Origin_Y + ply_y; 
	      
	  
	    function drawEllipse() {
	      
	     // paper.clear();
	    	
	    	
	     
	      paper.customAttributes.arc = function (xloc, yloc, value, total, R, R1) {
	        var alpha = 360 / total * value,
	            a = (90 - alpha) * Math.PI / 180,
	            x = xloc - R * Math.cos(a),
	            y = yloc - R1 * Math.sin(a),
	            path;
	        if (total == value) {
	          path = [
	              ["M", xloc, yloc - R1],
	              ["A", R, R1, 0, 1, 1, xloc - 0.01, yloc - R1],
	            
	              
	              
	          ];
	        } else {
	          path = [
	              ["M", xloc, yloc - R1],
	              ["A", R, R1, 1, +(alpha > 180), 0, x, y],
	             
	          ];
	        }
	        
	        return {
	           path: path
	        };
	       
	      };

	      //make an arc at 50,50 with a radius of 30 that grows from 0 to 40 of 100 with a bounce
	       my_arc = paper.path().attr({
	          "stroke": "black",
	          "stroke-width": 2,
	          arc: [x, y, 0, 100, R, R1]
	      });

	     

	      my_arc.animate({
	         arc: [x, y, 100, 100, R, R1]
	      }, 8000, function() {
	            
	             paper.ellipse(x,y,R, R1).attr({
	            
	             "stroke": "white",
	             "stroke-width": 1,
	             "fill":"white"
	            
	            }); 
	            
	  //          obj.hide();
	            
	            my_arc.attr({stroke: "black", 
	      									'stroke-opacity':0.4,
	     										 'stroke-width':7,
	      									'glow':1, 
	     								 "fill":"90-#B48D51 :20-#643D01:50-#B48D51 :80"})
	                     
	            my_arc.animate({
	            
	         //   transform:'t '+(WCJson.WC_width + WCJson.WC_Redius)+' 100'      
	              transform:'t 500 -20'
	            
	            }, 1000)
	            
	              }
	      
	      
	      ). insertBefore(window.setInterval("method_animasi()", 20));


	     
	     

	      
	      
	   
	    } //end drawCircle


	//
	  
	    	
	    drawEllipse();
	    
	
	  
	       
	  
	      } // end timer60s
	      
	  
cutEllipse_AnticlockWise();   
	      
 

	


var counter = 0;
var position;
function method_animasi() {
		obj.remove();
    position = my_arc.getPointAtLength(counter);
   /*   obj.attr({
        cx: position.x  ,
        cy: position.y 
         }); 
     */
    x_path = position.x  
    y_path =  position.y 
     
         drawCuttingTool(x_path, y_path);  
      
    wireJoint1_ToMachine.remove();
    wireJoint2_ToNiddle.remove();
    curve.remove();
		
    drawToolWire((paper_x + 30 + x_path ),(paper_y + 50) , 110, 100, 10, 90, X_coOrdinate, (Y_coOrdinate - 65), "hsb(0, .75, .75)");
    
    counter++;
    if ( counter >= my_arc.getTotalLength() )
    {
        counter = 0;
    }
};