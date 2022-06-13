function cutPolygon_antiClockwise(){
	
	
	numOfPolySides = WCJson.WC_PolySide;
	
	R = WCJson.WC_PolyRedius 
	   
    Poly_x = WCJson.WC_Origin_X + Ply_x;
    Poly_y = WCJson.WC_Origin_Y + ply_y; 
	
	  arr = [];
	 
	 NGon(Poly_x, Poly_y, numOfPolySides, R);
	 
	 if(numOfPolySides == 3 ){
		 
		 

         balk1 = paper.path(arr[0])
         balk1.animate({path: arr[0]+ arr[3]}, 3000, function() {
                balk1 .animate({path: arr[0]+ arr[3] + arr[2]}, 3000, function(){
                balk1 .animate({path: arr[0]+ arr[3] + arr[2] + arr[1]}, 3000, function(){
                   balk1.animate({path: arr[0]+ arr[3] + arr[2] + arr[1] + arr[3]+"z"}, 3000, function(){
                	   cutpart();
                	   });
                });
            });
        }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));
}
	 
	 if(numOfPolySides == 4){
		 
	       balk1 = paper.path(arr[0])
	         balk1.animate({path: arr[0]+ arr[4]}, 3000, function() {
	                balk1 .animate({path: arr[0]+ arr[4] + arr[3]}, 3000, function(){
	                balk1 .animate({path: arr[0]+ arr[4] + arr[3] + arr[2]}, 3000, function(){
	                   balk1.animate({path: arr[0]+ arr[4] + arr[3] + arr[2] + arr[1]}, 3000, function(){
	                   balk1.animate({path: arr[0]+ arr[4] + arr[3] + arr[2] + arr[1] + arr[4]+ "z" }, 3000, function(){
                	   cutpart();
                	   });
	                    });
	                });
	            });
	        }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));
}
	 if(numOfPolySides == 5){
		 
		    balk1 = paper.path(arr[0])
	         balk1.animate({path: arr[0]+ arr[5]}, 3000, function() {
	                balk1 .animate({path: arr[0]+ arr[5] + arr[4]}, 3000, function(){
	                balk1 .animate({path: arr[0]+ arr[5] + arr[4] + arr[3]}, 3000, function(){
	                   balk1.animate({path: arr[0]+ arr[5] + arr[4] + arr[3] + arr[2]}, 3000, function(){
	                   balk1.animate({path: arr[0]+ arr[5] + arr[4] + arr[3] + arr[2] + arr[1] }, 3000, function(){
	                   balk1.animate({path: arr[0]+ arr[5] + arr[4] + arr[3] + arr[2] + arr[1] + arr[5]+"z"}, 3000, function(){
                	   cutpart();
                	   })
	                    });
	                    });
	                });
	            });
	        }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));
		 
		 
		 
}
	
 if(numOfPolySides == 6){
	 

     balk1 = paper.path(arr[0])
        balk1.animate({path: arr[0]+ arr[6]}, 3000, function() {
               balk1 .animate({path: arr[0]+ arr[6] + arr[5]}, 3000, function(){
               balk1 .animate({path: arr[0]+ arr[6] + arr[5] + arr[4]}, 3000, function(){
                  balk1.animate({path: arr[0]+ arr[6] + arr[5] + arr[4] + arr[3]}, 3000, function(){
                  balk1.animate({path: arr[0]+ arr[6] + arr[5] + arr[4] + arr[3] + arr[2] }, 3000, function(){
                  balk1.animate({path: arr[0]+ arr[6] + arr[5] + arr[4] + arr[3] + arr[2] + arr[1]}, 3000, function(){
                  balk1.animate({path: arr[0]+ arr[6] + arr[5] + arr[4] + arr[3] + arr[2] + arr[1] + arr[6] +"z"}, 3000, function(){
               	   cutpart();
           	   })
                   });
                   });
                   });
               });
           });
       }).insertBefore(window.setInterval("method_animasi_cutPolygon()", 1));
}
 
 if(numOfPolySides == 7){
	 
	  balk1 = paper.path(arr[0])
      balk1.animate({path: arr[0]+ arr[7]}, 3000, function() {
             balk1 .animate({path: arr[0]+ arr[7] + arr[6]}, 3000, function(){
             balk1 .animate({path: arr[0]+ arr[7] + arr[6] + arr[5]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[7] + arr[6] + arr[5] + arr[4]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[7] + arr[6] + arr[5] + arr[4] + arr[3] }, 3000, function(){
                balk1.animate({path: arr[0]+ arr[7] + arr[6] + arr[5] + arr[4] + arr[3] + arr[2]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[7] + arr[6] + arr[5] + arr[4] + arr[3] + arr[2] + arr[1]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[7] + arr[6] + arr[5] + arr[4] + arr[3] + arr[2] + arr[1] + arr[7]+"z"}, 3000, function(){
             	   cutpart();
         	   })
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
      balk1.animate({path: arr[0]+ arr[8]}, 3000, function() {
             balk1 .animate({path: arr[0]+ arr[8] + arr[7]}, 3000, function(){
             balk1 .animate({path: arr[0]+ arr[8] + arr[7] + arr[6]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[8] + arr[7] + arr[6] + arr[5]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[8] + arr[7] + arr[6] + arr[5] + arr[4] }, 3000, function(){
                balk1.animate({path: arr[0]+ arr[8] + arr[7] + arr[6] + arr[5] + arr[4] + arr[3]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[8] + arr[7] + arr[6] + arr[5] + arr[4] + arr[3] + arr[2]}, 3000, function(){
                balk1.animate({path: arr[0]+ arr[8] + arr[7] + arr[6] + arr[5] + arr[4] + arr[3] + arr[2] + arr[1]}, 3000, function(){
                    balk1.animate({path: arr[0]+ arr[8] + arr[7] + arr[6] + arr[5] + arr[4] + arr[3] + arr[2] + arr[1] + arr[8]+"z"}, 3000, function(){
                 	   cutpart();
             	   })
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

cutPolygon_antiClockwise();



