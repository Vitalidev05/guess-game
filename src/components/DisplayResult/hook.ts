import { useSelector } from "react-redux"
import {selectCode, selectInput, selectIsGuessed, selectResult } from "../../redux/guess/selectors"

export const useDisplayResult = () => {
    const userNumber = useSelector(selectInput)
    const result = useSelector(selectResult)
    const isGuessed = useSelector(selectIsGuessed)
    const code = useSelector(selectCode)
    
    return {
        userNumber,
        result,
        isGuessed,
        code,
    }
}
