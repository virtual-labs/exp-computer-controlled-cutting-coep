function cut_square_anticlockwise(){
	
	
	square_X = WCJson.WC_Origin_X + Ply_x;
	square_Y = WCJson.WC_Origin_Y + ply_y;
	
	squareWidth = WCJson.SquareX ;
	squareHeight = WCJson.SquareY ;
	
	  balk1 = paper.path("M"+square_X+" "+square_Y)
      balk1.animate({path: "M"+square_X+" "+square_Y+" l "+ 0 +" "+ squareHeight}, 3000, function() {
             balk1 .animate({path: "M"+square_X+" "+square_Y+" l "+ 0 +" "+ squareHeight +"  l "+ squareWidth +" "+ 0}, 3000, function(){
             balk1 .animate({path: "M"+square_X+" "+square_Y+" l "+ 0 +" "+ squareHeight +"  l "+ squareWidth +" "+ 0 +" l "+ 0 +" "+ (-(squareHeight))}, 3000, function(){
                balk1.animate({path: "M"+square_X+" "+square_Y+" l "+ 0 +" "+ squareHeight +"  l "+ squareWidth +" "+ 0 +" l "+ 0 +" "+ (-(squareHeight))+" "+ 0 +" z"}, 3000, function(){
                	
                	
                	
                	
                	
                    paper.rect(square_X, square_Y, squareWidth, squareHeight).attr({
                        
                        "stroke": "white",
                        "stroke-width": 1,
                        "fill":"white"
                       
                       }); 
                       
             //          obj.hide();
                       
                    balk1.attr({stroke: "black", 
                 									'stroke-opacity':0.4,
                										 'stroke-width':7,
                 									'glow':1, 
                								 "fill":"90-#B48D51 :20-#643D01:50-#B48D51 :80"})
                                
                       balk1.animate({
                       
                    //   transform:'t '+(WCJson.WC_width + WCJson.WC_Redius)+' 100'      
                         transform:'t 500 -20'
                       
                       }, 1000)
                	
                })
             });
         });
     }).insertBefore(window.setInterval("method_animasi_square_anticlockwise()", 30));
     //insertBefore(window.setInterval("method_animasi()", 20));
     
	
}


cut_square_anticlockwise();

var counter = 0;
var position;
function method_animasi_square_anticlockwise() {

 
     
                   


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
 
   