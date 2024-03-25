import React from 'react'
import { Chart } from 'react-charts'

const AppChart = () => {

    const data = React.useMemo(() => [
        { label: 'Series 1', data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]] },
        { label: 'Series 2', data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]] }
    ], [])

    const axes = React.useMemo(() => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
    ], [])

    return (
        <div className="">
            <div className="">Chart</div>
            <div className=" h-[300px] w-full">
                <Chart data={data} axes={axes} />
            </div>
        </div>
    )
}

export default AppChart