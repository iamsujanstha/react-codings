import Popover from "./popover/Popover"

const PopoverPage = () => {
  return (
    <>
      <Popover>
        <Popover.Action>Show Fruits</Popover.Action>
        <Popover.Content>
          <ul className="cursor-pointer">
            <li>Banana</li>
            <li>Mango</li>
            <li>Orange</li>
            <li>Pinaple</li>
            <li>Guava</li>
          </ul>
        </Popover.Content>
      </Popover>
      <p>Hello there</p>
    </>
  )
}

export default PopoverPage