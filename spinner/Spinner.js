var Spinner=new Class({
	

	initialize:function(element, options){
		
		var me=this;
		me.element=element;
		me.options=Object.append({
			start:true,
			width:32,
			height:32,
			color:'black'
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
		var me=this;
		var circle={
				'background-color':me.options.color
		};
		
		
	    var s=new Element('div',{'class':'sp'});
	    
	   // var size=me.element.getSize();
	    s.setStyles({
	    	position:'absolute',
	    	width:me.options.width+"px",
	    	height:me.options.height+"px",
	    	top:"calc( 50% - "+(me.options.height/2)+"px )",
	    	left:"calc( 50% - "+(me.options.width/2)+"px )"
	    });
	    
	    var sc1=s.appendChild(new Element('div',{'class':'sp-c sp-c1'}));
	    sc1.appendChild(new Element('div',{'class':'c1', styles:circle}));
	    sc1.appendChild(new Element('div',{'class':'c2', styles:circle}));
	    sc1.appendChild(new Element('div',{'class':'c3', styles:circle}));
	    sc1.appendChild(new Element('div',{'class':'c4', styles:circle}));
	    
	    
	    var sc2=s.appendChild(new Element('div',{'class':'sp-c sp-c2'}));
	    sc2.appendChild(new Element('div',{'class':'c1', styles:circle}));
	    sc2.appendChild(new Element('div',{'class':'c2', styles:circle}));
	    sc2.appendChild(new Element('div',{'class':'c3', styles:circle}));
	    sc2.appendChild(new Element('div',{'class':'c4', styles:circle}));
	    
	    
	    var sc3=s.appendChild(new Element('div',{'class':'sp-c sp-c3'}));
	    sc3.appendChild(new Element('div',{'class':'c1', styles:circle}));
	    sc3.appendChild(new Element('div',{'class':'c2', styles:circle}));
	    sc3.appendChild(new Element('div',{'class':'c3', styles:circle}));
	    sc3.appendChild(new Element('div',{'class':'c4', styles:circle}));
	    
	    return s;

	}
});