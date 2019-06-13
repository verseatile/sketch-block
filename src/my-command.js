import sketch from 'sketch/dom'
import UI from 'sketch/ui'
import { drawRect, drawText } from './methods'
// documentation: https://developer.sketchapp.com/reference/api/

var document = sketch.getSelectedDocument()
var page = document.selectedPage
var selection = document.selectedLayers

const Group = sketch.Group
const Shape = sketch.Shape
const Rectangle = sketch.Rectangle
const Style = sketch.Style

// example uses of Group, Shape, Rectangle
// var group = new Group({
//   parent: page,
//   frame: new Rectangle(0, 0, 100, 100),
//   name: 'Test',
//   selected: true,
// })

let art = new sketch.Artboard({
  name: 'Plugin Artboard',
  flowStartPoint: true,
  parent: page,
  frame: new Rectangle(0, 0, 395, 100)
})

// var rect = new Shape({
//   parent: art,
//   frame: new Rectangle(10, 10, 375, 80),
//   style: {
//     // borders: [{
//     //   color: '#E93D3D',
//     //   position: Style.BorderPosition.Inside,
//     // }],
//     fills: [
//       {
//         color: '#BABABA',
//         fillType: Style.FillType.Color,
//       },
//     ],
//     shadows: [
//       {
//         color: '#9C9C9C',
//         blur: 3,
//       },
//     ]
//   }
// })






// "render" method
export default function() {
  UI.message("It's alive 🙌")
  drawRect(art);
  drawText(art);

  // console.log(art.toJSON()) // works

}