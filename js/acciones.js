// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(1).text(device.name);
		$('#disp table td').eq(3).text(device.phonegap);
		$('#disp table td').eq(5).text(device.platform);
		$('#disp table td').eq(7).text(device.version);
		$('#disp table td').eq(9).text(device.uuid);
			
			
	},false);//ready device
});//document
