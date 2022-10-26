import React, { FC, ReactNode } from 'react'


type CoreProps = {
    plugins?: {
        pages?: ReactNode[]
    }
}

export const Core: FC<CoreProps> = ({plugins}) => {
    return (
        <div>
            <h1>Core</h1>
            <div style={{border: '1px solid red', padding: '50px'}}>
            {plugins?.pages}
            </div>
        </div>
    )
}

export default Core