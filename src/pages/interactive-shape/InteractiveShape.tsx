import Shape from './Shape'

const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1]
]
const InteractiveShape = () => {
  return (
    <>
      <Shape data={BOX_DATA} />
    </>
  )
}

export default InteractiveShape