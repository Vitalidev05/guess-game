import { useSelector } from "react-redux"
import { selectInput, selectResult } from "../../redux/guess/selectors"

export const useDisplayResult = () => {
    const userNumber = useSelector(selectInput)
    const result = useSelector(selectResult)
    return {
        userNumber,
        result,
    }
}
