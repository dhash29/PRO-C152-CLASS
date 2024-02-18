AFRAME.registerComponent("movebox", {
    schema:{
        moveX:{type:"number", default:1},
        message: {type: 'string', default: 'Hello, World!'}
    },

    init:function(){
        console.log(this.data.message)
    },

    tick:function(){
        this.data.moveX = this.data.moveX + 0.1
        var pos = this.el.getAttribute("position") //Giving nickname or namespacing the long command
        
        pos.x = this.data.moveX 
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }  
})

