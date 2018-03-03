/*var textCoordX = Math.floor((Math.random() * 100) + 1);
var textCoordY = Math.floor((Math.random() * 100) + 1);
var textCoordX2 = textCoordX;
var textCoordY2 = textCoordY + 15;
var textString = "First text";
var textString2 = "Second text";*/
$(document).ready(function() {
	$('#launcher').on("click", function(){
		return dibujarSVG();
	});

	$('#random').on("click", function(){
		$('#well').attr('data-color', 'red');
		$('#well2').attr('data-color', 'red');
		var colorSelected = $(this).data('color');
		$('[data-color="red"]').addClass("red");
	})
});

function dibujarSVG(){
	var wellData = [ { "x":10, "y":0 },
				 { "x":10, "y":800 },
				 { "x":210, "y":800 },
				 { "x":210, "y":0 } ]

var markData = [ { "x":10, "y":450 },
				 { "x":10, "y":490 },
				 { "x":70, "y":490 },
				 { "x":70, "y":450 },
				 { "x":10, "y":450 },
				 { "x":70, "y":490 },
				 { "x":70, "y":450 },
				 { "x":10, "y":490 } ]

var markData2 = [ { "x":10, "y":600 },
				  { "x":10, "y":640 },
				  { "x":70, "y":640 },
				  { "x":70, "y":600 },
				  { "x":10, "y":600 },
				  { "x":70, "y":640 },
				  { "x":70, "y":600 },
				  { "x":10, "y":640 },
				  { "x":10, "y":600 } ]

var textData = [ { cx:240, cy:175, text:"UT57dt" },
				 { cx:240, cy:190, text:"EHU71a" },
				 { cx:240, cy:205, text:"A2e90L" },
				 { cx:240, cy:460, text:"PO9876" },
				 { cx:240, cy:475, text:"mJUI75" },
				 { cx:240, cy:490, text:"NB56Va" },
				 { cx:240, cy:610, text:"CDeee3" },
				 { cx:240, cy:625, text:"Qs37aG" },
				 { cx:240, cy:640, text:"UT56dt" } ]

var brackets1 = [ { "x":480, "y":20 },
				  { "x":495, "y":20 },
				  { "x":495, "y":120 },
				  { "x":480, "y":120 } ]

var brackets2 =	[ { "x":480, "y":300 },
				  { "x":495, "y":300 },
				  { "x":495, "y":400 },
				  { "x":480, "y":400 } ]

var brackets3 = [ { "x":750, "y":220 },
				  { "x":765, "y":220 },
				  { "x":765, "y":320 },
				  { "x":750, "y":320 } ]

var brackets4 = [ { "x":800, "y":150 },
				  { "x":815, "y":150 },
				  { "x":815, "y":250 },
				  { "x":800, "y":250 } ]

var brackets5 = [ { "x":820, "y":715 },
				  { "x":835, "y":715 },
				  { "x":835, "y":815 },
				  { "x":820, "y":815 } ]

/*var textData = [{cx: textCoordX, cy: textCoordY, text: textString},
				{cx: textCoordX2, cy: textCoordY2, text: textString2}];*/

var pathDraw = d3.line()
					 .x(function(d) { return d.x;})
					 .y(function(d) { return d.y;});

var bodySelection = d3.select("body");

var viewport = bodySelection.append("svg")
							.attr("width", 1000)
							.attr("height", 1000);

var text = viewport.selectAll("text")
					.data(textData)
					.enter()
					.append("text");

var textLabels = text
				 .attr("x", function(d) { return d.cx;} )
				 .attr("y", function(d) { return d.cy;} )
				 .text( function(d) { return d.text;} );

var wellGraph = viewport.append("path")
						
						.attr("d", pathDraw(wellData))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");

var markGraph = viewport.append("path")
						.attr("id", "well")
						.attr("d", pathDraw(markData))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");

var markGraph2 = viewport.append("path")
						.attr("id", "well2")
						.attr("d", pathDraw(markData2))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");

var bracketsGraph1 = viewport.append("path")
						.attr("d", pathDraw(brackets1))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");				 

var bracketsGraph2 = viewport.append("path")
						.attr("d", pathDraw(brackets2))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");	

var bracketsGraph3 = viewport.append("path")
						.attr("d", pathDraw(brackets3))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");	

var bracketsGraph4 = viewport.append("path")
						.attr("d", pathDraw(brackets4))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");	

var bracketsGraph5 = viewport.append("path")
						.attr("d", pathDraw(brackets5))
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("fill", "none");	

}

