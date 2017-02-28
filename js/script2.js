requirejs.config({
	paths:{
		jquery:'jquery-1.11.2.min'
	}
});
requirejs(['jquery','JSanimate'],function($,JSanimate){
	$('#sections').JSanimate({

	})
})