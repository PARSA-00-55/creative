import React from 'react';
import { Box, styled } from '@mui/material';

const brands = [
    'https://i.ibb.co/fx3fXRD/netflix.png',
    'https://i.ibb.co/f2yTtZM/slack.png',
    'https://i.ibb.co/k93BP03/uber.png',
    'https://i.ibb.co/4jdCs6y/google.png',
    'https://i.ibb.co/4NWTs4c/airbnb.png'
]

const BrandsWrapper = styled(Box)(({theme}) => ({
    marginBottom: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    "& > img": {
        height: '4rem'
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        "& > img": {
            marginBottom: '1rem'
        }
    }
}))

const Brands = () => {
    return (
        <BrandsWrapper>
            {
                brands.map((brand, i) => <img key={i} src={brand} alt='brands' />)
            }
        </BrandsWrapper>
    );
};

export default Brands;