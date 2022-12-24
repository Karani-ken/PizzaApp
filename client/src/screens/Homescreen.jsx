import React from 'react'
import Pizza from '../Components/Pizza'
import pizzas from '../pizzasData'
const Homescreen = () => {
  return (
    <div>
            <div className="row m-5">
                {
                    pizzas.map(pizza=>{
                        return <div className="col-md-4">
                            <div >
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                }
            </div>
            
    </div>
  )
}

export default Homescreen