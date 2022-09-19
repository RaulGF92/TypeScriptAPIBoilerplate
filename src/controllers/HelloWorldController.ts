import {
    Controller,
    Get,
    Route,
} from "tsoa";
import { injectable } from "tsyringe";

export type HelloWorldDto = {
    msg: string
}

@injectable()
@Route("hello-world")
export class HelloWorldController extends Controller {

    @Get()
    public async getHelloWorld(): Promise<HelloWorldDto> {
        return { msg: "Hello World"};
    }
}