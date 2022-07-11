const fontStyles : string[] =["Thin","ExtraLight","Light","Regular","Medium","SemiBold","Bold","ExtraBold","Black","Thin Italic","ExtraLight Italic","Light Italic","Regular Italic","Medium Italic","SemiBold Italic","Bold Italic","ExtraBold Italic","Black Italic",]

if (figma.editorType === 'figma') {
  if (figma.currentPage.selection[0].type === "TEXT") {
    let fonts = figma.currentPage.selection;
    console.log(fonts[0].fontName);
    for (let i = 0; i < fonts.length; i++) {
      const element = fonts[i];
      // console.log(element.fontName)
      function createFontDisplay(figmaElement) {
        let text = figma.createText()
        text.x = figmaElement.x
        text.y = figmaElement.y + figmaElement.height/2
        text.fontName = figmaElement.fontName
        console.log(figmaElement.fontName)
        // await figma.loadFontAsync({family: "Manrope", style: "Bold"})
        text.characters = "Almost before we knew it, we had left the ground."
        // text.fontSize = element.height
        // text.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0}}]
      }
      createFontDisplay(element)

      // await figma.loadFontAsync(element.fontName)
      // display.fontName["style"] = "Bold"
      // for (let i = 0; i < display.FontName.length; i++) {
      //   const element = display.FontName[i];
      //   console.log(i)
      // }

      
    }
    const nodes: SceneNode[] = [];

    nodes.push();
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    figma.closePlugin();
  }
// If the plugins isn't run in Figma, run this code
} else {
  };