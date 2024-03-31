import React from 'react';
import { Truck, BadgeIndianRupee,  } from 'lucide-react';
import { Step, StepLabel, Stepper } from '@material-ui/core';

const CheckoutSteps = ({ activeStep }) => {

    const steps = [
        {
            label: <p className='prose'>Shipping Details</p>,
            icon: <Truck size={28} strokeWidth={1.75} />
        },
        {
            label: <p className='prose'>Confirm Order</p>,
            icon: <CopyCheck size={28} strokeWidth={1.75} />
        },
        {
            label: <p className='prose'>Payment</p>,
            icon: <BadgeIndianRupee size={28} strokeWidth={1.75} />
        }
    ];



    return (
        <>
            <Stepper alternativeLabel activeStep={activeStep} className='box-border'>
                {
                    steps.map((item, index) => (
                        <Step key={index} active={activeStep === index ? true : false}
                        completed={activeStep >= index ? true : false}>
                            <StepLabel style={{color : activeStep >= index
                            ? "#7c3aed" : "rgba(0,0,0,0.649)"}} icon={item.icon}>{item.label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </>
    )
}

export default CheckoutSteps
