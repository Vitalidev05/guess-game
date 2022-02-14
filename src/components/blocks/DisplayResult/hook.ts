import { useSelector } from "react-redux"
import { selectResult } from "../../../redux/guess/selectors"

export const useDisplayResult = () => {
    const result = useSelector(selectResult)

    return {
        result,
    }
}
