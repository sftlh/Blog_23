import {withAuth} from 'next-auth/middleware'

export default withAuth({
    callbacks:{
        authorized:({req,token}) => {
            if(req.nextUrl.pathname === '/Admin'){
                return token?.role === 'Admin'
            }

            return Boolean(token)
        }
    }
})

export const config = {matcher : ['/admin', '/profile', '/protected/:path*']}