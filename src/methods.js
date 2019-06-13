// import sketch from 'sketch/dom'
import { Group, Shape, Rectangle, Style, Text } from 'sketch/dom'
import UI from 'sketch/ui'

export function drawRect(parentArtboard) {
    return new Shape({
      parent: parentArtboard,
      frame: new Rectangle(10, 10, 375, 80),
      style: {
        // borders: [{
        //   color: '#E93D3D',
        //   position: Style.BorderPosition.Inside,
        // }],
        fills: [
          {
            color: '#BABABA',
            fillType: Style.FillType.Color,
          },
        ],
        shadows: [
          {
            color: '#9C9C9C',
            blur: 3,
          },
        ]
      }
    })
}

export function drawText(parentArtboard) {
    return new Text({
        name: "TextLayer",
        parent: parentArtboard,
        text: "some text",
        alignment: Text.Alignment.center,
    })
}
