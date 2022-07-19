import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/Counter"
import { increase,decrease, setDiff } from "../redux/counter";

function CounterContainer() {
    //  useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다
    //  state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }),
        shallowEqual
    );

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook이다
    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
            //  상태와
            number={number} diff={diff}
            //  액션을 디스패치 하는 함수들을 props로 넣어준다
            onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />
    );
}

export default CounterContainer;