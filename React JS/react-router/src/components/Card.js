import React from 'react'
import { useParams } from 'react-router-dom'

class Card extends React.Component {

  state = { user: ''}
    
    export default function Invoice() {
      let params = useParams();
      return <h2>Invoice: {params.invoiceId}</h2>;
    }
    
  

  render() {
    const { user } = this.state
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <h3 className="ui header">{ user }</h3>
      </div>
    )
  }
}
export default Card
