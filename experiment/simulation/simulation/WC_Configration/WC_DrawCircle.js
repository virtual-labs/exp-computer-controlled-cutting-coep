var DrawCircleObj = DrawCircleObj || {};


DrawCircleObj.Circle = function() {

		ShapeType = "Circle";
		$("#symbolLibary").css("display","none");
		$(".BackSymbol").css("display","inline");
		var circleHtm = '';
		
		circleHtm+='<h2>Draw Circle</h2><label class="col-sm-12 col-md-12 col-xl-6">'
	+'<input type="radio" name="CircleOptions" value="Redius" id="WC_Redius"> Redius '
	+'</label>'
	+'<label class="col-sm-12 col-md-12 col-xl-6">'
	+'<input type="radio" name="CircleOptions" value="Diameter" id="WC_Diameter"> Diameter '
	+'</label>'
	+'<div class="col-sm-12 col-md-12 col-xl-12">'
	+'<input type="number" min="'+RediusMin+'" max="'+WCJson.WC_height/2+'" class="form-control col-sm-9 col-md-9 col-xl-9" id="WC_RediusVal"  disabled> <b class="leftAbsulate">(mm)</b>'
	+'<div id="RediusError" class="ErrorMsg"></div>'
	+'</div><br/>'
//	+'<p>XY origin offset</p>'
	+'<label class="col-sm-12 col-md-12 col-xl-12">'
	+'<input type="radio" name="OffsetOptions" id="Diameter" value="XY origin offset"> XY origin offset'
	+'</label>'
	+'<section id="SystemOffset">'
	+'<label class="col-sm-6 col-md-6 col-xl-6">'
	+'<input type="radio" name="Originoptions" id="XYoriginoffset" value="Upperleft" class="left" disabled> '
	+'</label>'
	+'<label class="col-sm-6 col-md-6 col-xl-6">'
	+'<input type="radio" name="Originoptions" id="XYoriginoffset" value="Upperright" class="right" disabled>'
	+'</label>'
	+'<center><label class="col-sm-12 col-md-12 col-xl-12" style="margin-top: 5px;">'
	+'<input type="radio" name="Originoptions" id="XYoriginoffset" value="center" disabled> '
	+'</label></center>'
	+'<label class="col-sm-6 col-md-6 col-xl-6">'
	+'<input type="radio" name="Originoptions" id="XYoriginoffset" value="bottomleft" class="bleft" disabled>'
	+'</label>'
	+'<label class="col-sm-6 col-md-6 col-xl-6">'
	+'<input type="radio" name="Originoptions" id="XYoriginoffset" value="bottomright" class="bright" disabled> '
	+'</label>'
	+'</section>'
	+'<div id="OriginError" class="ErrorMsg"></div>'
	
	+'<label class="col-sm-12 col-md-12 col-xl-12">'
	+'<input type="radio" name="OffsetOptions" id="Diameter" value="Use origin offset"> Use origin offset'
	+'</label>'
//	+'<p>Use origin offset</p>'
	+'<div class="row" id="CustomOffset">'
	
	+'<div class="col-sm-12 col-md-12 col-xl-6">'
	+'<i>X</i><input type="number"   class="form-control" id="WC_Origin_X" disabled>'
	+'</div>'
	
	+'<div class="col-sm-12 col-md-12 col-xl-6">'
	+'<i>Y</i>:<input type="number"  class="form-control" id="WC_Origin_Y" disabled>'
	+'</div>'
	+'<div id="XOriginError" class="ErrorMsg"></div>'
	+'<div id="YOriginError" class="ErrorMsg"></div>'
	+'</div>'
	+'<center><button id="WCLevelTwo" class="btn btn-success"  >Submit</button></center>'
	
	$("#ShapeConfigModel").html('');
	$("#ShapeConfigModel").html(circleHtm);
//		$(".modal-body").html(circleHtm);
//		$('#ShapeConfigModel').modal('toggle');
		
//		 LevelTwoJson = {}
	
	
		
	$('input[name="CircleOptions"]').click(function(){
		
		$("#WC_RediusVal").prop("disabled",false);
	})
	
		$('input[name="OffsetOptions"]').click(function(){
			
		if($('input[name="OffsetOptions"]:checked').val() == "XY origin offset")
			{
			
			$("#WC_Origin_X").val('').prop("disabled",true);
			$("#WC_Origin_Y").val('').prop("disabled",true);
			$('input[name="Originoptions"]').attr("disabled",false);
//			$("#CustomOffset").fadeOut();
//			$("#SystemOffset").fadeIn();
			CircleXFlag = false;
			CircleYFlag = false;
			$("#XOriginError, #YOriginError").html('');
			
			
			}
		if($('input[name="OffsetOptions"]:checked').val() == "Use origin offset")
		{
			$("#WC_Origin_X").prop("disabled",false);
			$("#WC_Origin_Y").prop("disabled",false);
			$('input[name="Originoptions"]').attr("disabled",true).prop( "checked", false );
//			$("#SystemOffset").fadeOut();
//			$("#CustomOffset").fadeIn();
			originFlag = false;
			$("#OriginError").html('');
		}
		
//		$('#ShapeConfigModel').modal('show');
		});
	
	$("#WC_Origin_X").blur(function()
	 		{
		
		if($('input[name="CircleOptions"]:checked').val() == "Redius")
 		{
		if($('#WC_RediusVal').val() != 0)
			{ $("#XOriginError").html('');
		if(parseInt($('#WC_Origin_X').val()) >= parseInt($('#WC_RediusVal').val()) && parseInt($('#WC_Origin_X').val()) <= parseInt((WCJson.WC_width - parseInt($('#WC_RediusVal').val()))))
			{
				
				 $("#XOriginError").html('');
				 CircleXFlag = true;
			}
			else{
				
				 $("#XOriginError").html('Please enter X origin between '+parseInt($('#WC_RediusVal').val())+' to '+(WCJson.WC_width - parseInt($('#WC_RediusVal').val()))+'' );
//			 $(".ajs-header").css("background-color","#ce6058");
				 CircleXFlag = false;
			}
			}else 
				{
				 $("#XOriginError").html('Please enter redius for X origin');
				}
 		}
		if($('input[name="CircleOptions"]:checked').val() == "Diameter")
 		{
		if($('#WC_RediusVal').val() != 0)
			{ $("#XOriginError").html('');
		if(parseInt($('#WC_Origin_X').val()) >= parseInt($('#WC_RediusVal').val())/2 && parseInt($('#WC_Origin_X').val()) <= parseInt((WCJson.WC_width - parseInt($('#WC_RediusVal').val())/2)))
			{
				
				 $("#XOriginError").html('');
				 CircleXFlag = true;
			}
			else{
				
				 $("#XOriginError").html('Please enter X origin between '+parseInt($('#WC_RediusVal').val())/2+' to '+(WCJson.WC_width - parseInt($('#WC_RediusVal').val())/2)+'' );
//			 $(".ajs-header").css("background-color","#ce6058");
				 CircleXFlag = false;
			}
			}else 
				{
				 $("#XOriginError").html('Please enter redius for X origin');
				}
 		}
	 		});
	$("#WC_Origin_Y").blur(function()
	 		{
		
		if($('input[name="CircleOptions"]:checked').val() == "Redius")
 		{
		if($('#WC_RediusVal').val() != 0)
		{ $("#YOriginError").html('');
		if(parseInt($('#WC_Origin_Y').val()) >= parseInt($('#WC_RediusVal').val()) && parseInt($('#WC_Origin_Y').val()) <= parseInt((WCJson.WC_height - Redius)))
			{
			WCJson.WC_Origin_Y =parseInt($('#WC_Origin_Y').val());
				$("#YOriginError").html('');
				CircleYFlag = true;
			}
			else{
				
				$("#YOriginError").html('Please enter Y origin between '+parseInt($('#WC_RediusVal').val())+' to '+(WCJson.WC_height - parseInt($('#WC_RediusVal').val()))+'' );
//			 $(".ajs-header").css("background-color","#ce6058");
				CircleYFlag = false;
			}	
		}
		else 
		{
		 $("#YOriginError").html('Please enter redius for Y origin');
		}
 		}
		if($('input[name="CircleOptions"]:checked').val() == "Diameter")
 		{
		if($('#WC_RediusVal').val() != 0)
		{ $("#YOriginError").html('');
		if(parseInt($('#WC_Origin_Y').val()) >= parseInt($('#WC_RediusVal').val())/2  && parseInt($('#WC_Origin_Y').val()) <= parseInt((WCJson.WC_height - parseInt($('#WC_RediusVal').val())/2)))
			{
			WCJson.WC_Origin_Y =parseInt($('#WC_Origin_Y').val());
				$("#YOriginError").html('');
				CircleYFlag = true;
			}
			else{
				
				$("#YOriginError").html('Please enter Y origin between '+parseInt($('#WC_RediusVal').val())/2+' to '+(WCJson.WC_height - parseInt($('#WC_RediusVal').val())/2)+'' );
//			 $(".ajs-header").css("background-color","#ce6058");
				CircleYFlag = false;
			}	
		}
		else 
		{
		 $("#YOriginError").html('Please enter redius for Y origin');
		}
 		}
	 		});
	
	
//	$('input:radio[name="Originoptions"]').click(function() {
//		$("#OriginError").html('');
//	});
	
	$('input:radio[name="CircleOptions"]').click(function() {
		$("#OriginError, #XOriginError, #YOriginError").html('');
		Redius =parseInt( $('#WC_RediusVal').val());
		if(Redius != 0)
			{
			if($('input[name="CircleOptions"]:checked').val() == "Redius")
	 		{
	 		Redius =parseInt( $('#WC_RediusVal').val());
	 		}
	 		
	 		else if($('input[name="CircleOptions"]:checked').val() == "Diameter")
	 		{
	 			Redius = parseInt($('#WC_RediusVal').val()/2);
	 		}
 			X_CorMin =  Redius;
	 		X_CorMax =  WCJson.WC_width - Redius;
	 		Y_CorMin =  Redius;
	 		Y_CorMax =  WCJson.WC_height - Redius;
	 		
 			$("#WC_Origin_X").attr({
 		 	   "max" : X_CorMax,
 		 	   "min" : X_CorMin
 		 	});	
 			$("#WC_Origin_Y").attr({
	 		 	   "max" : Y_CorMax,
	 		 	   "min" : Y_CorMin
	 		 });	
			}else
				{
				
				}
	});
		
	$("#WC_RediusVal").blur(function()
	 		{
	 			if($('input[name="CircleOptions"]:checked').val() == "Redius")
		 		{
		 		Redius =parseInt( $('#WC_RediusVal').val());
		 		}
		 		
		 		else if($('input[name="CircleOptions"]:checked').val() == "Diameter")
		 		{
		 			Redius = parseInt($('#WC_RediusVal').val()/2);
		 		}
	 			X_CorMin =  Redius;
		 		X_CorMax =  WCJson.WC_width - Redius;
		 		Y_CorMin =  Redius;
		 		Y_CorMax =  WCJson.WC_height - Redius;
		 		
	 			$("#WC_Origin_X").attr({
	 		 	   "max" : X_CorMax,
	 		 	   "min" : X_CorMin
	 		 	});	
	 			$("#WC_Origin_Y").attr({
		 		 	   "max" : Y_CorMax,
		 		 	   "min" : Y_CorMin
		 		 });	
	 			

		 		if($('#WC_RediusVal').val() >= RediusMin && $('#WC_RediusVal').val() <= (WCJson.WC_height/2))
	 			{
	 				$("#RediusError, #OriginError, #XOriginError, #YOriginError").html('');
	 				
	 				RediusFlag = true;
	 			}
	 			else{
	 				
	 				 $("#RediusError").html('Please enter Redius between '+RediusMin+' to '+(WCJson.WC_height/2)+'' );
	 				RediusFlag = false;
	 				if($("input:radio[name='OffsetOptions']").is(":checked") )
					{
		 				if($('input[name="OffsetOptions"]:checked').val() == "XY origin offset")
						{
		 					$("#OriginError").html('Please enter redius for X - Y origin ');
		 					$('input[name="Originoptions"]').prop( "checked", false );
						}
		 				if($('input[name="OffsetOptions"]:checked').val() == "Use origin offset")
							{
		 					$("#XOriginError").html('Please enter redius for X origin');
		 					$("#YOriginError").html('Please enter redius for Y origin');
							$("#WC_Origin_X").val('');
							$("#WC_Origin_Y").val('');
							}
					}
	 			}
	 		});
	
	$("#WCLevelTwo").click(function(){
		
	 		if($('input[name="CircleOptions"]:checked').val() == "Redius")
	 		{
	 			if($('#WC_RediusVal').val() >= RediusMin && $('#WC_RediusVal').val() <= (WCJson.WC_height/2))
	 			{
	 				
	 				WCJson.WC_Redius =parseInt( $('#WC_RediusVal').val());
	 				$("#RediusError").html('');
	 				RediusFlag = true;
	 			}
	 			else{
	 				
	 				 $("#RediusError").html('Please enter Redius between '+RediusMin+' to '+(WCJson.WC_height/2)+'' );
	 				RediusFlag = false;
//					 $(".ajs-header").css("background-color","#ce6058");
	 			}
	 				
	 		}
	 		
	 		else if($('input[name="CircleOptions"]:checked').val() == "Diameter")
	 		{
	 			if($('#WC_RediusVal').val() >= RediusMin && $('#WC_RediusVal').val() <= (WCJson.WC_height/2))
	 			{
	 				WCJson.WC_Redius =parseInt( $('#WC_RediusVal').val()/2);
	 				$("#RediusError").html('');
	 				RediusFlag = true;
	 			}
	 			else{
	 				
	 				$("#RediusError").html('Please enter Redius between '+RediusMin+' to '+(WCJson.WC_height/2)+'' );
	 				RediusFlag = false;
	 			}
	 			
	 		}
		 	
		 	if($('input[name="OffsetOptions"]:checked').val() == "XY origin offset")
 			{
		 		$("#XOriginError, #YOriginError").html('');
//		 		LevelTwoJson.XYoriginoffset 
		 		if($('#WC_RediusVal').val() != 0)
				{ $("#OriginError").html('');
		 			if($('input[name="Originoptions"]:checked').val() == "Upperleft")
		 				{
		 				WCJson.WC_Origin_X = WCJson.WC_Redius ;
		 				WCJson.WC_Origin_Y = WCJson.WC_Redius;
						$("#OriginError").html('');
		 				originFlag = true;
		 				}
		 			else if($('input[name="Originoptions"]:checked').val() == "Upperright")
	 					{
		 				WCJson.WC_Origin_X = WCJson.WC_width - WCJson.WC_Redius;
		 				WCJson.WC_Origin_Y = WCJson.WC_Redius ;
						$("#OriginError").html('');
		 				originFlag = true;
	 					}
		 			else if($('input[name="Originoptions"]:checked').val() == "center")
	 					{
		 				WCJson.WC_Origin_X = WCJson.WC_width/2;
		 				WCJson.WC_Origin_Y = WCJson.WC_height/2;
                        $("#OriginError").html('');
		 				originFlag = true;
	 					}
		 			else if($('input[name="Originoptions"]:checked').val() == "bottomleft")
	 					{
		 				WCJson.WC_Origin_X = WCJson.WC_Redius;
		 				WCJson.WC_Origin_Y = WCJson.WC_height - WCJson.WC_Redius;
						$("#OriginError").html('');
		 				originFlag = true;
	 					}
		 			else if($('input[name="Originoptions"]:checked').val() == "bottomright")
 						{
		 				WCJson.WC_Origin_X = WCJson.WC_width - WCJson.WC_Redius;
		 				WCJson.WC_Origin_Y = WCJson.WC_height - WCJson.WC_Redius;
						$("#OriginError").html('');
		 				originFlag = true;
 						}
		 			else{
		 				 $("#OriginError").html('Please select origin position' );
//						 $(".ajs-header").css("background-color","#ce6058");
		 				originFlag = false;
		 			}
				}else 
		 			{
		 			 $("#OriginError").html('Please enter redius for X - Y origin');
		 			}
 			}
		 	
	 		if($('input[name="OffsetOptions"]:checked').val() == "Use origin offset")
 			{
	 			
	 			$("#OriginError").html('');
	 			
	 			if($('input[name="CircleOptions"]:checked').val() == "Redius")
		 		{
	 			if($('#WC_RediusVal').val() != 0)
	 				{ $("#XOriginError").html('');
	 			if(parseInt($('#WC_Origin_X').val()) >= parseInt($('#WC_RediusVal').val()) && parseInt($('#WC_Origin_X').val()) <= parseInt((WCJson.WC_width - Redius)))
	 				{
	 					
	 					 $("#XOriginError").html('');
	 					WCJson.WC_Origin_X =parseInt($('#WC_Origin_X').val());
	 					 CircleXFlag = true;
	 				}
	 				else{
	 					
	 					 $("#XOriginError").html('Please enter X origin between '+parseInt($('#WC_RediusVal').val())+' to '+(WCJson.WC_width - Redius)+'' );
//	 				 $(".ajs-header").css("background-color","#ce6058");
	 					 CircleXFlag = false;
	 				}
	 				}else 
	 					{
	 					 $("#XOriginError").html('Please enter redius for X origin');
	 					}
	 		 		
	 			
	 			if($('#WC_RediusVal').val() != 0)
				{ $("#YOriginError").html('');
	 			if(parseInt($('#WC_Origin_Y').val()) >= parseInt(WCJson.WC_Redius) && parseInt($('#WC_Origin_Y').val()) <= parseInt((WCJson.WC_height - Redius)))
	 			{
	 			WCJson.WC_Origin_Y =parseInt($('#WC_Origin_Y').val());
	 				$("#YOriginError").html('');
	 				CircleYFlag = true;
	 			}
	 			else{
	 				
	 				$("#YOriginError").html('Please enter Y origin between '+parseInt(WCJson.WC_Redius)+' to '+(WCJson.WC_height - Redius)+'' );
//					 $(".ajs-header").css("background-color","#ce6058");
	 				CircleYFlag = false;
	 			}	
				}
	 			else 
	 			{
	 			 $("#YOriginError").html('Please enter redius for Y origin');
	 			}	
		 		}
	 			if($('input[name="CircleOptions"]:checked').val() == "Diameter")
		 		{
	 			if($('#WC_RediusVal').val() != 0)
	 				{ $("#XOriginError").html('');
	 			if(parseInt($('#WC_Origin_X').val()) >= parseInt($('#WC_RediusVal').val())/2 && parseInt($('#WC_Origin_X').val()) <= parseInt((WCJson.WC_width - parseInt($('#WC_RediusVal').val())/2)))
	 				{
	 					
	 					 $("#XOriginError").html('');
	 					WCJson.WC_Origin_X = parseInt($('#WC_Origin_X').val());
	 					 CircleXFlag = true;
	 				}
	 				else{
	 					
	 					 $("#XOriginError").html('Please enter X origin between '+parseInt($('#WC_RediusVal').val())/2+' to '+(WCJson.WC_width - parseInt($('#WC_RediusVal').val())/2)+'' );
//	 				 $(".ajs-header").css("background-color","#ce6058");
	 					 CircleXFlag = false;
	 				}
	 				}else 
	 					{
	 					 $("#XOriginError").html('Please enter redius for X origin');
	 					}
	 		 		
	 			
	 			if($('#WC_RediusVal').val() != 0)
				{ $("#YOriginError").html('');
	 			if(parseInt($('#WC_Origin_Y').val()) >= parseInt($('#WC_RediusVal').val())/2  && parseInt($('#WC_Origin_Y').val()) <= parseInt((WCJson.WC_height - parseInt($('#WC_RediusVal').val())/2)))
	 			{
	 			WCJson.WC_Origin_Y = parseInt($('#WC_Origin_Y').val());
	 				$("#YOriginError").html('');
	 				CircleYFlag = true;
	 			}
	 			else{
	 				
	 				$("#YOriginError").html('Please enter Y origin between '+parseInt($('#WC_RediusVal').val())/2+' to '+(WCJson.WC_height - parseInt($('#WC_RediusVal').val())/2)+'' );
//					 $(".ajs-header").css("background-color","#ce6058");
	 				CircleYFlag = false;
	 			}	
				}
	 			else 
	 			{
	 			 $("#YOriginError").html('Please enter redius for Y origin');
	 			}	
		 		}
	 			
	 			
 			}
		console.log(WCJson);
		
		
		if((RediusFlag == true && originFlag == true) || (RediusFlag == true && CircleXFlag == true && CircleYFlag ==  true) )
			{
			 alertify.confirm('Confirmation!!', 'Are you sure to submit the details to draw Circle ? ', function(){
	    		  WoodCuttingObj.CuttingWoodconfic(WCJson)
	    		  
	    		  $("#WC_RediusVal, input[name='CircleOptions'], input[name='Originoptions'], input[name='OffsetOptions'], #WC_PolyOrigin_X, #WC_PolyOrigin_Y, #WCLevelTwo").prop("disabled",true);
				}, function(){
					$("#WC_RediusVal, input[name='CircleOptions'], input[name='Originoptions'], input[name='OffsetOptions'], #WC_PolyOrigin_X, #WC_PolyOrigin_Y").prop("disabled",false);
				});
	    	  $(".ajs-header").css("background-color","#17a2b8");
	    	  
			}
		else
			{
			if(!$("input:radio[name='CircleOptions']").is(":checked") && !$("input:radio[name='OffsetOptions']").is(":checked"))
				{
				alertify.alert('Warning!!','Please select/fill all the field' );
			 $(".ajs-header").css("background-color","#ce6058");
				}
			else if(!$("input:radio[name='OffsetOptions']").is(":checked") && $('#WC_RediusVal').val() > 0)
			{
				alertify.alert('Warning!!','Please select Offset Options' );
			 $(".ajs-header").css("background-color","#ce6058");
			}
			
			
			}
		
	})
	
	
	
}