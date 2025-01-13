import React from 'react'
import './EffortlessParkingComponent.scss'
import EffortlessParking from '../../assets/EffortlessParking.png'

const EffortlessParkingComponent = () => {
  return (
    <div className='EffortlessParking'>
      <div className="row">
      <div className="col-md-12">
        <div className="col-md-6">
            <img src={EffortlessParking} alt="" />
        </div>
        <div className="col-md-6"></div>
      </div>
      </div>
    </div>
  )
}

export default EffortlessParkingComponent
