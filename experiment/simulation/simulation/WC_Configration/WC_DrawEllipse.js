var DrawEllipseObj = DrawEllipseObj || {};

DrawEllipseObj.Ellipse = function() {

		
		ShapeType = "Ellipse";
		$("#symbolLibary").css("display","none");
		$(".BackSymbol").css("display","inline");
		var circleHtm = '';
		
		circleHtm+='<h2>Draw Ellipse</h2>'
//			+'<label class="col-sm-6 col-md-6 col-xl-6">'
//	+'<input type="radio" name="CircleOptions" value="Redius" id="WC_Redius"> Redius '
//	+'</label>'
//	+'<label class="col-sm-6 col-md-6 col-xl-6">'
//	+'<input type="radio" name="CircleOptions" value="Diameter" id="WC_Diameter"> Diameter '
//	+'</label>'
//	+'<div class="col-sm-12 col-md-12 col-xl-12">'
//	+'<input type="number" min="'+RediusMin+'" max="'+WCJson.WC_height/2+'" class="form-control col-sm-9 col-md-9 col-xl-9" id="WC_RediusVal"  disabled> <b class="leftAbsulate">(inches)</b>'
//	+'<div id="RediusError" class="ErrorMsg"></div>'
//	+'</div><br/>'
			+'<div class="row" id="EllipseSize">'
		+'<p>Size</p>'
		+'<div class="col-sm-12 col-md-12 col-xl-6">'
		+'<i>Width (mm)</i><input type="number"  min="'+RediusMin+'" max="'+(WCJson.WC_width - RediusMin)+'" class="form-control" id="EllipseX" >'
		+'</div>'
		
		+'<div class="col-sm-12 col-md-12 col-xl-6">'
		+'<i>Height (mm)</i><input type="number" min="'+RediusMin+'"  max="'+(WCJson.WC_height - RediusMin)+'" class="form-control" id="EllipseY" >'
		+'</div>'
		+'<div id="SizeErrorX" class="ErrorMsg"></div>'
		+'<div id="SizeErrorY" class="ErrorMsg"></div>'
		+'</div>'
//	+'<p>XY origin offset</p>'
	+'<label class="col-sm-12 col-md-12 col-xl-12">'
	+'<input type="radio" name="OffsetOptions" id="Diameter" value="X-Y Anchor Postion">X-Y Anchor Postion'
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
	+'<div id="AnchorError" class="ErrorMsg"></div>'
	
	+'<label class="col-sm-12 col-md-12 col-xl-12">'
	+'<input type="radio" name="OffsetOptions" id="Diameter" value="Use X-Y Anchor Postion"> Use X-Y Anchor Postion'
	+'</label>'
//	+'<p>Use origin offset</p>'
	+'<div class="row" id="CustomOffset">'
	
	+'<div class="col-sm-12 col-md-12 col-xl-6">'
	+'<i>X</i><input type="number"   class="form-control" id="WC_Origin_X" disabled>'
	+'</div>'
	
	+'<div class="col-sm-12 col-md-12 col-xl-6">'
	+'<i>Y</i>:<input type="number"  class="form-control" id="WC_Origin_Y" disabled>'
	+'</div>'
	+'<div id="XAnchorError" class="ErrorMsg"></div>'
	+'<div id="YAnchorError" class="ErrorMsg"></div>'
	+'</div>'
	+'<center><button id="WCEllipseDraw" class="btn btn-success"  >Submit</button></center>'
	
	$("#ShapeConfigModel").html('');
	$("#ShapeConfigModel").html(circleHtm);
//		$(".modal-body").html(circleHtm);
//		$('#ShapeConfigModel').modal('toggle');
		
//		 LevelTwoJson = {}
	
	
		
//	$('input[name="CircleOptions"]').click(function(){
//		
//		$("#WC_RediusVal").prop("disabled",false);
//	})
	
		$('input[name="OffsetOptions"]').click(function(){
			
		if($('input[name="OffsetOptions"]:checked').val() == "X-Y Anchor Postion")
			{
			$("#XAnchorError, #YAnchorError").html('');
			$("#WC_Origin_X").val('').prop("disabled",true);
			$("#WC_Origin_Y").val('').prop("disabled",true);
			$('input[name="Originoptions"]').attr("disabled",false);
//			$("#CustomOffset").fadeOut();
//			$("#SystemOffset").fadeIn();
			XoriginFlag = false;
			YoriginFlag = false;
			
			}
		if($('input[name="OffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
		{
			$("#AnchorError").html('');
			$("#WC_Origin_X").prop("disabled",false);
			$("#WC_Origin_Y").prop("disabled",false);
			$('input[name="Originoptions"]').attr("disabled",true).prop( "checked", false );
//			$("#SystemOffset").fadeOut();
//			$("#CustomOffset").fadeIn();
			originFlag = false;
		}
		
//		$('#ShapeConfigModel').modal('show');
		});
		 
	$("#EllipseX").blur(function()
	 		{
	 			
		 		Redius = parseInt($('#EllipseX').val())
		 		
		 		
	 			X_CorMin =  Redius;
		 		X_CorMax =  WCJson.WC_width - Redius;
		 		
		 		
	 			$("#WC_Origin_X").attr({
	 		 	   "max" : X_CorMax,
	 		 	   "min" : X_CorMin
	 		 	});	
			 				
			 		if(Redius >= RediusMin && Redius <= (WCJson.WC_width / 2)){
			 			$("#SizeErrorX, #XAnchorError, #AnchorError").html('');
							SizeFlag = true;
			 		}else{
			 			$("#SizeErrorX").html('Please enter width between '+RediusMin+' to '+(WCJson.WC_width / 2));
			 			SizeFlag = false;
			 			if($("input:radio[name='OffsetOptions']").is(":checked") )
						{
			 				if($('input[name="OffsetOptions"]:checked').val() == "X-Y Anchor Postion")
							{
							$("#AnchorError").html('Please check width & height ');
							$('input[name="Originoptions"]').prop( "checked", false );
							
							}
			 				if($('input[name="OffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
								{
								$("#XAnchorError").html('Please enter width ');
								$("#WC_Origin_X").val('');
								
								}
			 				
						}
			 		}
	 		});
	$("#EllipseY").blur(function()
	 		{
	 			
		 		Redius = parseInt($('#EllipseY').val())
		 		
		 		
	 			Y_CorMin =  Redius;
		 		Y_CorMax =  WCJson.WC_height - Redius;
		 		
		 		
	 			$("#WC_Origin_Y").attr({
		 		 	   "max" : Y_CorMax,
		 		 	   "min" : Y_CorMin
		 		 });	
	 			
			 		if(Redius >= RediusMin && Redius <= (WCJson.WC_height / 2))
						{
						
						$("#SizeErrorY, #YAnchorError, #AnchorError").html('');
						SizeFlag = true;
						}
					else{
			 			$("#SizeErrorY").html('Please enter height between '+RediusMin+' to '+(WCJson.WC_height / 2));
			 			SizeFlag = false;
			 			
			 			if($("input:radio[name='OffsetOptions']").is(":checked") )
						{
			 				if($('input[name="OffsetOptions"]:checked').val() == "X-Y Anchor Postion")
							{
			 					$("#AnchorError").html('Please check width & height ');
			 					$('input[name="Originoptions"]').prop( "checked", false );
							}
			 				if($('input[name="OffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
								{
								$("#YAnchorError").html('Please enter height ');
								$("#WC_Origin_Y").val('');
								}
						}
						} 
	 		});
	
	$("#WC_Origin_X").blur(function()
	 		{
		if($('#EllipseX').val() != 0)
		{$("#XAnchorError").html('');
				if(parseInt($('#WC_Origin_X').val()) >= parseInt($('#EllipseX').val()) && parseInt($('#WC_Origin_X').val()) <= parseInt((WCJson.WC_width - parseInt($('#EllipseX').val()))))
				{
					
					 $("#XAnchorError").html('');
					XoriginFlag = true;
				}
				else{
					
					 $("#XAnchorError").html('Please enter X  between '+parseInt($('#EllipseX').val())+' to '+(WCJson.WC_width - parseInt($('#EllipseX').val()))+'' );
		
					XoriginFlag = false;
				}
		}else{
			$("#XAnchorError").html('Please enter width' );
		}
	 		})
	$("#WC_Origin_Y").blur(function()
	 		{$("#YAnchorError").html('');
		if($('#EllipseY').val() != 0)
		{
			if(parseInt($('#WC_Origin_Y').val()) >= parseInt($('#EllipseY').val()) && parseInt($('#WC_Origin_Y').val()) <= parseInt((WCJson.WC_height - parseInt($('#EllipseY').val()))))
				{
					
					$("#YAnchorError").html('');
					YoriginFlag = true;
				}
				else{
					
					$("#YAnchorError").html('Please enter Y  between '+parseInt($('#EllipseY').val())+' to '+(WCJson.WC_height - parseInt($('#EllipseY').val()))+'' );
//				 $(".ajs-header").css("background-color","#ce6058");
					YoriginFlag = false;
				}	
		}else{
			$("#YAnchorError").html('Please enter height' );
		}
	 		})
	 		
	$("#WCEllipseDraw").click(function(){
		
		
	 	

	 if($("input:radio[name='OffsetOptions']").is(":checked") )
	{
		if($('input[name="OffsetOptions"]:checked').val() == "X-Y Anchor Postion")
			{   $("#XAnchorError, #YAnchorError").html('');
//	 		LevelTwoJson.XYoriginoffset 
			if($('#EllipseX').val() != 0 && $('#EllipseY').val() != 0){
				
				$("#AnchorError").html('');
	 			if($('input[name="Originoptions"]:checked').val() == "Upperleft")
	 				{
	 				WCJson.WC_Origin_X = parseInt($('#EllipseX').val());
	 				WCJson.WC_Origin_Y = parseInt($('#EllipseY').val());
	 				$("#AnchorError").html('');
	 				originFlag = true;
	 				}
	 			else if($('input[name="Originoptions"]:checked').val() == "Upperright")
 					{
	 				WCJson.WC_Origin_X = WCJson.WC_width - parseInt($('#EllipseX').val());
	 				WCJson.WC_Origin_Y = parseInt($('#EllipseY').val()) ;
	 				$("#AnchorError").html('');
	 				originFlag = true;
 					}
	 			else if($('input[name="Originoptions"]:checked').val() == "center")
 					{
	 				WCJson.WC_Origin_X = WCJson.WC_width/2;
	 				WCJson.WC_Origin_Y = WCJson.WC_height/2;
	 				$("#AnchorError").html('');
	 				originFlag = true;
 					}
	 			else if($('input[name="Originoptions"]:checked').val() == "bottomleft")
 					{
	 				WCJson.WC_Origin_X = parseInt($('#EllipseX').val());
	 				WCJson.WC_Origin_Y = WCJson.WC_height - parseInt($('#EllipseY').val());
	 				$("#AnchorError").html('');
	 				originFlag = true;
 					}
	 			else if($('input[name="Originoptions"]:checked').val() == "bottomright")
						{
	 				WCJson.WC_Origin_X = WCJson.WC_width - parseInt($('#EllipseX').val());;
	 				WCJson.WC_Origin_Y = WCJson.WC_height - parseInt($('#EllipseY').val());
	 				$("#AnchorError").html('');
	 				originFlag = true;
						}
	 			else{
	 				 $("#AnchorError").html('Please select Anchor point position' );
//					 $(".ajs-header").css("background-color","#ce6058");
	 				originFlag = false;
	 			}
			}else
				{
				$("#AnchorError").html('Please enter width & height' );
			 
				}
			}
	 	
 		if($('input[name="OffsetOptions"]:checked').val() == "Use X-Y Anchor Postion")
			{  $("#AnchorError").html('');
			
			if($('#EllipseX').val() != 0)
			{$("#XAnchorError").html('');
					if(parseInt($('#WC_Origin_X').val()) >= parseInt($('#EllipseX').val()) && parseInt($('#WC_Origin_X').val()) <= parseInt((WCJson.WC_width - parseInt($('#EllipseX').val()))))
					{
						
						 $("#XAnchorError").html('');
						 WCJson.WC_Origin_X = parseInt($('#WC_Origin_X').val());
						XoriginFlag = true;
					}
					else{
						
						 $("#XAnchorError").html('Please enter X  between '+parseInt($('#EllipseX').val())+' to '+(WCJson.WC_width - parseInt($('#EllipseX').val()))+'' );
			
						XoriginFlag = false;
					}
			}else{
				$("#XAnchorError").html('Please enter width' );
			}
			

			if($('#EllipseY').val() != 0)
			{$("#YAnchorError").html('');
				if(parseInt($('#WC_Origin_Y').val()) >= parseInt($('#EllipseY').val()) && parseInt($('#WC_Origin_Y').val()) <= parseInt((WCJson.WC_height - parseInt($('#EllipseY').val()))))
					{
						
						$("#YAnchorError").html('');
						WCJson.WC_Origin_Y = parseInt($('#WC_Origin_Y').val());
						YoriginFlag = true;
					}
					else{
						
						$("#YAnchorError").html('Please enter Y  between '+parseInt($('#EllipseY').val())+' to '+(WCJson.WC_height - parseInt($('#EllipseY').val()))+'' );
//					 $(".ajs-header").css("background-color","#ce6058");
						YoriginFlag = false;
					}	
			}else{
				$("#YAnchorError").html('Please enter height' );
			}
		 		
			
// 			if(parseInt($('#WC_Origin_X').val()) > parseInt($('#EllipseX').val()) && parseInt($('#WC_Origin_X').val()) < parseInt((WCJson.WC_width - parseInt($('#EllipseX').val()))))
//			{
//				WCJson.WC_Origin_X = parseInt($('#WC_Origin_X').val());
//				 $("#XAnchorError").html('');
//				originFlag = true;
//			}
//			else{
//				
//				 $("#XAnchorError").html('Please enter X  between '+parseInt($('#EllipseX').val())+' to '+(WCJson.WC_width - parseInt($('#EllipseX').val()))+'' );
////			 $(".ajs-header").css("background-color","#ce6058");
//				originFlag = false;
//			}
//			if(parseInt($('#WC_Origin_Y').val()) > parseInt($('#EllipseY').val()) && parseInt($('#WC_Origin_Y').val()) < parseInt((WCJson.WC_height - parseInt($('#EllipseY').val()))))
//			{
//				WCJson.WC_Origin_Y = parseInt($('#WC_Origin_Y').val());
//				$("#YAnchorError").html('');
//				originFlag = true;
//			}
//			else{
//				
//				$("#YAnchorError").html('Please enter Y  between '+parseInt($('#EllipseY').val())+' to '+(WCJson.WC_height - parseInt($('#EllipseY').val()))+'' );
////			 $(".ajs-header").css("background-color","#ce6058");
//				originFlag = false;
//			}	
			}
	}
	
	
		
		if((SizeFlag == true && originFlag == true) || (SizeFlag == true && XoriginFlag == true && YoriginFlag == true))
			{
 			alertify.confirm('Confirmation!!', 'Are you sure to submit the details to draw Ellipse ? ', function(){
	    		  WoodCuttingObj.CuttingWoodconfic(WCJson)
	    		  
	    		  $("#EllipseX, #EllipseY, input[name='OffsetOptions'], input[name='Originoptions'], #WC_Origin_X, #WC_Origin_Y, #WCEllipseDraw").prop("disabled",true);
				}, function(){
					$("#EllipseX, #EllipseY, input[name='OffsetOptions'], input[name='Originoptions'], #WC_Origin_X, #WC_Origin_Y").prop("disabled",false);
				console.log(WCJson);
				});
	    	  $(".ajs-header").css("background-color","#17a2b8");
			}
		 if($('#EllipseX').val() == 0 && $('#EllipseY').val() == 0 && !$("input:radio[name='OffsetOptions']").is(":checked"))
				{
				alertify.alert('Warning!!','Please select/fill all the field' );
			 $(".ajs-header").css("background-color","#ce6058");
				}
		else {
			if(parseInt($('#EllipseX').val()) >= RediusMin && parseInt($('#EllipseX').val()) <= (WCJson.WC_width / 2)){
				$("#SizeErrorX").html('');
				SizeFlag = true;
				WCJson.EllipseX = parseInt($('#EllipseX').val());
 		}else{
 			$("#SizeErrorX").html('Please enter width between '+RediusMin+' to '+(WCJson.WC_width / 2));
 			SizeFlag = false;
 		}
			
 		if(parseInt($('#EllipseY').val()) >= RediusMin && parseInt($('#EllipseY').val()) <= (WCJson.WC_height / 2))
			{
			$("#SizeErrorY").html('');
			SizeFlag = true;
			WCJson.EllipseY = parseInt($('#EllipseY').val());
			}
		else{
 			$("#SizeErrorY").html('Please enter height between '+RediusMin+' to '+(WCJson.WC_height / 2));
 			SizeFlag = false;
			} 
 		if($('#EllipseX').val() != 0 && $('#EllipseY').val() != 0 && !$("input:radio[name='OffsetOptions']").is(":checked"))
		{
			alertify.alert('Warning!!','Please select anchor point' );
			 $(".ajs-header").css("background-color","#ce6058");
		}
		}
			
//		$("input:radio[name='OffsetOptions']").change(function(){
//			$("#AnchorError").html('');
//		})
	})
	

	
	
};