
export default function Cart({ cartDetails }) {
    
    function calculateTotal(cartDetails) {

        const tot = cartDetails ? (cartDetails.reduce((sum, item) => sum + (item.sum || 0), 0)).toFixed(2) : (0)
        return tot
    }

    const total = calculateTotal(cartDetails)

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                    cartDetails ? (
                        cartDetails.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.sum}</td>
                            </tr>
                        ))
                    ) : (
                        <></>
                    )
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{total}</td>
                </tr>
            </table>
           
        </div>
    );
}