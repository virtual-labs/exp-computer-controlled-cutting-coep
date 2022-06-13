var DrawSquareObj = DrawSquareObj || {};

DrawSquareObj.Square = function()
      {
			XSizeFlag = false;
			YSizeFlag = false;
			SXQoriginFlag = false;
			SYQoriginFlag = false;
			SQoriginFlag = false;
	 		ShapeType = "Square";
	 		$("#symbolLibary").css("display","none");
	 		$(".BackSymbol").css("display","inline");
	 		var circleHtm = '';
	 		
	 		circleHtm+='<h2>Draw Square</h2>'

	 			+'<div class="row" id="EllipseSize">'
				+'<p>Square Size</p>'
				+'<div class="col-sm-12 col-md-12 col-xl-6">'
				+'<i>Width (mm)</i><input type="number"  min="0" max="'+WCJson.WC_width+'" class="form-control" id="SquareX" >'
				+'</div>'
				
				+'<div class="col-sm-12 col-md-12 col-xl-6">'
				+'<i>Height (mm)</i><input type="number" min="0"  max="'+WCJson.WC_height+'" class="form-control" id="SquareY" >'
				+'</div>'
				+'<div id="SizeErrorX" class="ErrorMsg"></div>'
				+'<div id="SizeErrorY" class="ErrorMsg"></div>'
				+'</div>'
			
//				+'<p>Corner Type</p>'
//				
//				+'<label class="col-sm-12 col-md-12 col-xl-12">'
//				+'<input type="radio" name="CornerType" id="CornerType" value="Square"  > Square '
//				+'</label>'
//				+'<label class="col-sm-12 col-md-12 col-xl-12">'
//				+'<input type="radio" name="CornerType" id="CornerType" value="Radiused external"  > Radiused external'
//				+'</label>'
//				+'<label class="col-sm-12 col-md-12 col-xl-12" style="margin-top: 5px;">'
//				+'<input type="radio" name="CornerType" id="CornerType" value="Radiused internal" > Radiused internal'
//				+'</label>'
				
				+'<div id="CornerTypeError" class="ErrorMsg"></div>'
				
//			+'<p>XY origin offset</p>'
			+'<label class="col-sm-12 col-md-12 col-xl-12">'
			+'<input type="radio" name="SquareOffsetOptions" id="SquareOffsetOptions" value="X-Y Anchor Postion"> X-Y Anchor Postion'
			+'</label>'
			+'<section id="SystemOffset">'
			+'<label class="col-sm-6 col-md-6 col-xl-6">'
			+'<input type="radio" name="SquareOffsetPosition" id="SquareOffsetPosition" value="Upperleft" class="left" disabled> '
			+'</label>'
			+'<label class="col-sm-6 col-md-6 col-xl-6">'
			+'<input type="radio" name="SquareOffsetPosition" id="SquareOffsetPosition" value="Upperright" class="right" disabled>'
			+'</label>'
			+'<center><label class="col-sm-12 col-md-12 col-xl-12" style="margin-top: 5px;">'
			+'<input type="radio" name="SquareOffsetPosition" id="SquareOffsetPosition" value="center" disabled> '
			+'</label></center>'
			+'<label class="col-sm-6 col-md-6 col-xl-6">'
			+'<input type="radio" name="SquareOffsetPosition" id="SquareOffsetPosition" value="bottomleft" class="bleft" disabled>'
			+'</label>'
			+'<label class="col-sm-6 col-md-6 col-xl-6">'
			+'<input type="radio" name="SquareOffsetPosition" id="SquareOffsetPosition" value="bottomright" class="bright" disabled> '
			+'</label>'
			+'</section>'
			+'<div id="AnchorError" class="ErrorMsg"></div>'
			
			+'<label class="col-sm-12 col-md-12 col-xl-12">'
			+'<input type="radio" name="SquareOffsetOptions" id="SquareOffsetOptions" value="Use X-Y Anchor Postion"> Use X-Y Anchor Postion'
			+'</label>'
//			+'<p>Use origin offset</p>'
			+'<div class="row" id="CustomOffset">'
			
			+'<div class="col-sm-12 col-md-12 col-xl-6">'
			+'<i>X</i><input type="number"   class="form-control" id="WC_SQOrigin_X" disabled>'
			+'</div>'
			
			+'<div class="col-sm-12 col-md-12 col-xl-6">'
			+'<i>Y</i>:<input type="number"  class="form-control" id="WC_SQOrigin_Y" disabled>'
			+'</div>'
			+'<div id="XAnchorError" class="ErrorMsg"></div>'
			+'<div id="YAnchorError" class="ErrorMsg"></div>'
			+'</div>'
			+'<center><button id="WCSquareDraw" class="btn btn-success"  >Submit</button></center>'
			
			$("#ShapeConfigModel").html('');
			$("#ShapeConfigModel").html(circleHtm);
			
			
			
			
			$("input:radio[name='SquareOffsetOptions']").blur(function(){
			if($('input[name="SquareOffsetPosition"]:checked').val() == "center")
				{
				$("#SquareX").attr({
		 		 	   "max" : (WCJson.WC_width / 2),
		 		 	   "min" : 0
		 		 	});	
				$("#SquareY").attr({
		 		 	   "max" : (WCJson.WC_height / 2),
		 		 	   "min" : 0
		 		 	});	
				}
			})
			
			$('input[name="SquareOffsetOptions"]').click(function(){
			
				if($('input[name="SquareOffsetOptions"]:checked').val() == "X-Y Anchor Postion")
					{
					$("#XAnchorError, #YAnchorError").html('');
					$("#WC_SQOrigin_X").val('').prop("disabled",true);
					$("#WC_SQOrigin_Y").val('').prop("disabled",true);
					$('input[name="SquareOffsetPosition"]').attr("disabled",false);
		//			$("#CustomOffset").fadeOut();
		//			$("#SystemOffset").fadeIn();
//					$("#SizeErrorX, #SizeErrorY").html('');
					SXQoriginFlag = false;
					SYQoriginFlag = false;
					}
				if($('input[name="SquareOffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
				{
					$("#AnchorError").html('');
					$("#WC_SQOrigin_X").prop("disabled",false);
					$("#WC_SQOrigin_Y").prop("disabled",false);
					$('input[name="SquareOffsetPosition"]').attr("disabled",true).prop( "checked", false );
		//			$("#SystemOffset").fadeOut();
		//			$("#CustomOffset").fadeIn();
//					$("#AnchorError").html('');
	 				SQoriginFlag = false;
				}
			
			});
			
//			$('input:radio[name="SquareOffsetPosition"]').click(function() {
//				$("#AnchorError").html('');
//			});
			
			$("#SquareX").blur(function(){
					if($('#SquareX').val() > 0 && $('#SquareX').val() <= (WCJson.WC_width )){
						$("#SizeErrorX, #XAnchorError, #AnchorError").html('');
						XSizeFlag = true;
		 		}else{
		 			$("#SizeErrorX").html('Please enter width between 0 to '+WCJson.WC_width);
		 			
		 			if($("input:radio[name='SquareOffsetOptions']").is(":checked") )
					{
		 				if($('input[name="SquareOffsetOptions"]:checked').val() == "X-Y Anchor Postion")
						{
						$("#AnchorError").html('Please check width & height ');
						$('input[name="SquareOffsetPosition"]').prop( "checked", false );
						
						}
		 				if($('input[name="SquareOffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
							{
							$("#XAnchorError").html('Please enter width ');
							$("#WC_SQOrigin_X").val('');
							
							}
		 				
					}
		 			
		 			XSizeFlag = false;
		 		}
			});
			
			$("#SquareY").blur(function(){
					if($('#SquareY').val() > 0 && $('#SquareY').val() <= (WCJson.WC_height )){
						$("#SizeErrorY, #YAnchorError, #AnchorError").html('');
						YSizeFlag = true;
		 		}else{
		 			$("#SizeErrorY").html('Please enter height between 0 to '+WCJson.WC_height);
		 			if($("input:radio[name='SquareOffsetOptions']").is(":checked") )
					{
		 				if($('input[name="SquareOffsetOptions"]:checked').val() == "X-Y Anchor Postion")
						{
		 					$("#AnchorError").html('Please check width & height ');
		 					$('input[name="SquareOffsetPosition"]').prop( "checked", false );
						}
		 				if($('input[name="SquareOffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
							{
							$("#YAnchorError").html('Please enter height ');
							$("#WC_SQOrigin_Y").val('');
							}
					}
		 			
		 			YSizeFlag = false;
		 		}
			});
			
			$("#WC_SQOrigin_X").blur(function(){
				if($('#SquareX').val() != 0)
					{
					$("#XAnchorError").html('');
			Xdif = parseInt(WCJson.WC_width - parseInt($('#SquareX').val()))
			
		 		 		if(Xdif < 0)
			 				 {
		 		 			$("#XAnchorError").html('Please check width' );
			 				 }
			 			 else{
			 				 
			 			 	
					 		if(parseInt($('#WC_SQOrigin_X').val()) >= 0 && parseInt($('#WC_SQOrigin_X').val()) <= Xdif)
					 				 {
					 				$("#XAnchorError").html('');
					 				SXQoriginFlag = true;
					 				 }
					 		else{
					 				
					 				 $("#XAnchorError").html('Please enter X  between 0 to '+Xdif+'' );
				//					 $(".ajs-header").css("background-color","#ce6058");
					 				SXQoriginFlag = false;
					 			}
			 			 }
					}else{
						$("#XAnchorError").html('Please enter width' );
					}
			});
			$("#WC_SQOrigin_Y").blur(function(){
				if($('#SquareY').val() != 0)
				{
					$("#YAnchorError").html('');
				 Ydif = parseInt(WCJson.WC_height - parseInt($('#SquareY').val()))
		 		 if(Ydif < 0)
			 				 {
		 			 			$("#YAnchorError").html('Please check height' );
			 				 }
			 			 else{
					 		if(parseInt($('#WC_SQOrigin_Y').val()) >= 0 && parseInt($('#WC_SQOrigin_Y').val()) <= Ydif)
								 {
								$("#YAnchorError").html('');
								SYQoriginFlag = true;
								 }
							else{
								
								 $("#YAnchorError").html('Please enter Y  between 0 to '+Ydif+'' );
				//				 $(".ajs-header").css("background-color","#ce6058");
								 SYQoriginFlag = false;
							}
			 			 }
				}else{
					$("#YAnchorError").html('Please enter height' );
				}
			});
			
	 	$("#WCSquareDraw").click(function(){
	 		
	 		
	 		if($('#SquareX').val() == 0 && $('#SquareY').val() == 0 && !$("input:radio[name='SquareOffsetOptions']").is(":checked"))
				{
				alertify.alert('Warning!!','Please select/fill all the field' );
			 $(".ajs-header").css("background-color","#ce6058");
				}
				else {
						if($('#SquareX').val() > 0 && $('#SquareX').val() <= (WCJson.WC_width )){
							$("#SizeErrorX").html('');
							XSizeFlag = true;
							WCJson.SquareX = parseInt($('#SquareX').val());
			 		}else{
			 			$("#SizeErrorX").html('Please enter width between 0 to '+WCJson.WC_width);
			 			XSizeFlag = false;
			 		}
						if($('#SquareY').val() > 0 && $('#SquareY').val() <= (WCJson.WC_height )){
							$("#SizeErrorY").html('');
							YSizeFlag = true;
							WCJson.SquareY = parseInt($('#SquareY').val());
			 		}else{
			 			$("#SizeErrorY").html('Please enter height between 0 to '+WCJson.WC_height);
			 			YSizeFlag = false;
			 		}
						if($('#SquareX').val() != 0 && $('#SquareY').val() != 0 && !$("input:radio[name='SquareOffsetOptions']").is(":checked"))
						{
							alertify.alert('Warning!!','Please select anchor point' );
							 $(".ajs-header").css("background-color","#ce6058");
						}
				}
	 		
	 		if($("input:radio[name='SquareOffsetOptions']").is(":checked") )
			{
				if($('input[name="SquareOffsetOptions"]:checked').val() == "X-Y Anchor Postion")
	 			{   $("#XAnchorError, #YAnchorError").html('');
	 			
	 			if($('#SquareX').val() != 0 && $('#SquareY').val() != 0){
			 		$("#AnchorError").html('');
			 			if($('input[name="SquareOffsetPosition"]:checked').val() == "Upperleft")
			 				{
			 				WCJson.WC_Origin_X = 0;
			 				WCJson.WC_Origin_Y = 0;
			 				$("#AnchorError").html('');
			 				SQoriginFlag = true;
			 				}
			 			else if($('input[name="SquareOffsetPosition"]:checked').val() == "Upperright")
		 					{
			 				WCJson.WC_Origin_X = WCJson.WC_width - parseInt($('#SquareX').val());
			 				WCJson.WC_Origin_Y = 0 ;
			 				$("#AnchorError").html('');
			 				SQoriginFlag = true;
		 					}
			 			else if($('input[name="SquareOffsetPosition"]:checked').val() == "center")
		 					{
			 				
			 					if(parseInt($('#SquareX').val()) <= (WCJson.WC_width / 2))
				 					{
			 						$("#SizeErrorX").html('');
				 					WCJson.WC_Origin_X = (WCJson.WC_width / 2) - (parseInt($('#SquareX').val() / 2));
				 					XSizeFlag = true;
				 					}
			 					else 
				 					{
				 						$("#SizeErrorX").html('Please enter width  between 0 to '+(WCJson.WC_width / 2) );
				 						XSizeFlag = false;
				 					}
			 				
			 					if(parseInt($('#SquareY').val()) <= (WCJson.WC_height / 2))
			 					{
			 						$("#SizeErrorY").html('');
			 					WCJson.WC_Origin_Y = (WCJson.WC_height / 2) - (parseInt($('#SquareY').val() / 2));
			 					YSizeFlag = true;
			 					}
		 					else 
			 					{
			 						$("#SizeErrorY").html('Please enter height  between 0 to '+(WCJson.WC_height / 2) );
			 						YSizeFlag = false;
			 					}
			 				
			 				$("#AnchorError").html('');
			 				SQoriginFlag = true;
		 					}
			 			else if($('input[name="SquareOffsetPosition"]:checked').val() == "bottomleft")
		 					{
			 				WCJson.WC_Origin_X = 0 ;
			 				WCJson.WC_Origin_Y = WCJson.WC_height - parseInt($('#SquareY').val());;
			 				$("#AnchorError").html('');
			 				SQoriginFlag = true;
		 					}
			 			else if($('input[name="SquareOffsetPosition"]:checked').val() == "bottomright")
	 						{
			 				WCJson.WC_Origin_X = WCJson.WC_width - parseInt($('#SquareX').val());
			 				WCJson.WC_Origin_Y = WCJson.WC_height - parseInt($('#SquareY').val());
			 				$("#AnchorError").html('');
			 				SQoriginFlag = true;
	 						}
			 			else{
			 				 $("#AnchorError").html('Please select Anchor point position' );
//							 $(".ajs-header").css("background-color","#ce6058");
			 				SQoriginFlag = false;
			 			}
	 			}else
	 				{
	 				$("#AnchorError").html('Please enter width & height' );
					 
	 				}
	 			}
				console.log(WCJson)
				
				if($('input[name="SquareOffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
	 			{  $("#AnchorError").html('');
			 			
	 			if($('#SquareX').val() != 0)
				{
				$("#XAnchorError").html('');
				Xdif = parseInt(WCJson.WC_width - parseInt($('#SquareX').val()))
		
	 		 		if(Xdif < 0)
		 				 {
	 		 			$("#XAnchorError").html('Please check width' );
		 				 }
		 			 else{
		 				 
		 			 	
				 		if(parseInt($('#WC_SQOrigin_X').val()) >= 0 && parseInt($('#WC_SQOrigin_X').val()) <= Xdif)
				 				 {
				 				$("#XAnchorError").html('');
				 				SXQoriginFlag = true;
				 				WCJson.WC_Origin_X = parseInt($('#WC_SQOrigin_X').val());
				 				 }
				 		else{
				 				
				 				 $("#XAnchorError").html('Please enter X  between 0 to '+Xdif+'' );
			//					 $(".ajs-header").css("background-color","#ce6058");
				 				SXQoriginFlag = false;
				 			}
		 			 }
				}else{
					$("#XAnchorError").html('Please enter width' );
				}
	 			
	 			if($('#SquareY').val() != 0)
				{
					$("#YAnchorError").html('');
				 Ydif = parseInt(WCJson.WC_height - parseInt($('#SquareY').val()))
		 		 if(Ydif < 0)
			 				 {
		 			 			$("#YAnchorError").html('Please check height' );
			 				 }
			 			 else{
					 		if(parseInt($('#WC_SQOrigin_Y').val()) >= 0 && parseInt($('#WC_SQOrigin_Y').val()) <= Ydif)
								 {
								$("#YAnchorError").html('');
								SYQoriginFlag = true;
								WCJson.WC_Origin_Y = parseInt($('#WC_SQOrigin_Y').val());
								 }
							else{
								
								 $("#YAnchorError").html('Please enter Y  between 0 to '+Ydif+'' );
				//				 $(".ajs-header").css("background-color","#ce6058");
								 SYQoriginFlag = false;
							}
			 			 }
				}else{
					$("#YAnchorError").html('Please enter height' );
				}
	 			
	 			}
			
			}
//	 		else{
//				alertify.alert('Warning!!','Please select anchor point' );
//				 $(".ajs-header").css("background-color","#ce6058");
//			}
	 		
	 		if((XSizeFlag == true && YSizeFlag == true && SQoriginFlag == true) || (XSizeFlag == true && YSizeFlag == true  && SXQoriginFlag == true && SYQoriginFlag == true))
	 			{
	 			alertify.confirm('Confirmation!!', 'Are you sure to submit the details to draw Square ? ', function(){
		    		  WoodCuttingObj.CuttingWoodconfic(WCJson)
		    		  
		    		  $("#SquareX, #SquareY, input[name='SquareOffsetOptions'], input[name='SquareOffsetPosition'], #WC_SQOrigin_X, #WC_SQOrigin_Y, #WCSquareDraw").prop("disabled",true);
					}, function(){
						$("#SquareX, #SquareY, input[name='SquareOffsetOptions'], input[name='SquareOffsetPosition'], #WC_SQOrigin_X, #WC_SQOrigin_Y").prop("disabled",false);
					});
		    	  $(".ajs-header").css("background-color","#17a2b8");
	 			}
	 		
	 		
	 	})
	 	

	 	
	 	
      }