import React, {Component} from 'react'

import IndexPage from './indexPage'

import iamIcon from '../images/iamIcon.png'
import iamImage from '../images/iamImage.png'
import fleerpIcon from '../images/fleerpIcon.png'
import politisIcon from '../images/politisIcon.png'
import fleerpImage from '../images/fleerpImage.png'
import politisImage from '../images/politisImage.jpeg'

export default props => {
    const products = [
        {
            icon: politisIcon,
            image: politisImage,
            name: 'Politis',
            url: '/politis/get-started/introduction',
            title: 'Mobile and Web sales',
            addition: 'Suitable for Business',
            description: 'Politis is powefull cloud based inventory and order ' +
            'management software for easing your business.'
        },
        {
            icon: fleerpIcon,
            image: fleerpImage,
            name: 'Fleerp',
            url: '/fleerp/docs/get-started/tracker-activation',
            title: 'GPS Tracking System',
            addition: 'Simple to use',
            description: 'Fleerp is affordable GPS Tracking System, successfully used by many companies, public ' +
            'sectors and personal households all around the world.'
        },
        {
            icon: iamIcon,
            image: iamImage,
            name: 'IAM',
            url: '/iam/docs/get-started/user-registration',
            title: 'Access Management',
            addition: 'Security',
            description: 'Fine-grained access control and visibility for centrally managing app resources.'
        }
    ];

    const buttonName = 'See Docs';
    const title = 'Try. Use. Grow.';

    return (
        <IndexPage {...props} products={products} button={buttonName} title={title} />
    )
}
