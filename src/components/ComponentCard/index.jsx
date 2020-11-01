import React from 'react'
import CardWrapper from '@/components/Card'
import Link from 'next/link'


export default function ComponentCard() {
    return (
        <Link href="/detail/123123">
        <CardWrapper
            style={{ width: 'calc(25% - 20px)' }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            Button
        </CardWrapper>
        </Link>
    )
}
