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
            title: 'Мобилни и Уеб продажби',
            addition: 'Подходящ за бизнес',
            description: 'Облачна софтуерна платформа за управление на търговска дейност.'
        },
        {
            icon: fleerpIcon,
            image: fleerpImage,
            name: 'Fleerp',
            url: '/fleerp/docs/get-started/tracker-activation',
            title: 'GPS проследяваща система',
            addition: 'Лесно използване',
            description: 'Достъпна GPS система за проследяване, успешно използвана от много компании и лични ' +
            'домакинства по целия свят.'
        },
        {
            icon: iamIcon,
            image: iamImage,
            name: 'IAM',
            url: '/iam/docs/get-started/user-registration',
            title: 'Управление на достъпа',
            addition: 'Сигурност',
            description: 'Прецизен контрол на достъпа и възножност за централизирано управление на ' +
            'ресурсите на приложението.'
        }
    ];

    const buttonName = 'Документация';
    const title = 'Опитай. Използвай. Израствай.';

    return (
        <IndexPage {...props} products={products} button={buttonName} title={title} />
    )
}
