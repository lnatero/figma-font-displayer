const fontStyles : string[] =[
"Thin",
"ExtraLight",
"Light",
"Regular",
"Medium",
"SemiBold",
"Bold",
"ExtraBold",
"Black",

"Thin Italic",
"ExtraLight Italic",
"Light Italic",
"Regular Italic",
"Medium Italic",
"SemiBold Italic",
"Bold Italic",
"ExtraBold Italic",
"Black Italic",
]

const loadFonts = async (_figmaElement) => {
  await figma.loadFontAsync({family: "Manrope", style: "Bold Italic"})
  // await figma.loadFontAsync({family: figmaElement.fontName["family"], style: "Bold"})
  console.log("finished")
  // hay que hacer un loadFontAsync para cada estilo posible, pero si el estilo no existe, el programa no deja de correr
  // hay que hacer un timeout y cuando se cumpla se siga al siguiente estilo.
  // se tienen que cargar todos los estilos y luego generar el texto para todos los estilos encontrados
  // me parece que la funcion loadFontsAsync es una funcion que funciona con Promises (?) asiq quizas valga la pena revisar
  // el error handling para las funciones que retornan (o son) Promises.
}
function createFontDisplay(figmaElement) {
  let text = figma.createText()
  text.x = figmaElement.x
  text.y = figmaElement.y + figmaElement.height*3/2
  console.log(figmaElement.fontSize)
  text.fontName = {family: figmaElement.fontName["family"], style: "Bold Italic"}
  console.log(figmaElement.fontName)
  text.characters = "Almost before we knew it, we had left the ground."
  text.fontSize = figmaElement.fontSize
}

if (figma.editorType === 'figma') {
  if (figma.currentPage.selection[0].type === "TEXT") {
    let fonts = figma.currentPage.selection;
    // console.log(fonts[0].fontName);
    for (let i = 0; i < fonts.length; i++) {
      const element = fonts[i];
      console.log(element.fontName)
      loadFonts(element).then(() => {
        createFontDisplay(element)
        const nodes: SceneNode[] = [];
        nodes.push();
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);

        figma.closePlugin();
      })

      // await figma.loadFontAsync(element.fontName)
      // display.fontName["style"] = "Bold"
      // for (let i = 0; i < display.FontName.length; i++) {
      //   const element = display.FontName[i];
      //   console.log(i)
      // }

      
    }
  }
// If the plugins isn't run in Figma, run this code
} else {

  };