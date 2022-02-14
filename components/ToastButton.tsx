import * as React from 'react';
import {useState} from 'react';

type Props = {
  children?: any
  css: string;
  onClick: any;
  toast: string;
};

const ToastButton = (props: Props) => {
  const [text, setText] = useState<string | null>(null);

  const showToast = (e: React.MouseEvent): void => {
    setText(props.toast);
    setTimeout(() => setText(null), 1000);
  }

  return (
    <div onClick={showToast}>
      <button className={props.css}
              onClick={props.onClick}>
        {text !== null && text || props.children}
      </button>
    </div>
  );
}

export default ToastButton