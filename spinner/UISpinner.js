var UISpinner=new Class({
	

	initialize:function(element, options){
		
		var me=this;
		me.element=element;
		me.options=Object.append({
			start:true,
			width:32,
			height:32
		},options);
		if(me.options.start){
			me.start();
		}
		
		
	},
	
	start:function(){
		var me=this;
		me.spinner=me.element.appendChild(me._render());
	},
	
	stop:function(){
		var me=this;
		me.element.removeChild(me.spinner);
	},
	
	_render:function(){
		
	    var s=new Element('div',{'class':'sp'});
	    var sc1=s.appendChild(new Element('div',{'class':'sp-c sp-c1'}));
	    sc1.appendChild(new Element('div',{'class':'c1'}));
	    sc1.appendChild(new Element('div',{'class':'c2'}));
	    sc1.appendChild(new Element('div',{'class':'c3'}));
	    sc1.appendChild(new Element('div',{'class':'c4'}));
	    
	    
	    var sc2=s.appendChild(new Element('div',{'class':'sp-c sp-c2'}));
	    sc2.appendChild(new Element('div',{'class':'c1'}));
	    sc2.appendChild(new Element('div',{'class':'c2'}));
	    sc2.appendChild(new Element('div',{'class':'c3'}));
	    sc2.appendChild(new Element('div',{'class':'c4'}));
	    
	    
	    var sc3=s.appendChild(new Element('div',{'class':'sp-c sp-c3'}));
	    sc3.appendChild(new Element('div',{'class':'c1'}));
	    sc3.appendChild(new Element('div',{'class':'c2'}));
	    sc3.appendChild(new Element('div',{'class':'c3'}));
	    sc3.appendChild(new Element('div',{'class':'c4'}));
	    
	    return s;

	}
});