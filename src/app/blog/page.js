import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
          <h1>this is blog page</h1>
          <Link href="/blog/abcdef">
            go to
          </Link>
        </>
    );
};

export default page;