import { DESTROY_SESSION } from './types';

export * from "./types";
export const onClear = () => {
    return { type: DESTROY_SESSION };
};
