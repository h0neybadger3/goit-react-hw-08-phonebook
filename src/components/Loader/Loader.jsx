import BounceLoader from 'react-spinners/BounceLoader';
import { styles } from './Loader.styled';

export default function Loader() {
  return (
    <div>
      <BounceLoader color={'#2196f3'} size={150} css={styles} />
    </div>
  );
}
