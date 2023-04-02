import { ShowCounterProps } from "./model"

const ShowCounter = (props:ShowCounterProps) => {
  return (
    <div>
      {props.count}
    </div>
  )
}

export default ShowCounter 