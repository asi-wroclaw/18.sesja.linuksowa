import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Coc() {
  const { push } = useRouter();

  useEffect(() => {
     push('https://berlincodeofconduct.org/');
  }, []);
  return <div></div>;
};