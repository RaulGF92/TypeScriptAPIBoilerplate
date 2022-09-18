import {
    Controller,
    Get,
    Route,
} from "tsoa";

@Route("openapi")
export class OpenApiController extends Controller {

    @Get()
    public async getDoc(): Promise<any> {
        return await import("../../tsoa/routes/swagger.json");
    }
}