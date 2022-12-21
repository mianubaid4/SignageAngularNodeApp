import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        debugger
        const authRequest = req.clone({
            headers: req.headers.set("Authorization", "Basic YWRtaW46QWRtMW4=")
        })
        return next.handle(authRequest)
    }

}