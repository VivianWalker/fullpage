define(['jquery'],function($){
	function JSanimate(el,opts){
		this.opts=$.extend({},JSanimate.defaults,opts);
		this.$(el)=$(el);
		this.$(el).on('click',$.proxy(this._jsanimate(),this));
	}
	JSanimate.prototype.JSanimate=function(){
		var opts=this.opts;
		this.$(el).animate({
			top:opts.value
		},opts.speed);
	}
	JSanimate.defaults={
		property:'top',
		value:'-700px',
		speed:1000,
		callback:''
	}
	return{
		JSanimate:JSanimate
	}
})