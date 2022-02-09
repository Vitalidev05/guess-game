import { useSelector } from "react-redux"
import { selectInput } from "../../redux/guess/selectors"

export const useDisplayResult = () => {
    const userNumber = useSelector(selectInput)
    return {
        userNumber
    }
}
