import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
    // 직접 작성한 useMemo를 참고해서 만들어보세요.
    // 1. useMemo를 사용하되, 비교 함수로 deepEquals를 사용
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(factory, deps, deepEquals);
}
