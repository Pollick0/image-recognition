import TextRecognition from "@react-native-ml-kit/text-recognition";
import imageURL from "../image-recognition/assets/schedule.jpg"

const result = await TextRecognition.recognize(imageURL)
const block_text = null
const block_frame = null
const line_text = null
const line_frame = null

console.log('Recognized text:', result.text);
for (let block of result.blocks) {
  block_text = block.text
  block_frame = block.frame

  for (let line of block.lines) {
    line_text = line.text
    line_frame = line.frame
    }
}

export {block_text, block_frame, line_text, line_frame}