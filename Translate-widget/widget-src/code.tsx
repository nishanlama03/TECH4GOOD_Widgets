// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Frame, Input, Rectangle} = widget



function Widget() {
  
  const [text, setText] = useSyncedState("text", "")
  const [tanslate, setTranslate] = useSyncedState("translate", "")

  

  return(
   
    <Frame name="Widget" overflow="visible" width={50} height={50}>
      
      <Input 
        //input(text) proporties
        fontSize = {30}
        fontWeight = "normal"
        fill = "#000"
        inputFrameProps={{
          //background of text
          cornerRadius:5,
          effect: {
            type: "drop-shadow",
            color: "#0004",
            offset: {x:0,y:5},
            blur: 15,
            showShadowBehindNode: false,
          },
          fill: "#0004",
          
          horizontalAlignItems: "center",
          overflow: "visible",
          padding:15,
          stroke: "#0004",
          strokeWidth: 5,
          verticalAlignItems: "center",
        }}
        placeholderProps={{
          fill: "#0004",
          opacity: 1
        }}
        
        onTextEditEnd={(event) => {
          setText(event.characters);
          

        }}
        placeholder =""
        value={text}
        width={400}
        height={200}
        x = {50}
        y={200}

        
      />
      
      <Input 
        //input(text) proporties
        fontSize = {30}
        fontWeight = "normal"
        fill = "#0004"
        inputFrameProps={{
          //background of text
          cornerRadius:5,
          effect: {
            type: "drop-shadow",
            color: "#0004",
            offset: {x:0,y:5},
            blur: 15,
            showShadowBehindNode: false,
          },
          fill: "#FFC0CB",
          
          horizontalAlignItems: "center",
          overflow: "visible",
          padding:15,
          stroke: "#0004",
          strokeWidth: 5,
          verticalAlignItems: "center",
        }}
        placeholderProps={{
          fill: "#FFC0CB",
          opacity: 1
        }}
        
        onTextEditEnd={(event) => {
          setTranslate(event.characters);

        }}
        placeholder =""
        value={text}
        width={400}
        height={200}
        x = {500}
        y={200}

        
      />
      
    
    </Frame>
  );
}

widget.register(Widget)
