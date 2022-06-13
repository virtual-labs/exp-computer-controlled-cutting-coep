var DrawPolygonObj = DrawPolygonObj || {};

DrawPolygonObj.Polygon = function()
      {

	polySizeFlag = false;
    polyrediusFlag = false;
    polyXFlag = false;
    polyYFlag = false;
		ShapeType = "Polygon";
		$("#symbolLibary").css("display","none");
		$(".BackSymbol").css("display","inline");
		var polygonHtm = '';
		
		polygonHtm+='<h2>Draw Polygon</h2><label class="col-sm-12 col-md-12 col-xl-12">'
		+'Number of sides'
		+'</label>'
		+'<label class="col-sm-12 col-md-12 col-xl-12">'
		+ '<select name="WC_PolySides" id="WC_PolySides" class="form-control select-class"  title="Choose Value" >'
		+ '<option value="-1">Choose Value</option>'
		for(var t = 3; t <= 8; t++)
			{
			polygonHtm += '<option value="'+t+'"> '+t+'</option>'
			}
				polygonHtm +='</select>'
		+'</label>'
		+'<div id="PolySideError" class="ErrorMsg"></div>'

			+'<div class="col-sm-12 col-md-12 col-xl-12">'
			+'<label class="col-sm-12 col-md-6 col-xl-8">'
			+'Redius'
			+'</label>'
			+'<input type="number" min="'+RediusMin+'" max="'+WCJson.WC_height/2+'" class="form-control col-sm-9 col-md-9 col-xl-9" id="WC_PolyRediusVal"  > <b class="leftAbsulate" style="top:37px;">(mm)</b>'
			+'<div id="PolyRediusError" class="ErrorMsg"></div>'
			+'</div><br/>'

			+'<p>Center Point</p>'
			+'<div class="row" id="CustomOffset">'
			
			+'<div class="col-sm-12 col-md-12 col-xl-6">'
			+'<i>X</i><input type="number"   class="form-control" id="WC_PolyOrigin_X" disabled>'
			+'</div>'
			
			+'<div class="col-sm-12 col-md-12 col-xl-6">'
			+'<i>Y</i>:<input type="number"  class="form-control" id="WC_PolyOrigin_Y" disabled>'
			+'</div>'
			+'<div id="XPolyOriginError" class="ErrorMsg"></div>'
			+'<div id="YPolyOriginError" class="ErrorMsg"></div>'
			+'</div>'
			+'<center><button id="WCPolygonTwo" class="btn btn-success"  >Submit</button></center>'
			
			$("#ShapeConfigModel").html('');
			$("#ShapeConfigModel").html(polygonHtm);
		
			
			$("#WC_PolySides").blur(function()
			 		{
						if($("#WC_PolySides").val() == "-1")
				 		{ 
							$("#PolySideError").html('please select sides');
							polySizeFlag = false;
				 		}else
				 			{
				 			$("#PolySideError").html('');
				 			polySizeFlag = true;
				 			 
				 		}
			 		});
			
			
			$("#WC_PolyRediusVal").blur(function()
			 		{
				Redius = $("#WC_PolyRediusVal").val();
			 			X_CorMin =  Redius;
				 		X_CorMax =  WCJson.WC_width - Redius;
				 		Y_CorMin =  Redius;
				 		Y_CorMax =  WCJson.WC_height - Redius;
				 		
			 			$("#WC_PolyOrigin_X").attr({
			 		 	   "max" : X_CorMax,
			 		 	   "min" : X_CorMin
			 		 	});	
			 			$("#WC_PolyOrigin_Y").attr({
				 		 	   "max" : Y_CorMax,
				 		 	   "min" : Y_CorMin
				 		 });	
			 			
			 			
			 			
			 			if(Redius >= RediusMin && Redius <= WCJson.WC_height/2)
			 				{
			 				$("#PolyRediusError, #XPolyOriginError, #YPolyOriginError").html('');
			 				polyrediusFlag = true;
			 				$("#WC_PolyOrigin_X").prop("disabled",false);
							$("#WC_PolyOrigin_Y").prop("disabled",false);
			 				}
			 			else{
//			 				$("#XPolyOriginError, #YPolyOriginError").html('');
			 				$("#PolyRediusError").html('please enter redius between '+RediusMin+' to '+WCJson.WC_height/2);
			 				polyrediusFlag = false;
			 				if($("#WC_PolyOrigin_X").is(":not(:disabled)"))
			 					{
			 					$("#XPolyOriginError").html('Please enter redius for X origin');
			 					$("#WC_PolyOrigin_X").val('');
			 					}
			 				if($("#WC_PolyOrigin_Y").is(":not(:disabled)"))
		 					{
			 					$("#YPolyOriginError").html('Please enter redius for Y origin');
								$("#WC_PolyOrigin_Y").val('');
		 					}
			 				
		 					
			 				}
			 		});
			 
			$("#WC_PolyOrigin_X").blur(function()
			 		{
				if($("#WC_PolyRediusVal").val() != 0)
						{$("#XPolyOriginError").html('');
						if(parseInt($('#WC_PolyOrigin_X').val()) >= parseInt($("#WC_PolyRediusVal").val()) && parseInt($('#WC_PolyOrigin_X').val()) <= parseInt((WCJson.WC_width - parseInt($("#WC_PolyRediusVal").val()))))
			 			{
			 			
			 				 $("#XPolyOriginError").html('');
			 				polyXFlag = true;
			 			}
			 			else{
			 				
			 				 $("#XPolyOriginError").html('Please enter X origin between '+parseInt($("#WC_PolyRediusVal").val())+' to '+(WCJson.WC_width - parseInt($("#WC_PolyRediusVal").val()))+'' );
		//							 $(".ajs-header").css("background-color","#ce6058");
			 				polyXFlag = false;
			 			}
			 		}else{
			 			$("#XPolyOriginError").html('Please enter redius for X origin');
			 		}
			
			 		})
			 		
			$("#WC_PolyOrigin_Y").blur(function()
			 		{
				if($("#WC_PolyRediusVal").val() != 0)
				{$("#YPolyOriginError").html('');
				if(parseInt($('#WC_PolyOrigin_Y').val()) >= parseInt($("#WC_PolyRediusVal").val()) && parseInt($('#WC_PolyOrigin_Y').val()) <= parseInt((WCJson.WC_height - parseInt($("#WC_PolyRediusVal").val()))))
	 			{
	 				
	 				 $("#YPolyOriginError").html('');
	 				polyYFlag = true;
	 			}
	 			else{
	 				
	 				 $("#YPolyOriginError").html('Please enter Y origin between '+parseInt($("#WC_PolyRediusVal").val())+' to '+(WCJson.WC_height - parseInt($("#WC_PolyRediusVal").val()))+'' );
//							 $(".ajs-header").css("background-color","#ce6058");
	 				polyYFlag = false;
	 			}
				
				}else{
		 			$("#YPolyOriginError").html('Please enter redius for Y origin');
		 		}
			 		})
			
			$("#WCPolygonTwo").click(function(){
				
				
//					if( ($("#WC_PolySides").val() == 0 && $("#WC_PolyRediusVal").val() == 0) )
//						{
//						alertify.alert('Warning!!','Please select/fill all the field' );
//					 $(".ajs-header").css("background-color","#ce6058");
//						}
//					else 
//						{
						if($("#WC_PolySides").val() == "-1")
				 		{ 
							$("#PolySideError").html('please select sides');
							polySizeFlag = false;
				 		}else
				 			{
				 			$("#PolySideError").html('');
				 			 WCJson.WC_PolySide = parseInt($("#WC_PolySides").val()); 
				 			polySizeFlag = true;
				 		}
						if($("#WC_PolyRediusVal").val() == 0 )
				 		{ 
							$("#PolyRediusError").html('please enter redius');
							polyrediusFlag = false;
							
				 		}else
				 			{
				 			polyrediusFlag = true;
				 			if($("#WC_PolyRediusVal").val() >= RediusMin && $("#WC_PolyRediusVal").val() <= WCJson.WC_height/2)
				 			{
				 				$("#PolyRediusError").html('');
					 			 WCJson.WC_PolyRedius = parseInt($("#WC_PolyRediusVal").val());
					 			$("#WC_PolyOrigin_X").prop("disabled",false);
								$("#WC_PolyOrigin_Y").prop("disabled",false);
					 			
						
					
									if(parseInt($('#WC_PolyOrigin_X').val()) >= parseInt($("#WC_PolyRediusVal").val()) && parseInt($('#WC_PolyOrigin_X').val()) <= parseInt((WCJson.WC_width - parseInt($("#WC_PolyRediusVal").val()))))
						 			{
						 				WCJson.WC_Origin_X = parseInt($('#WC_PolyOrigin_X').val());
						 				 $("#XPolyOriginError").html('');
						 				polyXFlag = true;
						 			}
						 			else{
						 				
						 				 $("#XPolyOriginError").html('Please enter X origin between '+parseInt($("#WC_PolyRediusVal").val())+' to '+(WCJson.WC_width - parseInt($("#WC_PolyRediusVal").val()))+'' );
			//							 $(".ajs-header").css("background-color","#ce6058");
						 				polyXFlag = false;
						 	
						 			}
									
									if(parseInt($('#WC_PolyOrigin_Y').val()) >= parseInt($("#WC_PolyRediusVal").val()) && parseInt($('#WC_PolyOrigin_Y').val()) <= parseInt((WCJson.WC_height - parseInt($("#WC_PolyRediusVal").val()))))
						 			{
						 				WCJson.WC_Origin_Y = parseInt($('#WC_PolyOrigin_Y').val());
						 				 $("#YPolyOriginError").html('');
						 				polyYFlag = true;
						 			}
						 			else{
						 				
						 				 $("#YPolyOriginError").html('Please enter Y origin between '+parseInt($("#WC_PolyRediusVal").val())+' to '+(WCJson.WC_height - parseInt($("#WC_PolyRediusVal").val()))+'' );
			//							 $(".ajs-header").css("background-color","#ce6058");
						 				polyYFlag = false;
						 	
						 			}
				 			}
				 			else
				 			{
				 				$("#PolyRediusError").html('please enter redius between '+RediusMin+' to '+WCJson.WC_height/2);
				 			}
				 			
						
				 			}
//						}
					      console.log(WCJson);
					      
					      if(polySizeFlag == true && polyrediusFlag == true && polyXFlag == true &&  polyYFlag == true)
					    	  {
					    	  alertify.confirm('Confirmation!!', 'Are you sure to submit the details to draw polygon ? ', function(){
					    		  WoodCuttingObj.CuttingWoodconfic(WCJson)
					    		  $("#WC_PolySides, #WC_PolyRediusVal, #WC_PolyOrigin_X, #WC_PolyOrigin_Y, #WCPolygonTwo").prop("disabled",true);
								}, function(){
									$("#WC_PolySides, #WC_PolyRediusVal, #WC_PolyOrigin_X, #WC_PolyOrigin_Y").prop("disabled",false);
								});
					    	  $(".ajs-header").css("background-color","#17a2b8");
					    	
					    	  }
})



 		
	 		 		
	 				
		 			
		 			
      }
	 	
      