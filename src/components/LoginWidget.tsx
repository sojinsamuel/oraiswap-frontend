import React, { FC, useEffect, useState } from 'react';
import CenterEllipsis from './CenterEllipsis';
import classNames from 'classnames';
import styles from './LoginWidget.module.scss';
import Button from 'components/Button';
import Icon from './Icon';
import useLocalStorage from 'libs/useLocalStorage';
import { network } from 'constants/networks';
import KeplrImage from 'images/keplr.png';

export const LoginWidget: FC<{ text: string }> = ({ text }) => {
  const [address, setAddress] = useLocalStorage<String>('address');

  const connectWallet = async () => {
    const keplrAddr = await window.Keplr.getKeplrAddr();
    if (!keplrAddr) {
      alert('You must install Keplr to continue');
      return;
    }
    setAddress(keplrAddr);
  };
  const disconnectWallet = () => {
    setAddress('');
  };

  return (
    <div className={classNames(styles.container)}>
      {address ? (
        <Button
          onClick={disconnectWallet}
          className={classNames(styles.connected)}
        >
          <Icon size={16} name="account_balance_wallet" />
          <p className={classNames(styles.address)}>
            <CenterEllipsis size={6} text={address as string} />
            {' | '}
            {network.id}
          </p>
          <Icon size={20} name="close" />
        </Button>
      ) : (
        <Button className={classNames(styles.connect)} onClick={connectWallet}>
          <img height={16} src={KeplrImage} alt="Keplr" />
          {text}
        </Button>
      )}
    </div>
  );
};

export default LoginWidget;