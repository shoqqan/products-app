import compose from 'compose-function';
import { withRouter } from './with_router.tsx';

export const withProviders = compose(withRouter);
