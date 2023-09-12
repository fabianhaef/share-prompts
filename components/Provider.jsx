"use client";

import { SessionProvider } from 'next-auth/react'

/* 
higher order components
Using the supplied <SessionProvider> allows instances of useSession() to share 
the session object across components, by using React Context under the hood. 
It also takes care of keeping the session updated and synced between tabs/windows.
*/
function Provider({children, session}) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider