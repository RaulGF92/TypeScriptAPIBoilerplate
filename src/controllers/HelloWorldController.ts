import {
    Controller,
    Get,
    Route,
} from "tsoa";

export type HelloWorldDto = {
    msg: string
}

@Route("hello-world")
export class HelloWorldController extends Controller {

    @Get()
    public async getHelloWorld(): Promise<HelloWorldDto> {
        return { msg: "Hello World"};
    }
}