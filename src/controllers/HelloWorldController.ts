import {
    Controller,
    Get,
    Route,
} from "tsoa";

export interface HelloWorldDto {
    msg: string
}

@Route("hello")
export class HelloWorldController extends Controller {

    @Get()
    public async getHelloWorld(): Promise<HelloWorldDto> {
        return { msg: "Hello World"};
    }
}