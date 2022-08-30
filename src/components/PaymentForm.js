import { useState } from "react"

const PaymentForm = ({ navigate }) => {
    const [email, setEmail] = useState('')
    const [cardInfo, setCardInfo] = useState({})
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email || cardInfo || address || zip || country) {
            const paymentInfo = {
                email: email,
                cardInfo: cardInfo,
                address: address,
                zip: zip,
                country: country
            }

            setEmail('')
            setCardInfo({ ...cardInfo, cardCVC: '', cardMMYY: '', cardNoC: '', cardNumber: '' })
            setAddress('')
            setZip('')
            setCountry('')

            delete paymentInfo.cardInfo
            navigate('/paymentDone')
        }
    }

    return (
        <div>
            <span>or pay with</span>
            <form onSubmit={handleSubmit}>
                <div>
                    email
                    <input
                        type={"email"}
                        placeholder={"email@example.com"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Card Information
                    <input
                        type={"text"}
                        placeholder={"1111-2222-3333-4444"}
                        value={cardInfo.cardNumber}
                        onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                        required
                    />
                    <input
                        type={"text"}
                        placeholder={"MM/YY"}
                        value={cardInfo.cardMMYY}
                        onChange={(e) => setCardInfo({ ...cardInfo, cardMMYY: e.target.value })}
                        required
                    />
                    <input
                        type={"text"}
                        placeholder={"CVC"}
                        value={cardInfo.cardCVC}
                        onChange={(e) => setCardInfo({ ...cardInfo, cardCVC: e.target.value })}
                        required
                    />
                </div>
                <div>
                    Name on card
                    <input
                        value={cardInfo.cardNoC}
                        onChange={(e) => setCardInfo({ ...cardInfo, cardNoC: e.target.value })}
                        required
                    />
                </div>
                <div>
                    Address
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Zip
                    <input
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Country or region
                    <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Pay</button>
            </form>
        </div>
    )
}

export default PaymentForm