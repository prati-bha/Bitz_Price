class Prices extends React.Component {
    state = {
        currency: "GBP"
    }

    render() {
        return (
            <div>
                <select className="form-control" onChange={(e) => {
                    this.setState({
                        currency: e.target.value
                    })
                }}>
                    <option className="form-control" value="USD">USD</option>
                    <option className="form-control" value="GBP">GBP</option>
                    <option className="form-control" value="EUR">EUR</option>
                </select>
                <ul className="list-group mt-5">
                    <li className="list-group-item">
                        BitCoin Rate for {this.props.bpi[this.state.currency].description} : <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span> is <strong>{this.props.bpi[this.state.currency].rate}</strong>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Prices