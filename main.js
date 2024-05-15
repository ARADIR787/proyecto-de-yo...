var last_position_of_x, last_position_of_y;
color = "turquoise";
   width_of_line = 2;
   
   canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
 //Define las variables "new_width" y "new_height" para almacenar el nuevo ancho y alto de la pantalla.
 var width = screen.width;

 new_width = screen.width - 80;
 new_height = screen.height - 310




/*Si el tamaño de la pantalla es inferior a 992 (significa 992 px), cambia el ancho y el alto del
    lienzo con el nuevo ancho y la nueva altura. */
    if(width < 992) 
        {
   document.getElementById("myCanvas").width = new_width
   document.getElementById("myCanvas").height = new_height
   document.body.style.overflow = "hidden";
        }
//Crea el evento 'touchstart'
    canvas.addEventListener("touchstart", my_touchstart);  

//Crea la funcion  'my_touchstart' 
    function my_touchstart(e)
    {
        //Muestra my_toustart en la consola
           console.log("my_touchstart")
        //Inicio de actividad adicional
       color = document.getElementById("color").value;
       width_of_line = document.getElementById("withe_of_line").value;
        //Fin de la actividad adicional
    //Actualiza last_position_of_x_touch y last_position_of_y_touch aquí.
        last_position_of_x = e.my_touches[0].clientX - canvas.offsetleft;
        last_position_of_y = e.my_touches[0].clientY - canvas.offsetTop;
    }
//Crea el evento 'touchmove'.
    canvas.addEventListener("touchmove", my_touchmove);
//Crea la función  "my_touchmove()".
    function my_touchmousemove(e)
    {
        //Inicia sesión "my_touchMove" en la consola
        console.log("my_touchMove");
 /*Actualiza el "current_position_of_touch_x" y "current_position_of_touch_y" 
    con los puntos tocados en lienzo.*/
        
    current_position_of_touch_x = e.touches[0].clintX - canvas.offsetleft
        current_position_of_touch_y = e.touches[0].clintY - canvas.offsetTop

// A pintar

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
    
        console.log("posición actual de las coordenadas X y Y = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
           // fin  de pintar
    }

    
//Actividad adicional para despejar el área.
function clearArea() {
    ctx.clearReact(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    




































































































































































































































































































































































































































































































































































