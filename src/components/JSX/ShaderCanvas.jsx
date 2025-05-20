import { useEffect, useRef } from 'react';

// Import raw text contents of the shader files
import vertexShaderSrc from '../../shaders/vertex.vert?raw';
import fragmentShaderSrc from '../../shaders/fragment.frag?raw';

function ShaderCanvas() {
  // Sets up the reference to the <canvas> DOM element initially set to null
  // The reference is set in the return function where the canvas is created
  const canvasRef = useRef(null);



  // useEffect runs once when the component mounts
  useEffect(() => {
    // Sets the canvas reference to the current DOM canvas element
    const canvas = canvasRef.current;

    // Try to get a WebGL rendering context from the canvas
    const gl = canvas.getContext('webgl');
    
    // If the previous line fails, it means WebGL is not supported and logs an error
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }



    // Helper function to compile a shader (either vertex or fragment)
    // type defines the type of shader and source is the GLSL code
    function compileShader(type, source) {
      
      // Creates an empty shader object
      const shader = gl.createShader(type);     
      
      // Attach the GLSL source code to the shader object
      gl.shaderSource(shader, source);          
      
      // Compile the shader
      gl.compileShader(shader);                 
      
      // Check if the compilation was successful
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        // Log any compile errors if compilation fails
        console.error(gl.getShaderInfoLog(shader));
        
        // Delete the shader object as cleanup if compilation fails
        gl.deleteShader(shader);                
        
        // Return null to indicate failure
        return null;
      }

      // If compilation is successful, return the shader object
      return shader;
    }



    // Compile both vertex and fragment shaders from sources obtained in the import statements
    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSrc);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSrc);

    // If either shader compilation fails, exit without proceeding
    if (vertexShader === null || fragmentShader === null) {
      // If either shader failed to compile, log an error
      console.error('Shader compilation failed');
      
      // Cleanup: delete the shaders and program if they were created
      if (vertexShader) gl.deleteShader(vertexShader); 
      if (fragmentShader) gl.deleteShader(fragmentShader); 
      if (gl) gl.deleteProgram(gl);
      if (canvas) canvas.remove();
      
      // Return early to prevent further execution
      return;
    }



    // Create a WebGL program
    const program = gl.createProgram();
    
    // Attach the compiled vertex and fragment shaders to the program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    
    // Link shaders into a complete program
    gl.linkProgram(program); 

    // Check if the program linked successfully
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      // Log any linking errors
      console.error(gl.getProgramInfoLog(program));
      
      // Cleanup: delete the shaders and program if they were created
      if (vertexShader) gl.deleteShader(vertexShader); 
      if (fragmentShader) gl.deleteShader(fragmentShader); 
      if (gl) gl.deleteProgram(gl);
      if (canvas) canvas.remove();

      // Return early to prevent further execution
      return;
    }

    // Activate the program for rendering
    gl.useProgram(program); 



    // Create a rectangle that covers the entire canvas (two triangles)
    const vertices = new Float32Array([
      -1, -1,   // Triangle 1: Bottom left
       1, -1,   // Triangle 1: Bottom right
      -1,  1,   // Triangle 1: Top left
      -1,  1,   // Triangle 2: Top left
       1, -1,   // Triangle 2: Bottom right
       1,  1    // Triangle 2: Top right
    ]);
    


    // Create GPU memory buffer
    const buffer = gl.createBuffer();
    
    // Bind the buffer so we can write to it                        
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);                      
    
    // Send vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);    



    // Get the location of the 'a_position' attribute from our vertex shader
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    
    // Enable the positionLocation so we can use it
    gl.enableVertexAttribArray(positionLocation);
    
    // Describe the format of the vertex data
    // The data is 2D (x, y) coordinates, floats, not normalized, no stride (0), and starts at the beginning of the buffer (0) 
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0); 



    // Get the locations of our uniforms (values sent to the shader every frame)
    // iResolution is the size of the canvas
    // iTime is the elapsed time since the start of rendering
    // iResolution and iTime are the same as ShaderToy uniforms to make implementation the same as in the website
    // ShaderToy.com: https://www.shadertoy.com/
    const iResolutionLoc = gl.getUniformLocation(program, 'iResolution');
    const iTimeLoc = gl.getUniformLocation(program, 'iTime');



    // Function to resize the canvas and update the shader resolution when the window size changes
    function resizeCanvas() {
      
      // Match canvas resolution to the display size
      canvas.width = canvas.clientWidth;     
      canvas.height = canvas.clientHeight;
      
      // Update WebGL viewport
      gl.viewport(0, 0, canvas.width, canvas.height);           
      
      // Send size to shader
      gl.uniform2f(iResolutionLoc, canvas.width, canvas.height); 
    }

    // Add event listener to resize the canvas when the window size changes
    window.addEventListener('resize', resizeCanvas);
    
    // Call it once on load to set the initial size
    resizeCanvas(); 



    // Store the time when we started rendering
    const startTime = performance.now();



    // Render loop — this runs continuously to update the shader frame-by-frame
    function render() {
      
      // Get the current time
      const now = performance.now();
      
      // Calculate the elapsed time since we started rendering
      const elapsed = (now - startTime) / 1000.0; 

      // Send elapsed time to shader
      gl.uniform1f(iTimeLoc, elapsed);    

      // Clear the canvas
      gl.clear(gl.COLOR_BUFFER_BIT);      
      
      // Draw the two triangles (6 vertices)
      gl.drawArrays(gl.TRIANGLES, 0, 6);  

      // Schedule the next frame
      requestAnimationFrame(render);      
    }

    // Start the loop
    render(); 



    // Cleanup: remove the resize listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };


  }, []); // Empty dependency array means this only runs once (on mount)



  // The actual canvas element is returned WebGL will draw onto
  return (
    
    <canvas
      // This gives us access to the element in JS
      ref={canvasRef} 
      // Eusures the size is 100% of the parent element. This allows for dynamic resizing when the component is embedded throughout the app
      style={{ width: '100%', height: '100%', display: 'block' }} 
    />
    
  );
}


export default ShaderCanvas;
