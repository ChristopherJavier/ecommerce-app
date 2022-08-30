import PaymentForm from "./PaymentForm"
import { useNavigate } from "react-router-dom"


const PaymentPage = ({ orderNum }) => {
    let navigate = useNavigate()

    return (
        <div>
            <button>Gpay</button>
            <button>PayPal</button>
            <PaymentForm navigate={navigate}/>
        </div>
    )
}

export default PaymentPage