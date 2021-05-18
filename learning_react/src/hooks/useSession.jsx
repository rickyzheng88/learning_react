import { useContext } from 'react';
import { SessionContext } from '../provider/SessionProvider';

const useSession = () => useContext(SessionContext);

export default useSession;