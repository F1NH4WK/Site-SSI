import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import ReactDOM from "react-dom";

// assets
import CloseBtn from './../../public/images/icons/close.svg';

const GiftModal = ({ onClose, image, name, totalPres, presentialPres }) => {

    return (
        <ModalWrapper>
            <StyledGiftModal>
                <GiftModalHeader className='popup'>
                    <h4>{name}</h4>
                    <button className="close-btn-container" onClick={onClose}>
                        <img src={CloseBtn} alt='Botão de fechar'></img>
                    </button>
                </GiftModalHeader>
                <GiftModalBody>
                    <figure>
                        <img src={image} alt={name} />
                    </figure>

                    <div className='modal-text'>
                        <p>Número de palestras necessárias para resgatar este brinde:</p>
                        <div className='lecture-numbers'>
                            <h6>Total: <span>{totalPres}</span></h6>
                            <div></div>
                            <h6>Presenciais: <span>{presentialPres}</span></h6>
                        </div>
                    </div>
                </GiftModalBody>
            </StyledGiftModal>
        </ModalWrapper>
    );
}

export default GiftModal;


const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23.75rem;
    height: 28.75rem;
    padding: 1.5rem 1rem;
    border-radius: 16px;
    background-color: var(--color-neutral-800);
`

const StyledGiftModal = styled.div`
    height:100%;
    width:100%;
`

const GiftModalHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .close-btn-container {
        background-color: var(--color-neutral-800);
        cursor: pointer;
        border: none;

        &:hover {

        }
    }
`

const GiftModalBody = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    figure {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 14rem;
        }
    }

    .modal-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        p, h6 {
            font-family: 'Space_Mono_Bold';
            font-weight: 400;
            text-align: center;
        }

        h6 span {
            font: inherit;
            color: var(--color-primary-500);
        }

        .lecture-numbers {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            
            > div {
                height: 24px;
                width: 2px;
                background-color: var(--color-neutral-600);
                margin-inline: 1rem;
            }
        }
    }
`