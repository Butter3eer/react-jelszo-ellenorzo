interface JelszoProps {
  sulyos: number;
  hibauzenet: string[];
}

export function PasswordChecker(props: JelszoProps) {

  return <ul
    className={props.sulyos ? 'sulyoshiba' : ''}
    style={{
      color: props.sulyos == 0 ? 'white' : props.sulyos == 1 ? 'white' : '',
      backgroundColor: props.sulyos == 0 ? 'peachpuff' : props.sulyos == 1 ? '' : props.sulyos == 2 ? 'green' : '',
    }}>
    {props.hibauzenet.map(msg => <li>{msg}</li>)}
  </ul>;
}
